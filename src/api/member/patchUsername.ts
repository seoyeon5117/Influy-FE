// import { API_DOMAINS } from '@/constants/api';
// import { instance } from '@/api/axiosInstance';

interface PatchUsernameResponse {
  username: string;
  isSuccess: boolean;
}

export const patchUsername = async ({
  data,
}: {
  data: {
    username: string;
  };
}): Promise<PatchUsernameResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: data.username,
        isSuccess: true,
      });
    }, 300);
  });
};
