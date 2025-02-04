import { render, screen } from "@testing-library/react"
import { Header } from "./header"

describe('Testa o componente Header', () => {
    it("should have a title in the header", async () => {
        render(<Header key="220771559" orderId="220771559" orderStatus="PENDING" fulfillments={[]} />)

        const title = await screen.findByRole("heading")
        expect(title).toBeInTheDocument()
    })

    it("should have the title 'Tratamento de entregas'", async () => {
        render(<Header key="220771559" orderId="220771559" orderStatus="PENDING" fulfillments={[]} />)

        const title = await screen.findByRole("heading")
        expect(title.textContent).toBe("Tratamento de entregas")
    })

    it("should have the field 'Pedido'", async () => {
        render(<Header key="220771559" orderId="220771559" orderStatus="PENDING" fulfillments={[]} />)

        const text = await screen.getByText("Pedido")
        expect(text).toBeInTheDocument()
    })

    it("should have the field 'Status do pedido'", async () => {
        render(<Header key="220771559" orderId="220771559" orderStatus="PENDING" fulfillments={[]} />)

        const text = await screen.getByText("Status do pedido")
        expect(text).toBeInTheDocument()
    })

    it("should have the field 'Entregas relacionadas'", async () => {
        render(<Header key="220771559" orderId="220771559" orderStatus="PENDING" fulfillments={[]} />)

        const text = await screen.getByText("Entregas relacionadas")
        expect(text).toBeInTheDocument()
    })
})