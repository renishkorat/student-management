import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/store";

test("renders student management login page", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(
    screen.getByText(/welcome back/i)
  ).toBeInTheDocument();
});