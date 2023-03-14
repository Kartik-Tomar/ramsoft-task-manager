import { render, screen } from '@testing-library/react';
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
})

