import { DUMMY_DATA } from '@/constants/dummyData';
import { ApiResponse } from '@/types/common/ApiResponse.types';
import {
  UserEditProfileType,
  UserProfileType,
} from '@/types/user/UserProfile.types';

export const getUserProfile = async ({
  memberId: _memberId,
}: {
  memberId: number;
}): Promise<ApiResponse<UserProfileType>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: '200',
        isSuccess: true,
        message: 'success',
        result: DUMMY_DATA.USER_PROFILE as any,
      });
    }, 500);
  });
};

export const patchUserProfile = async ({
  data,
}: {
  data: UserEditProfileType;
}) => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({
        code: '200',
        isSuccess: true,
        message: '프로필이 성공적으로 업데이트되었습니다.',
        result: { ...DUMMY_DATA.USER_PROFILE, ...data },
      });
    }, 700);
  });
};
