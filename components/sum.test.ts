import { sum } from "./sum";

describe("sum test", () => {
  it("sums 5+2 = 2", () => {
    expect(sum(5, 2)).toBe(7);
  });
});
