import { DUMMY_DATA } from '@/constants/dummyData';
import { Pagination, PaginationType } from '@/types/common/ApiResponse.types';
import { ItemCardType } from '@/types/common/ItemType.types';
import { LikeItemResponse, LikeType } from '@/types/user/Like.types';

export const postItemLike = async ({
  sellerId: _sellerId,
  itemId: _itemId,
}: {
  sellerId: number;
  itemId: number;
}): Promise<LikeItemResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.ITEM_LIKE_RESPONSE);
    }, 400);
  });
};

export const patchItemLike = async ({
  sellerId: _sellerId,
  itemId: _itemId,
}: {
  sellerId: number;
  itemId: number;
}): Promise<LikeItemResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...DUMMY_DATA.ITEM_LIKE_RESPONSE,
        likeStatus: 'UNLIKE' as const,
      });
    }, 400);
  });
};

export const getLikedItemList = async ({
  page: _page,
  size: _size,
}: PaginationType): Promise<
  Pagination<ItemCardType[] | [], 'itemLikeList'>
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.LIKED_ITEMS);
    }, 600);
  });
};

export const getItemLikeCounts = async ({
  sellerId: _sellerId,
  itemId: _itemId,
}: {
  sellerId: number;
  itemId: number;
}): Promise<LikeType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.ITEM_LIKE_COUNTS);
    }, 300);
  });
};
