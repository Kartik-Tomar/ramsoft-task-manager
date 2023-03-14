import { render, screen } from "@testing-library/react";
import TaskContainer from "./TaskContainer";

describe('TaskContainer', () => {
    test('render', () => {
        render(<TaskContainer label="Done"/>);
        const doneElement = screen.getByText(/done/i);
        expect(doneElement).toBeInTheDocument();
    })
})