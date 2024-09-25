interface StatusProps {
    status?: 'PENDING' | 'DELIVERED' | 'SEPARATION'
}

export function Status({ status = 'PENDING' }: StatusProps) {

    let statusMsg = undefined
    let color = undefined

    switch (status) {
        case 'PENDING':
            color = 'yellow'
            statusMsg = 'Pendente'
            break;
        case 'DELIVERED':
            color = 'lime'
            statusMsg = 'Entregue'
            break;
        case 'SEPARATION':
            color = 'cyan'
            statusMsg = 'Separação'
            break;
        default:
            break;
    }

    return (
        <div className="flex justify-start items-center gap-2">
            <span className={`inline-block rounded-full w-4 h-4 bg-${color}-500 border border-${color}-600`}></span>
            <p className="text-sm text-zinc-500">{statusMsg}</p>
        </div>
    )
}