import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Separator } from "./components/ui/separator";

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
              <span className="text-base text-zinc-500">Pendente</span>
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

      <main className="px-3 space-y-4">
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
      </main>
    </>
  )
}
