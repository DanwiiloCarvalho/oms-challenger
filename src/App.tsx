import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./components/ui/collapsible";
import { Separator } from "./components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";

export function App() {
  return (
    <>
      <header className="">
        <div className="flex border border-b-zinc-300">
          <div className="pl-3 py-4 pr-20 border-r border-r-zinc-300 text-zinc-700 font-semibold text-lg">Tratamento de entregas</div>
          <div></div>
        </div>

        <div className="flex justify-between px-3 py-3">
          <div className="flex flex-col gap-1">
            <span className="text-zinc-400 text-sm font-semibold">Pedido</span>
            <span>22071559</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-zinc-400 text-sm font-semibold">Status do pedido</span>
            <div className="flex justify-start items-center gap-2">
              <span className="inline-block rounded-full w-4 h-4 bg-yellow-500 border border-yellow-600"></span>
              <span className="text-sm text-zinc-500">Pendente</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-zinc-400 text-sm font-semibold">Entregas relacionadas</span>
            <div className="flex justify-start items-center gap-2">
              <span className="inline-block border rounded-sm border-lime-600 text-lime-600 py-1 px-2 uppercase text-xs">f1</span>
              <span className="inline-block border rounded-sm border-lime-600 text-lime-600 py-1 px-2 uppercase text-xs">f2</span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-3 pb-3 space-y-4">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-zinc-900">Dados do Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-zinc-800">Renato Pereira</p>
                <p className="text-sm">434.654.123-90</p>
              </div>
              <div>
                <p className="text-zinc-800">renato.pereira@email.com</p>
                <p className="text-sm">(11) 98376-6343</p>
              </div>
              <div>
                <p className="text-zinc-400">Endereço de Cobrança</p>
                <p className="text-sm">Rua Oscar Freire, 333 São Paulo - SP - 00000-000</p>
              </div>
              <div>
                <p className="text-zinc-400">Endereço de Entrega</p>
                <p className="text-sm">Rua Oscar Freire, 333 São Paulo - SP - 00000-000</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-zinc-900">Dados do Pagamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-9">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="text-zinc-800">Subtotal</p>
                  <p className="text-sm">R$ 500,00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-zinc-800">Frete</p>
                  <p className="text-sm">R$ 200,00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-zinc-800">Desconto</p>
                  <p className="text-sm text-red-500">- R$ 10,00</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-800">Valor total</p>
                <p className="text-sm text-lime-600">R$ 510,00</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Separator className="h-0.5" />

              <div className="flex justify-between items-end w-full mt-3">
                <div className="space-y-1">
                  <p className="text-zinc-400">Método de Pagamento</p>
                  <p className="text-zinc-800 text-sm">VISA **** **** **** 3455 Exp. 23/02</p>
                </div>
                <p className="text-sm">1x de R$510,00</p>
              </div>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-zinc-900">Dados do Pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex flex-col">
                <p className="text-zinc-400">Comprado em</p>
                <p className="text-sm">05 de Fevereiro de 2019, às 19h30</p>
              </div>
              <div className="flex flex-col">
                <p className="text-zinc-400">Ponto de Venda</p>
                <p className="text-sm">E-commerce</p>
              </div>
              <div className="flex flex-col">
                <p className="text-zinc-400">Modalidade de Entrega</p>
                <p className="text-sm">F1 Envio pela loja, F2 Retira em Loja</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Collapsible className="group">
          <Card className="overflow-hidden">
            <div className="flex justify-center items-center h-20">
              <CollapsibleTrigger asChild className="border-r self-stretch">
                <button className="flex justify-center items-center bg-slate-100 w-20">
                  <ChevronDown strokeWidth="4" className="group-data-[state=open]:rotate-180 text-zinc-300" />
                </button>

              </CollapsibleTrigger>

              <div className="flex justify-between w-full px-4">
                <div className="flex flex-col gap-1">
                  <p className="text-lime-600">Entrega F1</p>
                  <p className="text-sm">22071559-F1</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-zinc-400">Status da entrega</p>
                  <div className="flex justify-start items-center gap-2">
                    <span className="inline-block rounded-full w-4 h-4 bg-lime-500 border border-lime-600"></span>
                    <p className="text-sm text-zinc-500">Pendente</p>
                  </div>
                </div>
              </div>
            </div>
            <CollapsibleContent className="p-6 space-y-4 border-t">
              <h2 className="text-lg font-semibold text-zinc-900">Dados da Entrega</h2>
              <div className="space-y-4">
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

              {/* <table className="border border-collapse">
                <thead className="bg-zinc-300">
                  <tr>
                    <td className="py-2 border-none">produto</td>
                    <td className="py-2 border-none">sku</td>
                    <td className="py-2 border-none">qtd.</td>
                    <td className="py-2 border-none">preço</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tenis Coca Coca Loretto - Feminino</td>
                    <td>AR384675</td>
                    <td>2</td>
                    <td>Subtotal</td>
                  </tr>
                </tbody>
              </table> */}


              <Table className="border-collapse rounded-t-lg overflow-hidden">
                <TableHeader>
                  <TableRow className="bg-slate-200">
                    <TableHead className="min-w-fit">Produto</TableHead>
                    <TableHead>sku</TableHead>
                    <TableHead>qtd.</TableHead>
                    <TableHead className="text-left">Preço</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-none">
                    <TableCell className="font-medium align-top">
                      <div className="flex flex-col items-start space-y-4">
                        {/* <div> */}
                        <img src="src/assets/tenisCocaLoretto.webp" alt="" width={50} className="border-2 rounded p-1" />
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
                      <div className="flex flex-col items-start space-y-4">
                        {/* <div> */}
                        <img src="src/assets/tenisCocaLoretto.webp" alt="" width={50} className="border-2 rounded p-1" />
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

      </main>
    </>
  )
}
