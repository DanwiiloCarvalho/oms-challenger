import { useEffect } from "react";
import { CustomerData } from "./components/customer-data";
import { Fulfillment } from "./components/fulfillment";
import { Header } from "./components/header";
import { OrderDetails } from "./components/order-details";
import { PaymentDetails } from "./components/payment-details";
import { useAppDispatch, useAppSelector } from "./store";
import { loadDelivery } from "./store/slices/delivery";
import { Spinner } from "./components/ui/spinner";

export function App() {
  const delivery = useAppSelector(state => state.delivery)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadDelivery())
  }, [dispatch])

  return (
    delivery.id ? (
      <>
        <Header orderId={delivery.id} orderStatus={delivery.status} fulfillments={delivery.fulfillments} />

        <main className="px-3 pb-3 space-y-4">
          <div className="space-y-4 lg:flex lg:justify-between lg:gap-6 lg:space-y-0">

            <CustomerData
              name={delivery.customerData?.name}
              cpf={delivery.customerData?.cpf}
              email={delivery.customerData?.email}
              telephone={delivery.customerData?.telephone.number}
              billingAddress={delivery.customerData?.billingAddress}
              shipmentAddress={delivery.customerData?.shipmentAddress}
            />

            <PaymentDetails
              subTotal={delivery.payments?.totals.subtotal}
              freightCosts={delivery.payments?.totals.freightCosts}
              discount={delivery.payments?.totals.discount}
              total={delivery.payments?.totals.total}
              paymentMethod={delivery.payments?.paymentMethod}
            />
          </div>

          {
            delivery.orderDetails &&
            <OrderDetails purchasedIn={delivery.orderDetails?.createdAt} pointOfSale={delivery.orderDetails?.pointOfSale} />
          }

          {
            delivery.fulfillments.map((fulfillment, index) => {
              return (
                <Fulfillment
                  key={fulfillment.id}
                  id={fulfillment.id}
                  index={index}
                  orderId={delivery.id}
                />
              )
            })
          }

        </main>
      </>
    ) : (
      <div className="min-h-screen flex justify-center items-center">
        <Spinner>Carregando...</Spinner>
      </div>
    )
  )
}
