import { useAppSelector } from "@/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Fulfillment } from "./fulfillment";

const response = {
    id: "F1",
    locationId: "359",
    shipment: {
        zip: "00000-000",
        city: "São Paulo",
        state: "SP",
        number: "333",
        status: "ACTIVE",
        country: "Brasil",
        address1: "Rua Oscar Freire",
        name: "Renato Pereira",
        telephone: {
            type: "billing",
            number: "(11) 98376-6343"
        }
    },
    status: "DELIVERED",
    type: "SHIPMENT",
    createdAt: "2019-02-05T19:30:00.000Z",
    updatedAt: "2019-02-05T19:30:00.000Z",
    freightCosts: {
        totalTime: 11,
        totalPrice: 10,
        deliveryEstimatedDate: "2019-03-05T19:30:00.000Z"
    },
    processedAt: "2019-03-05T19:30:00.000Z",
    locationType: "Own Store",
    items: [
        {
            sku: "AR384675",
            quantity: 2,
            stockType: "PHYSICAL",
            name: "Tenis Coca Coca Loretto - Feminino",
            size: "39",
            color: "Branco, Cinza",
            image: "https://images-americanas.b2w.io/produtos/7500215750/imagens/tenis-coca-cola-stream-leather-feminino/7500215756_1_xlarge.jpg",
            price: 100
        },
        {
            sku: "AR384677",
            quantity: 1,
            stockType: "PHYSICAL",
            name: "Tênis New Balance ML501 - Masculino",
            size: "40",
            color: "Preto",
            image: "https://imgcentauro-a.akamaihd.net/768x768/92344151.jpg",
            price: 100
        }
    ]
}


describe("Fulfillment", () => {

    beforeEach(() => {
        vi.mock(import('@/store'), async (importOriginal) => {
            const actual = await importOriginal()
            return {
                ...actual,
                useAppSelector: vi.fn(),
            }
        })

        vi.mocked(useAppSelector).mockReturnValue(response)
    })

    afterEach(() => {
        vi.clearAllMocks()
    })

    it("should open the Fulfillment component when clicked", async () => {
        render(
            <Fulfillment key="123" id="123" index={0} orderId="123" />
        )

        const button = await screen.findByRole('button')
        fireEvent.click(button)

        expect(button.getAttribute('data-state')).toBe('open')
    })

    it("should close the Fulfillment component when clicked", async () => {
        render(
            <Fulfillment key="123" id="123" index={0} orderId="123" />
        )

        const button = await screen.findByRole('button')

        fireEvent.click(button)
        fireEvent.click(button)
        expect(button.getAttribute('data-state')).toBe('closed')
    })

    it("should show one or more items in a fulfillment", () => {
        const { getByRole } = render(<Fulfillment key="123" id="123" index={0} orderId="123" />)

        const button = getByRole("button")
        fireEvent.click(button)


        const tableData = getByRole("cell", {
            name: "03 unidades de 02 itens"
        })

        expect(tableData).toBeInTheDocument()
    })
})