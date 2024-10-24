import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { formatCurrency } from "@/utils/format-currency";

export interface PaymentMethod {
    type?: string
    brand: string
    amount: number
    installments: string
    expiresAt: string
    number: string
}

interface PaymentDetailsProps {
    subTotal: number | undefined
    freightCosts: number | undefined
    discount: number | undefined
    total: number | undefined
    paymentMethod: PaymentMethod | undefined
}

export function PaymentDetails({ subTotal, freightCosts, discount, total, ...props }: PaymentDetailsProps) {
    if (typeof props.paymentMethod === 'undefined') {
        return
    }
    const { brand, number, expiresAt, installments, amount } = props.paymentMethod
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-zinc-900">Dados do Pagamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-9">
                <div className="space-y-3">
                    <div className="flex justify-between">
                        <p className="text-zinc-800">Subtotal</p>
                        <p className="text-sm">{formatCurrency(subTotal as number)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-zinc-800">Frete</p>
                        <p className="text-sm">{formatCurrency(freightCosts as number)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-zinc-800">Desconto</p>
                        <p className="text-sm text-red-500">- {formatCurrency(discount as number)}</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-zinc-800">Valor total</p>
                    <p className="text-sm text-lime-600">{formatCurrency(total as number)}</p>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col">
                <Separator className="h-0.5" />

                <div className="flex flex-wrap justify-between items-end w-full mt-3 lg:gap-28">
                    <div className="space-y-1">
                        <p className="text-zinc-400">Método de Pagamento</p>
                        <p className="text-zinc-800 text-sm">{brand} {number} Exp. {expiresAt}</p>
                    </div>
                    <p className="text-sm">{installments}x de {formatCurrency(amount)}</p>
                </div>
            </CardFooter>
        </Card>
    )
}