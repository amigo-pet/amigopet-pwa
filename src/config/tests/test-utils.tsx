import React, { FC, ReactElement } from "react";
import { render as render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../global";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
