// import { API_DOMAINS } from '@/constants/api';
// import { instance } from '@/api/axiosInstance';

interface IdDuplicateCheckResponse {
  code: string;
  isSuccess: boolean;
  message: string;
  result: {
    isAvailable: boolean;
  };
}

export const postIdDuplicateCheck = async ({
  username,
}: {
  username: string;
}): Promise<IdDuplicateCheckResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 'COMMON200',
        isSuccess: true,
        message: '사용 가능한 아이디입니다.',
        result: {
          isAvailable:
            username !== 'wonyoung_official' && username !== 'jennierubyjane',
        },
      });
    }, 500);
  });
};
