import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export interface Address {
    address1: string
    number: string
    city: string
    state: string
    zip: string
}

interface CustomerDataProps {
    name: string | undefined
    cpf: string | undefined
    email: string | undefined
    telephone: string | undefined
    billingAddress: Address | undefined
    shipmentAddress: Address | undefined
}

export function CustomerData({ billingAddress, shipmentAddress, ...props }: CustomerDataProps) {
    if(typeof billingAddress === 'undefined') {
        return
    }

    if(typeof shipmentAddress === 'undefined') {
        return
    }

    const { address1, number, city, state, zip } = billingAddress
    const { 
        address1: shipmentAddress1, 
        number: shipmentNumber, 
        city: shipmentCity, 
        state: shipmentState, 
        zip: shipmentZip 
    } = shipmentAddress

    return (
        <Card className="shadow-lg lg:flex-1">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-zinc-900">Dados do Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <div>
                    <p className="text-zinc-800">{ props.name }</p>
                    <p className="text-sm">{ props.cpf }</p>
                </div>
                <div>
                    <p className="text-zinc-800">{ props.email }</p>
                    <p className="text-sm">{ props.telephone }</p>
                </div>
                <div>
                    <p className="text-zinc-400">Endereço de Cobrança</p>
                    <p className="text-sm">{address1}, {number} {city} - {state} - {zip}</p>
                </div>
                <div>
                    <p className="text-zinc-400">Endereço de Entrega</p>
                    <p className="text-sm">{shipmentAddress1}, {shipmentNumber} {shipmentCity} - {shipmentState} - {shipmentZip}</p>
                </div>
            </CardContent>
        </Card>
    )
}