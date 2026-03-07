import { DUMMY_DATA } from '@/constants/dummyData';
import { ApiResponse } from '@/types/common/ApiResponse.types';

interface ReissueResponse {
  sellerId?: number;
  memberId: number;
  accessToken: string;
}

export const getReissue = async (): Promise<ApiResponse<ReissueResponse>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: '200',
        isSuccess: true,
        message: '토큰이 성공적으로 재발급되었습니다.',
        result: {
          memberId: DUMMY_DATA.KAKAO_LOGIN.memberId,
          accessToken: 'dummy_reissued_token_' + Date.now(),
          sellerId: undefined,
        },
      });
    }, 300);
  });
};
