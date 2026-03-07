import { SELLER_API_DOMAINS } from '@/constants/api';
import { instance } from '@/api/axiosInstance';
import { generateApiPath } from '@/api/utils';
import { ItemAccessDTO } from '@/types/common/ItemType.types';
// import { ApiResponse } from '@/types/common/ApiResponse.types';

export const patchItemAccess = async ({
  itemId,
  data,
}: {
  itemId: number;
  data: ItemAccessDTO;
}) => {
  const response = await instance.patch(
    generateApiPath(SELLER_API_DOMAINS.SELLER_ITEM_ACCESS, { itemId }),
    data
  );
  return response.data.result;
};

export const getItemAccess = async ({
  itemId: _itemId,
}: {
  itemId: number;
}) => {
  return new Promise<ItemAccessDTO>((resolve) => {
    setTimeout(() => {
      resolve({
        archiveRecommended: true,
        searchAvailable: true,
      });
    }, 200);
  });
};
