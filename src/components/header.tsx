import { Address } from "./customer-data"
import { FreightCosts } from "./fulfillment"
import { FulFillmentIcon } from "./fulfillmentIcon"
import { Status } from "./status"

interface HeaderProps {
    orderId: string | null
    orderStatus: 'PENDING' | 'DELIVERED' | 'SEPARATION'
    fulfillments: {
        id: string
        status: 'PENDING' | 'DELIVERED' | 'SEPARATION'
        name?: string
        type?: string
        freightCosts: FreightCosts
        orderId: string
        deliveryAddress?: Address
    }[]
}
export function Header({ orderId, orderStatus, fulfillments }: HeaderProps) {

    return (
        <header>
            <div className="flex border border-b-zinc-300">
                <div className="pl-3 py-4 pr-20 border-r border-r-zinc-300 text-zinc-700 font-semibold text-lg">Tratamento de entregas</div>
                <div></div>
            </div>

            <div className="flex justify-between px-3 py-3 lg:justify-start lg:gap-10">
                <div className="flex flex-col gap-1">
                    <span className="text-zinc-400 text-sm font-semibold">Pedido</span>
                    <span>{ orderId }</span>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-zinc-400 text-sm font-semibold">Status do pedido</span>
                    <Status status={orderStatus} />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-zinc-400 text-sm font-semibold">Entregas relacionadas</span>
                    <div className="flex justify-start items-center gap-2">
                        {
                            fulfillments.map(value => <FulFillmentIcon key={value.id} fulfillmentId={value.id} />)
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}