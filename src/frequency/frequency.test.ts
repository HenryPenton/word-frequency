import { singleFrequencyCount } from "./frequency";
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
});
