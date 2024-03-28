import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Header } from ".";
import { CheckoutContextProvider } from "@context/CheckoutContext";

const handleClickNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => handleClickNavigate,
}));

jest.mock("@context/CheckoutContext", () => ({
  ...jest.requireActual("@context/CheckoutContext"),
  getTotalItems: jest.fn(),
}));

describe("Header Component", () => {
  const renderComponent = () =>
    render(
      <CheckoutContextProvider>
        <Header />
      </CheckoutContextProvider>
    );

  it("should be view elements in component", () => {
    const { container } = renderComponent();

    expect(screen.getByText("We Movies")).toBeInTheDocument();
    expect(screen.getByText("Meu carrinho")).toBeInTheDocument();
    expect(screen.getByText("0 itens")).toBeInTheDocument();
    expect(container.querySelectorAll("img")).toHaveLength(1);
  });

  it("should be click in cart button", async () => {
    renderComponent();
    await userEvent.click(screen.getByText("Meu carrinho"));

    expect(handleClickNavigate).toHaveBeenCalledWith("/checkout");
  });

  it("should be click in title button", async () => {
    renderComponent();
    await userEvent.click(screen.getByText("We Movies"));

    expect(handleClickNavigate).toHaveBeenCalledWith("/");
  });
});
