import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

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
              <span className="inline-block border rounded-sm border-lime-600 text-lime-500 py-1 px-2 uppercase text-xs">f1</span>
              <span className="inline-block border rounded-sm border-lime-600 text-lime-500 py-1 px-2 uppercase text-xs">f2</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="px-3 space-y-4">
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
                <p className="text-zinc-800">Endereço de Cobrança</p>
                <p className="text-sm">Rua Oscar Freire, 333 São Paulo - SP - 00000-000</p>
              </div>
              <div>
                <p className="text-zinc-800">Endereço de Entrega</p>
                <p className="text-sm">Rua Oscar Freire, 333 São Paulo - SP - 00000-000</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
