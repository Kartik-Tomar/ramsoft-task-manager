import { fireEvent, render, screen } from "@testing-library/react";
import CreateTask from "./CreateTask";

describe('CreateTask', () => {
    test('render', () => {
        render(<CreateTask/>);
        const createButton = screen.getByText(/Create Task/i);
        fireEvent.click(createButton);
        expect(createButton).toBeInTheDocument();
        const nameInputElement = screen.getByRole('textbox', { name: "name" });
        expect(nameInputElement).toBeInTheDocument();
        const descriptionInputElement = screen.getByRole('textbox', { name: "description" });
        expect(descriptionInputElement).toBeInTheDocument();
        const deadlineInputElement = screen.getByRole('textbox', { name: "deadline" });
        expect(deadlineInputElement).toBeInTheDocument();
    })
})