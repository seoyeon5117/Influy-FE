// import { SELLER_API_DOMAINS } from '@/constants/api';
// import { instance } from '@/api/axiosInstance';
// import { generateApiPath } from '@/api/utils';
import { ItemCurrentStatusType } from '@/types/common/ItemType.types';

export const patchItemStatus = async ({
  itemId,
  status,
}: {
  itemId: number;
  status: ItemCurrentStatusType;
}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        itemId,
        status,
      });
    }, 300);
  });
};
