import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Counter } from ".";

const handleClickMinus = jest.fn();
const handleClickPlus = jest.fn();
describe("Counter Component", () => {
  const renderComponent = () => {
    return render(
      <Counter
        onClickMinus={handleClickMinus}
        onClickPlus={handleClickPlus}
        quantityValue={0}
      />
    );
  };

  it("should be view elements in component", () => {
    const { container } = renderComponent();

    expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    expect(container.querySelectorAll("img")).toHaveLength(2);
    expect(container.querySelector("input")).toBeInTheDocument();
  });

  it("should be click in button", async () => {
    const { container } = renderComponent();
    const minus = container.querySelectorAll("img");
    const plus = container.querySelectorAll("img");
    await userEvent.click(minus[0]);
    await userEvent.click(plus[1]);

    expect(handleClickMinus).toHaveBeenCalled();
    expect(handleClickPlus).toHaveBeenCalled();
  });
});
