import { format } from "date-fns";
import { ptBR } from 'date-fns/locale'

export function formatDateInFull(date: string) {
    const isoDate = new Date(date)
    const formattedDate = format(isoDate, "dd 'de' MMMM 'de' yyyy, 'às' HH:mm", {
        locale: ptBR
    })
    return formattedDate
}