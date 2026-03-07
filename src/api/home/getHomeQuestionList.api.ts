import { DUMMY_DATA } from '@/constants/dummyData';
import { Pagination } from '@/types/common/ApiResponse.types';
import { SellerHomeItemStatus } from '@/types/common/ItemType.types';

export const getHomeQuestionList = async ({
  page: _page,
  size: _size,
}: {
  page: number;
  size: number;
}): Promise<
  Pagination<SellerHomeItemStatus[] | [], 'itemList'> & { hasAnyItem: boolean }
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.HOME_QUESTIONS);
    }, 500);
  });
};
