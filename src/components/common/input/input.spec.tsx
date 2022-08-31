import { render } from "@testing-library/react";
import { Input } from "./input";

describe("Input", () => {
  it("Render input component correctly", () => {
    const inputRendered = render(<Input variant="transparant" />);
    expect(inputRendered).toBeTruthy();
  });
});
