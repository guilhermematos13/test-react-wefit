import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Card } from ".";

const handleClickFn = jest.fn();
describe("Card Component", () => {
  const renderComponent = (quantity: number) => {
    return render(
      <Card
        image=""
        onClick={handleClickFn}
        quantity={quantity}
        title="Teste"
        value={9.99}
      />
    );
  };

  it("should be view elements in component", () => {
    const { container } = renderComponent(0);

    expect(screen.getByText("Teste")).toBeInTheDocument();
    expect(screen.getByText("R$ 9,99")).toBeInTheDocument();
    expect(screen.getByText("Adicionar ao Carrinho")).toBeInTheDocument();
    expect(container.querySelectorAll("img")).toHaveLength(2);
  });

  it("should be click in button", async () => {
    renderComponent(0);
    await userEvent.click(screen.getByText("Adicionar ao Carrinho"));

    expect(handleClickFn).toHaveBeenCalled();
  });

  it("should be view elements with quantity", () => {
    renderComponent(1);

    expect(screen.getByText("Item Adicionado")).toBeInTheDocument();
  });
});
