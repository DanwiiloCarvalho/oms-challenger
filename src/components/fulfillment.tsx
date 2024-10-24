import { useAppSelector } from "@/store";
import { formatCurrency } from "@/utils/format-currency";
import { formatDateDayMonthYear } from "@/utils/format-date-day-month-year";
import { ChevronDown } from "lucide-react";
import { FulfillmentRow } from "./fulfillment-row";
import { Status } from "./status";
import { Card } from "./ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Separator } from "./ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export interface FreightCosts {
    totalTime: number
    totalPrice: number
    deliveryEstimatedDate: string
}

interface FulfillmentProps {
    id: string | undefined
    index: number
    orderId: string | null
}

export function Fulfillment({ index, orderId }: FulfillmentProps) {
    const fulfillment = useAppSelector(state => state.delivery.fulfillments[index])

    const units = fulfillment.items.reduce((units, currentUnit) => units + currentUnit.quantity, 0)
    const itemsQuantity = fulfillment.items.length < 10 ? fulfillment.items.length.toString().padStart(2, '0') : fulfillment.items.length

    const freightCost = fulfillment.freightCosts.totalPrice / fulfillment.items.length
    const subTotal = fulfillment.items.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0)
    const totalValue = subTotal + fulfillment.freightCosts.totalPrice

    return (
        <Collapsible className="group shadow-lg">
            <Card className="overflow-hidden">
                <div className="flex justify-center items-center h-20">
                    <CollapsibleTrigger asChild className="border-r self-stretch">
                        <button className="flex justify-center items-center bg-slate-100 w-20">
                            <ChevronDown strokeWidth="4" className="group-data-[state=open]:rotate-180 text-zinc-300" />
                        </button>

                    </CollapsibleTrigger>

                    <div className="flex justify-between w-full px-4 lg:justify-start lg:gap-20">
                        <div className="flex flex-col gap-1">
                            <p className="text-lime-600">Entrega {fulfillment.id}</p>
                            <p className="text-sm">{orderId}-{fulfillment.id}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-zinc-400">Status da entrega</p>
                            <div className="flex justify-start items-center gap-2">
                                <Status status={fulfillment.status} />
                            </div>
                        </div>
                    </div>
                </div>
                <CollapsibleContent className="p-6 space-y-4 border-t lg:space-y-7">
                    <h2 className="text-lg font-semibold text-zinc-900">Dados da Entrega</h2>
                    <div className="space-y-4 lg:flex lg:justify-start lg:flex-wrap lg:gap-x-24 lg:gap-y-6 lg:space-y-0">
                        <div>
                            <p className="text-zinc-400">Retirado por</p>
                            <p>{fulfillment.shipment.name}</p>
                            <p>845.983.233-90</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Modalidade</p>
                            <p>Envio pela loja</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Data Previsão Cliente</p>
                            <p>{formatDateDayMonthYear(fulfillment.freightCosts.deliveryEstimatedDate)}</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Endereço de Entrega</p>
                            <address>
                                <p>{fulfillment.shipment.address1}, {fulfillment.shipment.number} {fulfillment.shipment.city} - {fulfillment.shipment.state}</p>
                                <p>{fulfillment.shipment.zip}</p>
                            </address>
                        </div>
                        <div>
                            <p className="text-zinc-400">Transportadora</p>
                            <p>SISTEMAS S.A</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Tipo</p>
                            <p>{fulfillment.type}</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Preço do frete</p>
                            <p>{formatCurrency(fulfillment.freightCosts.totalPrice)}</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Data Previsão Transportadora</p>
                            <p>{formatDateDayMonthYear(fulfillment.freightCosts.deliveryEstimatedDate)}</p>
                        </div>
                    </div>

                    <Separator className="h-0.5" />

                    <h2 className="text-lg font-semibold text-zinc-900">Detalhes da Entrega</h2>

                    <Table className="border-collapse rounded-t-2xl overflow-hidden">
                        <TableHeader>
                            <TableRow className="bg-slate-200 uppercase">
                                <TableHead className="min-w-fit font-semibold">Produto</TableHead>
                                <TableHead className="font-semibold">sku</TableHead>
                                <TableHead className="font-semibold lg:text-center">qtd.</TableHead>
                                <TableHead className="text-left font-semibold">Preço</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>

                            {
                                fulfillment.items.map(item => {
                                    return (
                                        <FulfillmentRow 
                                            key={item.sku} 
                                            productName={item.name}
                                            productColor={item.color}
                                            productSize={item.size}
                                            sku={item.sku}
                                            quantity={item.quantity}
                                            freightCost={freightCost}
                                            price={item.price}
                                            imageUrl={item.image}
                                        />
                                    )
                                })
                            }

                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />

                                <TableCell className="text-right bg-red-50 align-top border-b-2">
                                    <Table className="min-w-64">
                                        <TableBody>
                                            <TableRow className="border-none w-full flex justify-between items-center">
                                                <TableCell className="text-slate-700">
                                                    {units < 10 ? units.toString().padStart(2, '0') : units} unidades de {itemsQuantity} itens
                                                </TableCell>
                                            </TableRow>

                                            <TableRow className="border-none w-full flex justify-between items-center">
                                                <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Subtotal</TableHead>
                                                <TableCell className="text-nowrap flex items-center text-slate-700">
                                                    {formatCurrency(subTotal)}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow className="border-none w-full flex justify-between items-center">
                                                <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Frete Total</TableHead>
                                                <TableCell className="text-nowrap text-slate-700">
                                                    {formatCurrency(fulfillment.freightCosts.totalPrice)}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow className="border-none w-full flex justify-between items-center mt-10">
                                                <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Valor total</TableHead>
                                                <TableCell className="text-nowrap text-slate-700">{formatCurrency(totalValue)}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>



                </CollapsibleContent>
            </Card>
        </Collapsible>
    )
}