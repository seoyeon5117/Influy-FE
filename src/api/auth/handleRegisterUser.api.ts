import { DUMMY_DATA } from '@/constants/dummyData';
import { SellerSignup, UserSignup } from '@/types/common/AuthTypes.types';

export const postRegisterSeller = async ({
  data: _data,
}: {
  data: SellerSignup;
}) => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({ ...DUMMY_DATA.USER_REGISTER, isSeller: true, sellerId: 1 });
    }, 800);
  });
};

export const postRegisterUser = async ({
  data: _data,
}: {
  data: UserSignup;
}) => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.USER_REGISTER);
    }, 800);
  });
};
