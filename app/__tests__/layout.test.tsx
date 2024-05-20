import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import Layout from "../layout";

test("renders layout with welcome message", () => {
  const { getByText } = render(<Layout>Test Content</Layout>);
  expect(getByText("Test Content")).toBeInTheDocument();
});
