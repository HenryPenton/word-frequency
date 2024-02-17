import {
  ProtectionMap,
  addWordProtection,
  buildProtectionMap,
  removeWordProtection,
} from "./protection";

describe("protection", () => {
  test("can build a map between words and randomised strings", () => {
    const preservationMap: ProtectionMap = new Map();
    jest.spyOn(Math, "random").mockImplementation(() => 0.5);
    buildProtectionMap(["word"], preservationMap);

    expect(preservationMap.get("word")).toEqual("ssssssssss");
  });

  test("protects words by replacing them using the map", () => {
    const preservationMap: ProtectionMap = new Map();
    preservationMap.set("word", "abcdefghi");
    const protectedText = addWordProtection(
      preservationMap,
      "this sentence contains a word"
    );

    expect(protectedText).toEqual("this sentence contains a abcdefghi");
  });

  test("unprotects words by replacing them using the map", () => {
    const preservationMap: ProtectionMap = new Map();
    preservationMap.set("word", "abcdefghi");
    const protectedText = removeWordProtection(
      preservationMap,
      "this sentence contains a abcdefghi"
    );

    expect(protectedText).toEqual("this sentence contains a word");
  });
});
