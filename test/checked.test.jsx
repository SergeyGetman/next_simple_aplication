import { render, screen } from "@testing-library/react";
import Users from "../pages/users";
import "@testing-library/jest-dom";
import { MOCK_DATA } from "../mock";
import Error from "../pages/404";
import NavigateLink from "../components/NavigateLink";

it("tested sussefully runed", () => {
  expect(true).toBe(true);
});

describe("App tests", () => {
  test("loads and displays greeting", async () => {
    // ARRANGE
    render(<Error />);
    expect(screen.getByText("This page doesn't found")).toBeInTheDocument();
  });
});

describe("App tests", () => {
  test("loads and displays greeting", async () => {
    // ARRANGE
    render(
      <NavigateLink text={"test"} children={"some test"} href={"test2"} />
    );
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("some test")).toBeInTheDocument();
  });
});
