import { Address } from '@/components/customer-data'
import { FreightCosts, Fulfillment } from '@/components/fulfillment'
import { PaymentMethod } from '@/components/payment-details'
import { api } from '@/lib/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface Customer {
    email: string
    name: string
    telephone: {
        number: string
    }
    cpf: string
    billingAddress: Address
    shipmentAddress: Address
}

interface Item {
    /* item: { */
        sku: string
        quantity: number
        stockType: string
        name: string
        size: string
        color: string
        image: string
        price: number
    /* } */
}

interface Fulfillment {
    id: string
    status: 'PENDING' | 'DELIVERED' | 'SEPARATION'
    name?: string
    type?: string
    freightCosts: FreightCosts
    orderId: string
    deliveryAddress?: Address
    shipment: Address & {
        name: string
    }
    items: Item[]
}

export interface DeliveryState {
    id: string | null
    status: 'PENDING' | 'DELIVERED'
    customerData: Customer | null
    payments: {
        totals: {
            discount: number
            freightCosts: number
            subtotal: number
            total: number
        },
        paymentMethod: PaymentMethod
    } | null
    orderDetails: {
        pointOfSale: string
        createdAt: string
    } | null
    fulfillments: Fulfillment[]
}

const initialState: DeliveryState = {
    id: null,
    status: 'PENDING',
    customerData: null,
    payments: null,
    orderDetails: null,
    fulfillments: [] as Fulfillment[]
}

export const loadDelivery = createAsyncThunk('delivery/load', async () => {
    const id = await api.get('/id')
    const status = await api.get('/status')
    const customer = await api.get('/customer')
    const billingAddress = await api.get('/billingAddress')
    const payments = await api.get('/payments')
    const pointOfSale = await api.get('/pointOfSale')
    const createdAt = await api.get('/createdAt')
    const fulfillments = await api.get('/fulfillments')
    const totals = await api.get('/totals')

    const response = await Promise.all([id, status, customer, totals, payments, pointOfSale, createdAt, fulfillments, billingAddress])
    const result = response.map(value => value.data)

    return result
})

export const deliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadDelivery.fulfilled, (state, action) => {
            
            const loadDeliveryState: DeliveryState = {
                id: action.payload[0],
                status: action.payload[1],
                customerData: {
                    ...action.payload[2],
                    billingAddress: action.payload[8],
                    shipmentAddress: action.payload[8]
                },
                payments: {
                    totals: action.payload[3],
                    paymentMethod: action.payload[4][0]
                },
                orderDetails: {
                    pointOfSale: action.payload[5],
                    createdAt: action.payload[6]
                },
                fulfillments: Object.values(action.payload[7])
            }

            state.id = loadDeliveryState.id
            state.status = loadDeliveryState.status
            state.customerData = loadDeliveryState.customerData
            state.payments = loadDeliveryState.payments
            state.orderDetails = loadDeliveryState.orderDetails

            state.fulfillments = loadDeliveryState.fulfillments.map(fulfillment => {
                return { ...fulfillment, items: Object.values(fulfillment.items) }
            })
        })
    }
})

export const actions = deliverySlice.actions
export const delivery = deliverySlice.reducer