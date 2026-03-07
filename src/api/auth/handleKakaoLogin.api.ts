import { DUMMY_DATA } from '@/constants/dummyData';
import {
  LoginedUserResult,
  RegisterResult,
} from '@/types/common/AuthTypes.types';

export const handleKakaoLogin = async (
  _code: string,
  _redirectToLocal: boolean
): Promise<RegisterResult | LoginedUserResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.KAKAO_LOGIN as any);
    }, 800);
  });
};
