import { expect, test } from "vitest";
import { render } from "./render";

test("should render html", () => {
  const Example = () => {
    return <div>HELLO</div>;
  };

  const output = render(Example, {});
  expect(output).toBe(`<div>HELLO</div>`);
});
