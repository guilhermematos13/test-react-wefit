import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Search } from ".";

const handleClickNavigate = jest.fn();

const searchParams = jest.fn().mockReturnValue({
  get: jest.fn().mockReturnValue(undefined),
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => handleClickNavigate,
  useSearchParams: () => [searchParams()],
}));

describe("Search Component", () => {
  const renderComponent = () => render(<Search />);

  it("should be view elements in component", () => {
    const { container } = renderComponent();

    expect(container.querySelectorAll("svg")).toHaveLength(1);
    expect(container.querySelectorAll("input")).toHaveLength(1);
    expect(container.querySelector("button")).toBeDisabled();
  });

  it("should be navigate to search url", async () => {
    searchParams.mockReturnValueOnce({
      get: jest.fn().mockReturnValue("aranha"),
    });

    const { container } = renderComponent();

    await userEvent.click(container.querySelector("button") as Element);
    expect(container.querySelector("button")).toBeEnabled();
    expect(handleClickNavigate).toHaveBeenCalledWith(
      "/search?search-query=aranha"
    );
  });

  it("should be navigate after type search", async () => {
    const { container } = renderComponent();

    await userEvent.type(container.querySelector("input") as Element, "aranha");
    await userEvent.click(container.querySelector("button") as Element);

    expect(handleClickNavigate).toHaveBeenCalledWith(
      "/search?search-query=aranha"
    );
  });
});
