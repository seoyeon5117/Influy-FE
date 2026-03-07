import { Pagination, PaginationType } from '@/types/common/ApiResponse.types';
import { ItemCardType } from '@/types/common/ItemType.types';
import { DUMMY_DATA } from '@/constants/dummyData';

export const getSearchedItems = async ({
  query: _query,
  page: _page,
  size: _size,
}: PaginationType & { query: string }): Promise<
  Pagination<ItemCardType[] | [], 'itemPreviewList'>
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.SEARCHED_ITEMS);
    }, 600);
  });
};
