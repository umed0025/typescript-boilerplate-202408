import { sum } from "../sum.js";

describe("test sum", () => {
  test("success", () => {
    const actual = sum(1, 2);
    expect(actual).toBe(3);
  });
});
