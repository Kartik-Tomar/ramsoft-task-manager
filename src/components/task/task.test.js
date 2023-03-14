import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe('Task', () => {
    const data = {
        name: "task 1",
        description: "description",
        deadline: "deadline",
        status: "todo",
        id: 1678784673252
    }
    test('render', () => {
        render(<Task data={data}/>);
        const nameElement = screen.getByText(/task 1/i);
        expect(nameElement).toBeInTheDocument();
        const descriptionElement = screen.getByText(/description/i);
        expect(descriptionElement).toBeInTheDocument();
        const deadlineElement = screen.getByText(/deadline/i);
        expect(deadlineElement).toBeInTheDocument();
    })
})