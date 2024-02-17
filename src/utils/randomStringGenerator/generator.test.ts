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

  test("can take an override generator", () => {
    const override: () => string = () => "aaaaa12345";
    const randomStrings = generateRandomStrings(2, override);

    //although these two strings are not unique, it is the responsibility of the provider of the override to make sure the random string generator is random
    //the purpose of this test is checking that the override is user, not that it generates good values
    expect(randomStrings[0]).toEqual("aaaaa12345");
    expect(randomStrings[1]).toEqual("aaaaa12345");
  });

  test("should throw an error if the override generator generates something non alpha numeric", () => {
    const override: () => string = () => "aaaaa12345;";
    expect(() => generateRandomStrings(2, override)).toThrow(
      "The override generator provided generated a non alphanumeric string"
    );
  });

  test("should throw an error if the override generator generates something non lower case", () => {
    const override: () => string = () => "ABCDE12345";
    expect(() => generateRandomStrings(2, override)).toThrow(
      "The override generator provided generated a string containing capital letters"
    );
  });
});