/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  render as rtlRender,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AppProvider } from "@/app/provider";

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByTestId(/loading/i),
      ...screen.queryAllByText(/loading/i),
    ],
    { timeout: 4000 }
  );

export const renderApp = async (
  ui: any,
  { user, ...renderOptions }: Record<string, any> = {}
) => {
  const returnValue = {
    ...rtlRender(ui, {
      wrapper: AppProvider,
      ...renderOptions,
    }),
  };

  return returnValue;
};

export * from "@testing-library/react";
export { userEvent, rtlRender };
