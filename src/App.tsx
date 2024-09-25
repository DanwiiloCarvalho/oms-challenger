import { ChevronDown } from "lucide-react";
import { CustomerData } from "./components/customer-data";
import { Fulfillment } from "./components/fulfillment";
import { Header } from "./components/header";
import { OrderDetails } from "./components/order-details";
import { PaymentDetails } from "./components/payment-details";
import { Card } from "./components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./components/ui/collapsible";
import { Separator } from "./components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { formatDate } from "./utils/fomat-date";

export function App() {
  const fulfillments = ['f1', 'f2', 'f3']

  formatDate("2019-03-05T19:30:00.000Z")
  return (
    <>
      <Header orderId={22071559} orderStatus="Pendente" fulfillments={fulfillments} />

      <main className="px-3 pb-3 space-y-4">
        <div className="space-y-4 lg:flex lg:justify-between lg:gap-6 lg:space-y-0">

          <CustomerData
            name="Renato Pereira"
            cpf="434.654.123-90"
            email="renato.pereira@email.com"
            telephone="(11) 98376-6343"
            billingAddress={{
              address1: "Rua Oscar Freire",
              number: "333",
              city: "São Paulo",
              state: "SP",
              zip: "00000-000",
            }}
            shipmentAddress={{
              address1: "Rua Oscar Freire",
              number: "333",
              city: "São Paulo",
              state: "SP",
              zip: "00000-000",
            }}
          />

          <PaymentDetails 
            subTotal={500.00}
            freightCosts={20.00}
            discount={10.00}
            total={510.00}
            paymentMethod={{
              brand: "VISA",
              number: "**** **** **** 3455",
              expiresAt: "02/23",
              installments: "1",
              amount: 500,
            }}
          />
        </div>

        <OrderDetails purchasedIn="2019-02-05T19:30:00.000Z" pointOfSale="E-commerce" />

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
                  <p className="text-sm">22071559-F1</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-zinc-400">Status da entrega</p>
                  <div className="flex justify-start items-center gap-2">
                    <span className="inline-block rounded-full w-4 h-4 bg-lime-500 border border-lime-600"></span>
                    <p className="text-sm text-zinc-500">Entregue</p>
                  </div>
                </div>
              </div>
            </div>
            <CollapsibleContent className="p-6 space-y-4 border-t lg:space-y-7">
              <h2 className="text-lg font-semibold text-zinc-900">Dados da Entrega</h2>
              <div className="space-y-4 lg:flex lg:justify-start lg:flex-wrap lg:gap-x-24 lg:gap-y-6 lg:space-y-0">
                <div>
                  <p className="text-zinc-400">Retirado por</p>
                  <p>Alexandre de Oliveira Martins</p>
                  <p>845.983.233-90</p>
                </div>
                <div>
                  <p className="text-zinc-400">Modalidade</p>
                  <p>Envio pela loja</p>
                </div>
                <div>
                  <p className="text-zinc-400">Data Previsão Cliente</p>
                  <p>00/00/0000</p>
                </div>
                <div>
                  <p className="text-zinc-400">Endereço de Entrega</p>
                  <address>
                    <p>Rua Oscar Freire, 333 São Paulo - SP</p>
                    <p>03745-001</p>
                  </address>
                </div>
                <div>
                  <p className="text-zinc-400">Transportadora</p>
                  <p>SISTEMAS S.A</p>
                </div>
                <div>
                  <p className="text-zinc-400">Tipo</p>
                  <p>Expressa</p>
                </div>
                <div>
                  <p className="text-zinc-400">Preço do frete</p>
                  <p>R$00,00</p>
                </div>
                <div>
                  <p className="text-zinc-400">Data Previsão Transportadora</p>
                  <p>00/00/0000</p>
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
                  <TableRow className="border-none">
                    <TableCell className="font-medium align-top">
                      <div className="flex flex-col items-start space-y-4 lg:flex-row lg:items-center lg:space-y-0 lg:gap-4">
                        {/* <div> */}
                        <img src="src/assets/tenisCocaLoretto.webp" alt="" className="border-2 rounded p-1 w-14 lg:w-16" />
                        {/* </div> */}
                        <div className="text-sm text-nowrap text-slate-700">
                          <p>Tenis Coca Coca Loretto - Feminino</p>
                          <p>Branco, Cinza, 39</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="align-top text-slate-700">AR384675</TableCell>
                    <TableCell className="align-top text-center text-slate-700">2</TableCell>
                    <TableCell className="text-right bg-red-50 align-top border-b-2">

                      <Table className="min-w-64">
                        <TableBody>
                          <TableRow className="border-none w-full flex justify-between items-center">
                            <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Subtotal</TableHead>
                            <TableCell className="text-nowrap flex items-center text-slate-700">R$ 100,00</TableCell>
                          </TableRow>

                          <TableRow className="border-none w-full flex justify-between items-center mt-10 text-slate-700">
                            <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Frete</TableHead>
                            <TableCell className="text-nowrap text-slate-700">R$ 5,00</TableCell>
                          </TableRow>
                          <TableRow className="border-none w-full flex justify-between items-center">
                            <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Valor total</TableHead>
                            <TableCell className="text-nowrap text-slate-700">R$ 205,00</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-none">
                    <TableCell className="font-medium align-top">
                      <div className="flex flex-col items-start space-y-4 lg:flex-row lg:items-center lg:space-y-0 lg:gap-4">
                        {/* <div> */}
                        <img src="src/assets/tenisCocaLoretto.webp" alt="" className="border-2 rounded p-1 w-14 lg:w-16" />
                        {/* </div> */}
                        <div className="text-sm text-nowrap text-slate-700">
                          <p>Tênis New Balance ML501 - Masculino</p>
                          <p>Preto, 40</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="align-top text-slate-700">AR384677</TableCell>
                    <TableCell className="align-top text-center text-slate-700">1</TableCell>
                    <TableCell className="text-right bg-red-50 align-top border-b-2">

                      <Table className="min-w-64">
                        <TableBody>
                          <TableRow className="border-none w-full flex justify-between items-center">
                            <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Subtotal</TableHead>
                            <TableCell className="text-nowrap flex items-center text-slate-700">R$ 100,00</TableCell>
                          </TableRow>

                          <TableRow className="border-none w-full flex justify-between items-center mt-10">
                            <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Frete</TableHead>
                            <TableCell className="text-nowrap text-slate-700">R$ 5,00</TableCell>
                          </TableRow>
                          <TableRow className="border-none w-full flex justify-between items-center">
                            <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Valor total</TableHead>
                            <TableCell className="text-nowrap text-slate-700">R$ 205,00</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                    </TableCell>
                  </TableRow>

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

        <Fulfillment orderId="22071559" fulfillmentId="F2" status="DELIVERED" />

      </main>
    </>
  )
}
