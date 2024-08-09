export const promisify = async <T>(callback: Function): Promise<T> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(callback());
    } catch (error) {
      reject(error);
    }
  });
};
