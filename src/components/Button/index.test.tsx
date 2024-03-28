import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button } from "./";

const handleClickFn = jest.fn();
describe("Button Component", () => {
  const renderComponent = (full?: boolean) => {
    return render(
      <Button onClick={handleClickFn} $full={full}>
        Teste
      </Button>
    );
  };

  it("should be view elements in component", () => {
    renderComponent();

    expect(screen.getByText("Teste")).toBeInTheDocument();
  });

  it("should be click in button", async () => {
    renderComponent();
    await userEvent.click(screen.getByText("Teste"));

    expect(handleClickFn).toHaveBeenCalled();
  });

  it("should be view fulled button", () => {
    renderComponent(true);

    expect(screen.getByText("Teste")).toHaveStyle("width: 100%");
  });
});
