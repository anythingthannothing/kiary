import { promisify } from '@app/nest-msa-library/utils/promisify';

export const generateRandomString = (length: number): Promise<string> => {
  return promisify<string>(() =>
    Math.random()
      .toString(32)
      .substring(1, 2 + length),
  );
};
