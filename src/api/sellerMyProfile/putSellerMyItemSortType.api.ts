// import { SELLER_API_DOMAINS } from '@/constants/api';
// import { instance } from '@/api/axiosInstance';
import { ItemSortType } from '@/types/common/ItemType.types';

export const putSellerMyItemSortType = async ({
  sortType,
}: {
  sortType: ItemSortType;
}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        sortType,
        isSuccess: true,
      });
    }, 300);
  });
};
