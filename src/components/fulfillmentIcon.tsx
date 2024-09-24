interface FulFillmentIconProps {
    fulfillmentId: string
}
export function FulFillmentIcon({ fulfillmentId }: FulFillmentIconProps) {
    return (
        <span className="inline-block border rounded-sm border-lime-600 text-lime-600 py-1 px-2 uppercase text-xs">{ fulfillmentId }</span>
    )
}