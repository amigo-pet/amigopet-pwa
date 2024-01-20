import { Button } from "@/components/ui/button";
import { render } from "@testing-library/react";

describe("Button", () => {
  it("Render button component correctly", () => {
    const buttonComponent = render(<Button>button</Button>);
    expect(buttonComponent).toBeTruthy();
  });
});
