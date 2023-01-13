import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"

describe('Greeting component', () => {
  test('Hello World in the doc', () => {
    render(<Greeting />);

    const helloWorld = screen.getByText('Hello World!');
    expect(helloWorld).toBeInTheDocument();
  })

  test('initial text', () => {
    render(<Greeting />);

    const initialText = screen.getByText("Hasn't changed yet")
    expect(initialText).toBeInTheDocument();
  })

  test('text it changing', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const changedText = screen.getByText("Changed")
    expect(changedText).toBeInTheDocument();
  })

  test('initial text is not rendered after click', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const initialText = screen.queryByText("Hasn't changed yet")
    expect(initialText).toBeNull();
  })

})
