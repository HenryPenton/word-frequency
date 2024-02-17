const generateRandomString = (): string => {
  const alphanumeric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumeric.length);
    result += alphanumeric.charAt(randomIndex);
  }

  return result;
};

export const generateRandomStrings = (numberOfStrings: number): string[] => {
  const randomStrings: string[] = [];

  for (let count = 0; count < numberOfStrings; count++) {
    randomStrings.push(generateRandomString());
  }

  return randomStrings;
};
