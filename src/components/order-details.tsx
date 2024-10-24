import { formatDateInFull } from "@/utils/fomat-date-in-full";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface OrderDetailsProps {
    pointOfSale: string | undefined
    purchasedIn: string | undefined
}

export function OrderDetails({ purchasedIn, pointOfSale }: OrderDetailsProps) {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-zinc-900">Dados do Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 lg:flex lg:justify-start lg:gap-20 lg:items-center lg:space-y-0">
                <div className="flex flex-col">
                    <p className="text-zinc-400">Comprado em</p>
                    <p className="text-sm">{formatDateInFull(purchasedIn as string)}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-zinc-400">Ponto de Venda</p>
                    <p className="text-sm">{pointOfSale}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-zinc-400">Modalidade de Entrega</p>
                    <p className="text-sm">F1 Envio pela loja, F2 Retira em Loja</p>
                </div>
            </CardContent>
        </Card>
    )
}