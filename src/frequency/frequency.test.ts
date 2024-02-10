import { allFrequencyCount, singleFrequencyCount } from "./frequency";

describe("frequencies", () => {
  describe("single frequency", () => {
    test("a single word sentence returns 100% frequency for that word", () => {
      const sentence = "why?";
      const frequency = singleFrequencyCount(sentence, "why");

      expect(frequency).toBe(1);
    });

    test("a two word sentence returns 50% frequency for one of the words (the words are different)", () => {
      const sentence = "why not?";
      const frequency = singleFrequencyCount(sentence, "not");

      expect(frequency).toBe(0.5);
    });

    test("percentages are limited to four decimal places", () => {
      const sentence = "why not me?";
      const frequency = singleFrequencyCount(sentence, "why");

      expect(frequency).toEqual(0.3333);
    });
  });

  describe("multi frequency", () => {
    test("a single word sentence returns a map with one word frequency of 100%", () => {
      const sentence = "why?";
      const frequencyMap = allFrequencyCount(sentence);

      const expectedFrequencyMap = new Map<string, number>().set("why", 1);

      expect(frequencyMap).toEqual(expectedFrequencyMap);
    });

    test("a two word sentence returns 50% frequency for each of the words in a map (the words are different)", () => {
      const sentence = "why not?";
      const frequencyMap = allFrequencyCount(sentence);

      const expectedFrequencyMap = new Map<string, number>()
        .set("why", 0.5)
        .set("not", 0.5);

      expect(frequencyMap).toEqual(expectedFrequencyMap);
    });

    test("a three word sentence returns 33.33% frequency for each of the words in a map (the words are different)", () => {
      const sentence = "why not me?";
      const frequencyMap = allFrequencyCount(sentence);

      const expectedFrequencyMap = new Map<string, number>()
        .set("why", 0.3333)
        .set("not", 0.3333)
        .set("me", 0.3333);

      expect(frequencyMap).toEqual(expectedFrequencyMap);
    });
  });
});
