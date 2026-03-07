import { DUMMY_DATA } from '@/constants/dummyData';
import { SellerThumbnailListType } from '@/types/user/Home.types';

export const getTrendingSeller = async (): Promise<SellerThumbnailListType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.TRENDING_SELLER);
    }, 500);
  });
};
