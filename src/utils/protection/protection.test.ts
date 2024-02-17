import { Protection } from "./protection";

describe("protection", () => {
  test("protects words by replacing them with random strings", () => {
    jest.spyOn(Math, "random").mockImplementation(() => 0.4);

    const preservation = new Protection(["word"]);
    const protectedText = preservation.addWordProtection(
      "this sentence contains a word"
    );

    expect(protectedText).toEqual("this sentence contains a oooooooooo");
  });

  test("unprotects words by replacing them using the map", () => {
    jest.spyOn(Math, "random").mockImplementation(() => 0.4);

    const preservation = new Protection(["word"]);

    const unprotectedText = preservation.removeWordProtection(
      "this sentence contains a oooooooooo"
    );

    expect(unprotectedText).toEqual("this sentence contains a word");
  });
});

describe("protection with override string generator", () => {
  test("protects words by replacing them with random strings", () => {
    const overrideGenerator = (): string => "aaaaa";

    const preservation = new Protection(["word"], overrideGenerator);
    const protectedText = preservation.addWordProtection(
      "this sentence contains a word"
    );

    expect(protectedText).toEqual("this sentence contains a aaaaa");
  });

  test("unprotects words that were replaced with an override generator", () => {
    jest.spyOn(Math, "random").mockImplementation(() => 0.4);
    const overrideGenerator = (): string => "aaaaa";

    const preservation = new Protection(["word"], overrideGenerator);

    const unprotectedText = preservation.removeWordProtection(
      "this sentence contains a aaaaa"
    );

    expect(unprotectedText).toEqual("this sentence contains a word");
  });
});
