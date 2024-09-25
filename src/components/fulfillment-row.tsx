import { formatCurrency } from "@/utils/format-currency";
import { Table, TableBody, TableCell, TableHead, TableRow } from "./ui/table";

interface FulfillmentRowProps {
    imageUrl: string
    productName: string
    productColor: string
    productSize: string
    sku: string
    quantity: number
    price: number
    freightCost: number
}

export function FulfillmentRow({ 
    imageUrl,
    productName, 
    productColor, 
    productSize, 
    sku, 
    quantity,
    price,
    freightCost
}: FulfillmentRowProps) {
    return (
        <TableRow className="border-none">
            <TableCell className="font-medium align-top">
                <div className="flex flex-col items-start space-y-4 lg:flex-row lg:items-center lg:space-y-0 lg:gap-4">
                    {/* <div> */}
                    <img src={imageUrl} alt="" className="border-2 rounded p-1 w-14 lg:w-16" />
                    {/* </div> */}
                    <div className="text-sm text-nowrap text-slate-700">
                        <p>{productName}</p>
                        <p>{productColor}, {productSize}</p>
                    </div>
                </div>
            </TableCell>
            <TableCell className="align-top text-slate-700">{sku}</TableCell>
            <TableCell className="align-top text-center text-slate-700">{quantity}</TableCell>
            <TableCell className="text-right bg-red-50 align-top border-b-2">

                <Table className="min-w-64">
                    <TableBody>
                        <TableRow className="border-none w-full flex justify-between items-center">
                            <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Subtotal</TableHead>
                            <TableCell className="text-nowrap flex items-center text-slate-700">{formatCurrency(price)}</TableCell>
                        </TableRow>

                        <TableRow className="border-none w-full flex justify-between items-center mt-10 text-slate-700">
                            <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Frete</TableHead>
                            <TableCell className="text-nowrap text-slate-700">{formatCurrency(freightCost)}</TableCell>
                        </TableRow>
                        <TableRow className="border-none w-full flex justify-between items-center">
                            <TableHead scope="row" className="text-nowrap flex items-center text-slate-700">Valor total</TableHead>
                            <TableCell className="text-nowrap text-slate-700">{formatCurrency((quantity * price) + freightCost)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableCell>
        </TableRow>
    )
}