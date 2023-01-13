import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test('Hello World in the doc', () => {
  render(<Greeting />);

  const helloWorld = screen.getByText('Hello World!');
  expect(helloWorld).toBeInTheDocument();
})
