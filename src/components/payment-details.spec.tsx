import { render, screen } from "@testing-library/react"
import { PaymentDetails } from "./payment-details"

const payments = {
    subTotal: 500,
    freightCosts: 20,
    discount: 10,
    total: 510,
    paymentMethod: {
        type: "CREDIT_CARD",
        brand: "VISA",
        amount: 500,
        installments: "1",
        expiresAt: "02/23",
        number: "**** **** **** 3455"
    }
}

const undefinedMethod = {
    ...payments,
    paymentMethod: undefined
}

describe("PaymentDetails", () => {
    it("should have the field 'Subtotal'", async () => {
        render(<PaymentDetails {...payments} />)

        const title = await screen.findByText("Subtotal")
        expect(title).toBeInTheDocument()
    })

    it("should have the field 'Frete'", async () => {
        render(<PaymentDetails {...payments} />)

        const title = await screen.findByText("Frete")
        expect(title).toBeInTheDocument()
    })

    it("should have the field 'Desconto'", async () => {
        render(<PaymentDetails {...payments} />)

        const title = await screen.findByText("Desconto")
        expect(title).toBeInTheDocument()
    })

    it("should have the red 'Desconto' field", async () => {
        render(<PaymentDetails {...payments} />)

        const title = await screen.findByText("Desconto")
        const discountValue = title.nextSibling
        
        expect(discountValue).toHaveClass("text-red-500")
    })

    it("should have the green 'Valor total' field", async () => {
        render(<PaymentDetails {...payments} />)

        const title = await screen.findByText("Valor total")
        const discountValue = title.nextSibling
        
        expect(discountValue).toHaveClass("text-lime-600")
    })

    it("should not render the PaymentDetails component if the payment method is not defined", async () => {
        render(<PaymentDetails {...undefinedMethod} />)

        const card = await screen.findByRole("generic")
        expect(card.children.length).toBe(0)
    })
})