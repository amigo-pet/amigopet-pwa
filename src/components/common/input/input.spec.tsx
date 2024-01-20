import { Input } from "@/components/ui/input";
import { render } from "../../../config/tests/test-utils";

describe("Input", () => {
  it("Render input component correctly", () => {
    const inputRendered = render(<Input />);
    expect(inputRendered).toBeTruthy();
  });
});
