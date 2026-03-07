// import axios from 'axios';

export const putPresignedUrl = async (
  _presignedUrl: string,
  _file: File
): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
