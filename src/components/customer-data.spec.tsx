import { render, screen } from "@testing-library/react"
import { CustomerData } from "./customer-data"

const customer = {
    name: "Renato Pereira",
    cpf: "434.654.123-90",
    email: "renato.pereira@email.com",
    telephone: "(11) 98376-6343",
    billingAddress: {
        zip: "00000-000",
        city: "São Paulo",
        state: "SP",
        number: "333",
        status: "ACTIVE",
        country: "Brasil",
        address1: "Rua Oscar Freire",
        name: "Renato Pereira"
    },
    shipmentAddress: {
        zip: "00000-000",
        city: "São Paulo",
        state: "SP",
        number: "333",
        status: "ACTIVE",
        country: "Brasil",
        address1: "Rua Oscar Freire",
        name: "Renato Pereira"
    }
}

const undefinedBillingAddress = {
    ...customer,
    billingAddress: undefined,
}

const undefinedShipmentAddress = {
    ...customer,
    shipmentAddress: undefined,
}

describe('CustomerData', () => {
    it("should display the title 'Dados do Cliente'", async () => {
        render(<CustomerData {...customer} />)
        
        const title = await screen.findByRole("heading")
        expect(title.textContent).toBe("Dados do Cliente")
    })

    it("should display the field 'Endereço de Cobrança'", async () => {
        render(<CustomerData {...customer} />)
        
        const title = await screen.findByText("Endereço de Cobrança")
        expect(title).toBeInTheDocument()
    })

    it("should display the field 'Endereço de Entrega'", async () => {
        render(<CustomerData {...customer} />)
        
        const title = await screen.findByText("Endereço de Entrega")
        expect(title).toBeInTheDocument()
    })

    it("should not render the component if the billing address is not defined", async () => {
        render(<CustomerData {...undefinedBillingAddress} />)
        
        const card = await screen.findByRole("generic")
        expect(card.children.length).toBe(0)
    })

    it("should not render the component if the shipping address is not defined", async () => {
        render(<CustomerData {...undefinedShipmentAddress} />)
        
        const card = await screen.findByRole("generic")
        expect(card.children.length).toBe(0)
    })
})