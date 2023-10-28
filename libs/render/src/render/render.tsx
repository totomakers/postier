import { renderToStaticMarkup } from "react-dom/server";

export const render = <Props extends Record<string, unknown>>(
  componentFn: (props: Props) => JSX.Element,
  props: Props
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = componentFn as any;

  return renderToStaticMarkup(<Component {...props} />);
};
