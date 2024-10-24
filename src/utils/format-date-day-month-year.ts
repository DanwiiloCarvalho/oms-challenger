import { format } from "date-fns"

export function formatDateDayMonthYear(date: string) {
    const isoDate = new Date(date)
    const formattedDate = format(isoDate, "dd/MM/yyyy")

    return formattedDate
}