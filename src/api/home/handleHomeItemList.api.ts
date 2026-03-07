import { DUMMY_DATA } from '@/constants/dummyData';
import { Pagination, PaginationType } from '@/types/common/ApiResponse.types';
import { ItemCardType } from '@/types/common/ItemType.types';

export const getRecommendedItem = async ({
  page,
  categoryId,
}: {
  page: number;
  size: number;
  categoryId: number | null;
}): Promise<Pagination<ItemCardType[] | [], 'itemPreviewList'>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 첫 페이지만 데이터 반환, 그 이후는 빈 배열
      if (page === 1) {
        if (
          categoryId &&
          (DUMMY_DATA.CATEGORY_RECOMMENDATIONS as any)[categoryId]
        ) {
          resolve((DUMMY_DATA.CATEGORY_RECOMMENDATIONS as any)[categoryId]);
        } else {
          resolve(DUMMY_DATA.RECOMMENDED_ITEMS);
        }
      } else {
        // 2페이지 이후는 빈 데이터 반환
        resolve({
          itemPreviewList: [],
          listSize: 0,
          totalPage: 1,
          totalElements: 0,
          isFirst: false,
          isLast: true,
        });
      }
    }, 500);
  });
};

export const getPopularItem = async ({
  page,
}: PaginationType): Promise<
  Pagination<ItemCardType[] | [], 'itemPreviewList'>
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (page === 1) {
        resolve(DUMMY_DATA.POPULAR_ITEMS);
      } else {
        resolve({
          itemPreviewList: [],
          listSize: 0,
          totalPage: 1,
          totalElements: 0,
          isFirst: false,
          isLast: true,
        });
      }
    }, 500);
  });
};

export const getCloseDeadlineItem = async ({
  page,
}: PaginationType): Promise<
  Pagination<ItemCardType[] | [], 'itemPreviewList'>
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (page === 1) {
        resolve(DUMMY_DATA.CLOSE_DEADLINE_ITEMS);
      } else {
        resolve({
          itemPreviewList: [],
          listSize: 0,
          totalPage: 1,
          totalElements: 0,
          isFirst: false,
          isLast: true,
        });
      }
    }, 500);
  });
};
