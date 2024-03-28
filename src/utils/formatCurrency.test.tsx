import { formatCurrency } from "./formatCurrency";

describe("Format Currency Function", () => {
  it("should be test format currency", () => {
    expect(formatCurrency(10)).toMatchSnapshot();
  });
});
