import { render, screen } from "@testing-library/react";
import { Status } from "./status";

type Status = 'PENDING' | 'SEPARATION' | 'DELIVERED'

describe('Status', () => {
    
    it("should display the 'Pendente' status when property value is 'PENDING'", async () => {
        render(<Status status="PENDING" />)

        const statusValue = await screen.findByRole("paragraph")
        expect(statusValue.textContent).toBe("Pendente")
    })

    it("should display the 'Separação' status when property value is 'SEPARATION'", async () => {
        render(<Status status="SEPARATION" />)

        const statusValue = await screen.findByRole("paragraph")
        expect(statusValue.textContent).toBe("Separação")
    })

    it("should display the 'Entregue' status when property value is 'DELIVERED'", async () => {
        render(<Status status="DELIVERED" />)

        const statusValue = await screen.findByRole("paragraph")
        expect(statusValue.textContent).toBe("Entregue")
    })

    it("should have a yellow circle for the 'PENDING' status", async () => {
        const { container } = render(<Status status="PENDING" />)
        const circle = container.querySelector('.rounded-full')

        expect(circle).toHaveClass('bg-yellow-500')
        expect(circle).toHaveClass('border-yellow-600')
    })

    it("should have a green circle for the 'DELIVERED' status", async () => {
        const { container } = render(<Status status="DELIVERED" />)
        const circle = container.querySelector('.rounded-full')

        expect(circle).toHaveClass('bg-lime-500')
        expect(circle).toHaveClass('border-lime-600')
    })

    it("should have a blue circle for the 'SEPARATION' status", async () => {
        const { container } = render(<Status status="SEPARATION" />)
        const circle = container.querySelector('.rounded-full')

        expect(circle).toHaveClass('bg-cyan-500')
        expect(circle).toHaveClass('border-cyan-600')
    })

    it("should display 'Pendente' value if a value for the status property is not passed", async () => {
        render(<Status />)

        const statusName = await screen.findByRole("paragraph")
        expect(statusName.textContent).toBe("Pendente")
    })
})