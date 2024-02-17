import { generateRandomStrings } from "./generator";

describe("random strings", () => {
  test("generates one random string", () => {
    const randomStrings = generateRandomStrings(1);
    expect(randomStrings).toHaveLength(1);
  });
  test("generates two random strings", () => {
    const randomStrings = generateRandomStrings(2);
    expect(randomStrings).toHaveLength(2);
  });

  test("generates more random strings", () => {
    const randomStrings = generateRandomStrings(27);
    expect(randomStrings).toHaveLength(27);
  });

  test("the random strings are not the same", () => {
    const randomStrings = generateRandomStrings(2);

    expect(randomStrings[0]).not.toEqual(randomStrings[1]);
  });
});
