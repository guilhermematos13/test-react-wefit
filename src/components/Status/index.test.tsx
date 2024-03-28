import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Status } from ".";

const handleClickFn = jest.fn();

describe("Status Component", () => {
  const renderComponent = (buttonText?: string) => {
    return render(
      <Status
        imageUrl=""
        text="Texto Teste"
        buttonText={buttonText}
        onClick={handleClickFn}
      />
    );
  };

  it("should be view elements in component", () => {
    const { container } = renderComponent("Botão Teste");

    expect(screen.getByText("Texto Teste")).toBeInTheDocument();
    expect(screen.getByText("Botão Teste")).toBeInTheDocument();
    expect(container.querySelectorAll("img")).toHaveLength(1);
  });

  it("should be click in button", async () => {
    renderComponent("Botão Teste");
    await userEvent.click(screen.getByText("Botão Teste"));

    expect(handleClickFn).toHaveBeenCalled();
  });

  it("should be view button text default", () => {
    renderComponent();
    expect(screen.getByText("Voltar")).toBeInTheDocument();
  });
});
