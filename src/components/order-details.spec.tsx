import { render, screen } from "@testing-library/react"
import { OrderDetails } from "./order-details"

const orderDetails = {
    pointOfSale: "E-commerce",
    purchasedIn: "2019-02-05T19:30:00.000Z"
}

describe("Testa o componente OrderDetails", () => {
    it("should have the title 'Dados do Pedido'", async () => {
        render(<OrderDetails {...orderDetails} />)

        const title = await screen.findByRole("heading")
        expect(title.textContent).toBe("Dados do Pedido")
    })

    it("should have the field 'Comprado em'", async () => {
        render(<OrderDetails {...orderDetails} />)

        const field = await screen.findByText("Comprado em")
        expect(field).toBeInTheDocument()
    })

    it("should have the field 'Ponto de Venda'", async () => {
        render(<OrderDetails {...orderDetails} />)

        const field = await screen.findByText("Ponto de Venda")
        expect(field).toBeInTheDocument()
    })

    it("should have the field 'Modalidade de Entrega'", async () => {
        render(<OrderDetails {...orderDetails} />)

        const field = await screen.findByText("Modalidade de Entrega")
        expect(field).toBeInTheDocument()
    })
})