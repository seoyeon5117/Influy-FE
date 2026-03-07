import { DUMMY_DATA } from '@/constants/dummyData';
import { SellerPickType } from '@/types/user/Home.types';

export const getSellerPick = async ({
  sellerId: _sellerId,
}: {
  sellerId: number;
}): Promise<SellerPickType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...DUMMY_DATA.SELLER_PICK,
        mainImgList: [DUMMY_DATA.SELLER_PICK.mainImgList[0]] as [
          { itemId: number; mainImg: string },
        ],
      });
    }, 500);
  });
};
