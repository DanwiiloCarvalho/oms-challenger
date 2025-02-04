import { render, screen } from "@testing-library/react"
import { FulFillmentIcon } from "./fulfillmentIcon"

describe('FulfillmentIcon', () => {
    it('should have green borders and text', async () => {
        render(<FulFillmentIcon fulfillmentId="F1" />)
        const fulfillmentIcon = await screen.findByText('F1')

        expect(fulfillmentIcon).toHaveClass("text-lime-600")
        expect(fulfillmentIcon).toHaveClass("border-lime-600")
    })
})