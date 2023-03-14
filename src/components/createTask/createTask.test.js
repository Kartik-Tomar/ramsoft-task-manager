import { render, screen } from "@testing-library/react";
import CreateTask from "./CreateTask";

describe('CreateTask', () => {
    test('render', () => {
        render(<CreateTask/>);
        const createButton = screen.getByText(/create/i);
        expect(createButton).toBeInTheDocument();
    })
})