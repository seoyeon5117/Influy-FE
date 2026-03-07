import { DUMMY_DATA } from '@/constants/dummyData';

export const postLogout = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.LOGOUT_SUCCESS);
    }, 500);
  });
};
