import { ChevronDown } from "lucide-react";
import { Card } from "./ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Separator } from "./ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Address } from "./customer-data";
import { Status } from "./status";
import { formatCurrency } from "@/utils/format-currency";
import { FulfillmentRow } from "./fulfillment-row";

interface FreightCosts {
    totalTime: number
    totalPrice: number
    deliveryEstimatedDate: string
}

interface FulfillmentProps {
    fulfillmentId: string
    status: 'PENDING' | 'DELIVERED' | 'SEPARATION'
    name?: string
    type?: string
    freightCosts: FreightCosts
    orderId: string
    deliveryAddress?: Address
}

export function Fulfillment({ status, ...props }: FulfillmentProps) {

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
                            <p className="text-lime-600">Entrega F1</p>
                            <p className="text-sm">{props.orderId}-{props.fulfillmentId}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-zinc-400">Status da entrega</p>
                            <div className="flex justify-start items-center gap-2">
                                <Status status={status} />
                            </div>
                        </div>
                    </div>
                </div>
                <CollapsibleContent className="p-6 space-y-4 border-t lg:space-y-7">
                    <h2 className="text-lg font-semibold text-zinc-900">Dados da Entrega</h2>
                    <div className="space-y-4 lg:flex lg:justify-start lg:flex-wrap lg:gap-x-24 lg:gap-y-6 lg:space-y-0">
                        <div>
                            <p className="text-zinc-400">Retirado por</p>
                            <p>{props.name}</p>
                            <p>845.983.233-90</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Modalidade</p>
                            <p>Envio pela loja</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Data Previsão Cliente</p>
                            <p>{props.freightCosts?.deliveryEstimatedDate}</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Endereço de Entrega</p>
                            <address>
                                {/* <p>Rua Oscar Freire, 333 São Paulo - SP</p> */}
                                <p>{props.deliveryAddress?.address1}, {props.deliveryAddress?.number} {props.deliveryAddress?.city} - {props.deliveryAddress?.state}</p>
                                {/* <p>03745-001</p> */}
                                <p>{props.deliveryAddress?.zip}</p>
                            </address>
                        </div>
                        <div>
                            <p className="text-zinc-400">Transportadora</p>
                            <p>SISTEMAS S.A</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Tipo</p>
                            <p>{props.type}</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Preço do frete</p>
                            <p>{formatCurrency(props.freightCosts?.totalPrice)}</p>
                        </div>
                        <div>
                            <p className="text-zinc-400">Data Previsão Transportadora</p>
                            <p>{props.freightCosts?.deliveryEstimatedDate}</p>
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
                            
                            <FulfillmentRow
                                imageUrl="src/assets/tenisCocaLoretto.webp"
                                productName="Tenis Coca Coca Loretto - Feminino"
                                productColor="Branco, Cinza"
                                productSize="39"
                                sku="AR384675"
                                quantity={2}
                                freightCost={5}
                                price={100}
                            />

                            <FulfillmentRow
                                imageUrl="src/assets/tenisCocaLoretto.webp"
                                productName="Tênis New Balance ML501 - Masculino"
                                productColor="Preto"
                                productSize="40"
                                sku="AR384677"
                                quantity={1}
                                freightCost={5}
                                price={100}
                            />

                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />

                                <TableCell className="text-right bg-red-50 align-top border-b-2">
                                    <Table className="min-w-64">
                                        <TableBody>
                                            <TableRow className="border-none w-full flex justify-between items-center">
                                                <TableCell className="text-slate-700">
                                                    03 unidades de 02 itens
                                                </TableCell>
                                            </TableRow>

                                            <TableRow className="border-none w-full flex justify-between items-center">
                                                <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Subtotal</TableHead>
                                                <TableCell className="text-nowrap flex items-center text-slate-700">R$ 300,00</TableCell>
                                            </TableRow>

                                            <TableRow className="border-none w-full flex justify-between items-center">
                                                <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Frete Total</TableHead>
                                                <TableCell className="text-nowrap text-slate-700">R$ 10,00</TableCell>
                                            </TableRow>
                                            <TableRow className="border-none w-full flex justify-between items-center mt-10">
                                                <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Valor total</TableHead>
                                                <TableCell className="text-nowrap text-slate-700">R$ 310,00</TableCell>
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