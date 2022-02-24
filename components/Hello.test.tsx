import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

describe("Hello tests", () => {
  it("should render", () => {
    render(<Hello />);
    const myElement = screen.getByText("Hello");
    expect(myElement).toBeInTheDocument();
  });
});
