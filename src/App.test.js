import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders heading', () => {
    render(<App />);
    const linkElement = screen.getByText(/Task Manager/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders three column and button', () => {
    render(<App />);
    const todoElement = screen.getByText(/Todo/i);
    expect(todoElement).toBeInTheDocument();
    const inProgressElement = screen.getByText(/In Progress/i);
    expect(inProgressElement).toBeInTheDocument();
    const doneElement = screen.getByText(/Done/i);
    expect(doneElement).toBeInTheDocument();
    const buttonElement = screen.getByText(/create task/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('Create Task', async () => {
    render(<App />);
    const createButton = screen.getByText(/Create Task/i);
    fireEvent.click(createButton);
    const nameInputElement = screen.getByRole('textbox', { name: "name" });
    expect(nameInputElement).toBeInTheDocument();
    fireEvent.change(nameInputElement, {target: {value: 'test 1'}})
    const createButtonModal = screen.getByRole('button', { type: "submit" });
    fireEvent.click(createButtonModal);
    const nameTaskElement = await screen.findByText('Name: test 1');
    expect(nameTaskElement).toBeInTheDocument();
  })
})

