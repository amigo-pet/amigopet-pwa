import { Input } from "./input";
import { render } from "../../../config/tests/test-utils";

describe("Input", () => {
  it("Render input component correctly", () => {
    const inputRendered = render(<Input variant="transparant" />);
    expect(inputRendered).toBeTruthy();
  });
});
