export const generateRandomString = async (length: number): Promise<string> => {
  return Math.random()
    .toString(32)
    .substring(2, 3 + length);
};
