const generateRandomString = (): string => {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumeric.length);
    result += alphanumeric.charAt(randomIndex);
  }

  return result;
};

export const generateRandomStrings = (
  numberOfStrings: number,
  override?: () => string
): string[] => {
  const randomStrings: string[] = [];

  for (let count = 0; count < numberOfStrings; count++) {
    const randomValue = override ? override() : generateRandomString();
    if (override && !isAlphaNumeric(randomValue)) {
      throw new Error(
        "The override generator provided generated a non alphanumeric string"
      );
    }
    if (containsCaps(randomValue)) {
      throw new Error(
        "The override generator provided generated a string containing capital letters"
      );
    }
    randomStrings.push(randomValue);
  }

  return randomStrings;
};
const isAlphaNumeric = (string: string): boolean => {
  return /^[a-zA-Z0-9]+$/.test(string);
};

const containsCaps = (string: string): boolean => {
  return /[A-Z]/.test(string);
};
