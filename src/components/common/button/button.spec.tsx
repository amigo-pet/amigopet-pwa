import { render } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("Render button component correctly", () => {
    const buttonComponent = render(<Button>button</Button>);
    expect(buttonComponent).toBeTruthy();
  });
});
