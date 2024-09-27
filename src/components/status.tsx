interface StatusProps {
    status?: 'PENDING' | 'DELIVERED' | 'SEPARATION'
}

export function Status({ status = 'PENDING'}: StatusProps) {
    let statusMsg = undefined
    let color = undefined

    switch (status) {
        case 'PENDING':
            color = 'bg-yellow-500 border border-yellow-600'
            statusMsg = 'Pendente'
            break;
        case 'DELIVERED':
            color = 'bg-lime-500 border border-lime-600'
            statusMsg = 'Entregue'
            break;
        case 'SEPARATION':
            color = 'bg-cyan-500 border border-cyan-600'
            statusMsg = 'Separação'
            break;
        default:
            break;
    }
    
    return (
        <div className="flex justify-start items-center gap-2">
            <span className={`inline-block rounded-full w-4 h-4 ${color}`}></span>
            <p className="text-sm text-zinc-500">{statusMsg}</p>
        </div>
    )
}