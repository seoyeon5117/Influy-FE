import { instance } from '@/api/axiosInstance';
import { generateApiPath } from '@/api/utils';
import { SELLER_API_DOMAINS } from '@/constants/api';
import { ApiResponse, Pagination } from '@/types/common/ApiResponse.types';
import {
  ItemDetail,
  ItemPostDetail,
  ItemSortType,
  SellerItemPreviewList,
} from '@/types/common/ItemType.types';

import {
  ItemOverviewDTO,
  TalkBoxOpenedListDTO,
  TalkBoxOpenStatusType,
  TalkBoxCommentDTO,
  TalkBoxOpenStatusResponse,
} from '@/types/common/ItemType.types';
import { DUMMY_DATA } from '@/constants/dummyData';

export const getSellerItems = async ({
  sellerId,
  sortType,
}: {
  sellerId: number;
  archive: boolean;
  sortType?: ItemSortType;
  onGoing: boolean;
  page: number;
  size: number;
}) => {
  return new Promise<
    Pagination<SellerItemPreviewList[] | [], 'itemPreviewList'> & {
      sortType: ItemSortType;
    }
  >((resolve) => {
    setTimeout(() => {
      // sellerId에 따라 해당 셀러의 아이템들만 필터링
      const allItems = [
        ...DUMMY_DATA.RECOMMENDED_ITEMS.itemPreviewList,
        ...DUMMY_DATA.POPULAR_ITEMS.itemPreviewList,
        ...DUMMY_DATA.CLOSE_DEADLINE_ITEMS.itemPreviewList,
      ];

      // 중복된 itemId 제거
      const uniqueItems = allItems.filter(
        (item, index, self) =>
          index === self.findIndex((i) => i.itemId === item.itemId)
      );

      const sellerItems: SellerItemPreviewList[] = uniqueItems
        .filter((item) => item.sellerId === sellerId)
        .map((item) => ({
          itemId: item.itemId,
          sellerId: item.sellerId,
          itemPeriod: item.itemPeriod,
          itemName: item.itemName,
          sellerName: item.sellerNickname,
          startDate: item.startDate,
          endDate: item.endDate,
          tagline: item.tagline,
          currentStatus: item.currentStatus,
          liked: false,
          talkBoxInfo: {
            talkBoxOpenStatus: 'OPENED' as const,
            waitingCnt: Math.floor(Math.random() * 10) + 1,
            completedCnt: Math.floor(Math.random() * 20) + 5,
          },
          mainImg: item.itemMainImg,
          isDateUndefined: false,
        }));

      resolve({
        itemPreviewList: sellerItems,
        listSize: sellerItems.length,
        totalPage: 1,
        totalElements: sellerItems.length,
        isFirst: true,
        isLast: true,
        sortType: sortType || 'CREATE_DATE',
      });
    }, 500);
  });
};

export const postItem = async (data: ItemPostDetail) => {
  const response = await instance.post<ApiResponse<{ itemId: number }>>(
    SELLER_API_DOMAINS.SELLER_POST_ITEM,
    data
  );
  return response.data.result;
};

export const patchItem = async (data: ItemPostDetail, itemId: number) => {
  const response = await instance.put<ApiResponse<{ itemId: number }>>(
    generateApiPath(SELLER_API_DOMAINS.SELLER_HANDLE_ITEM, { itemId }),
    data
  );
  return response.data.result;
};

export const deleteItem = async (itemId: number) => {
  const response = await instance.delete<ApiResponse<{ itemId: number }>>(
    generateApiPath(SELLER_API_DOMAINS.SELLER_HANDLE_ITEM, { itemId })
  );
  return response.data.result;
};

export const patchItemArchiveStatus = async (
  itemId: number,
  isArchived: boolean
) => {
  const response = await instance.patch<ApiResponse<{ itemId: number }>>(
    generateApiPath(SELLER_API_DOMAINS.PATCH_ITEM_ARCHIVE_STATUS, { itemId }),
    {},
    { params: { isArchived } }
  );
  return response.data.result;
};

export const getSellerItemDetail = async ({
  sellerId: _sellerId,
  itemId,
}: {
  sellerId: number;
  itemId: number;
}) => {
  return new Promise<ItemDetail>((resolve) => {
    setTimeout(() => {
      const allItems = [
        ...DUMMY_DATA.RECOMMENDED_ITEMS.itemPreviewList,
        ...DUMMY_DATA.POPULAR_ITEMS.itemPreviewList,
        ...DUMMY_DATA.CLOSE_DEADLINE_ITEMS.itemPreviewList,
      ];

      const uniqueItems = allItems.filter(
        (item, index, self) =>
          index === self.findIndex((i) => i.itemId === item.itemId)
      );

      const itemData =
        uniqueItems.find((item) => item.itemId === itemId) ||
        DUMMY_DATA.RECOMMENDED_ITEMS.itemPreviewList[0];

      resolve({
        itemId,
        itemPeriod: itemData.itemPeriod,
        itemName: itemData.itemName,
        startDate: itemData.startDate,
        endDate: itemData.endDate,
        tagline: itemData.tagline,
        currentStatus: itemData.currentStatus,
        marketLink: 'https://example.com/market',
        isArchived: false,
        itemImgList: [
          itemData.itemMainImg,
          itemData.itemMainImg.replace('image1', 'image2'),
          itemData.itemMainImg.replace('image1', 'image3'),
        ],
        itemCategoryList: [1, 2],
        comment: itemData.tagline,
        regularPrice: 89000,
        salePrice: 79000,
        status: itemData.currentStatus,
        isDateUndefined: false,
        sellerInfo: {
          id: itemId,
          nickname: itemData.sellerNickname,
          profileImg: itemData.sellerProfileImg,
          instagram: itemData.sellerUsername,
        },
        talkBoxOpenStatus: 'OPENED' as const,
        liked: itemData.liked,
        unchecked: false,
      });
    }, 300);
  });
};

export const getItemOverview = async ({
  sellerId: _sellerId,
  itemId,
}: {
  sellerId: number;
  itemId: number;
}): Promise<ItemOverviewDTO> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allItems = [
        ...DUMMY_DATA.RECOMMENDED_ITEMS.itemPreviewList,
        ...DUMMY_DATA.POPULAR_ITEMS.itemPreviewList,
        ...DUMMY_DATA.CLOSE_DEADLINE_ITEMS.itemPreviewList,
      ];

      const uniqueItems = allItems.filter(
        (item, index, self) =>
          index === self.findIndex((i) => i.itemId === item.itemId)
      );

      const itemData =
        uniqueItems.find((item) => item.itemId === itemId) ||
        DUMMY_DATA.RECOMMENDED_ITEMS.itemPreviewList[0];

      resolve({
        id: itemId,
        itemName: itemData.itemName,
        tagline: itemData.tagline || '',
        mainImg: itemData.itemMainImg,
        talkBoxOpenStatus: 'OPENED' as const,
      });
    }, 300);
  });
};

export const getTalkBoxOpened = async (): Promise<TalkBoxOpenedListDTO> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allItems = [
        ...DUMMY_DATA.RECOMMENDED_ITEMS.itemPreviewList,
        ...DUMMY_DATA.POPULAR_ITEMS.itemPreviewList,
        ...DUMMY_DATA.CLOSE_DEADLINE_ITEMS.itemPreviewList,
      ];

      const uniqueItems = allItems.filter(
        (item, index, self) =>
          index === self.findIndex((i) => i.itemId === item.itemId)
      );

      const talkBoxOpenedDtoList = uniqueItems.map((item) => ({
        itemId: item.itemId,
        itemMainImg: item.itemMainImg,
        itemName: item.itemName,
        talkBoxCntInfo: {
          talkBoxOpenStatus: 'OPENED' as const,
          waitingCnt: Math.floor(Math.random() * 10) + 1,
          completedCnt: Math.floor(Math.random() * 20) + 5,
        },
        newCnt: Math.floor(Math.random() * 5),
      }));

      resolve({
        talkBoxOpenedDtoList,
        cnt: talkBoxOpenedDtoList.length,
        isItemExist: talkBoxOpenedDtoList.length > 0,
      });
    }, 300);
  });
};

export const postTalkBoxOpenStatus = async ({
  itemId,
  openStatus,
}: {
  itemId: number;
  openStatus: TalkBoxOpenStatusType;
}): Promise<TalkBoxOpenStatusResponse> => {
  const response = await instance.post(
    generateApiPath(SELLER_API_DOMAINS.SELLER_TALK_BOX_OPEN_STATUS, {
      itemId,
    }),
    null,
    {
      params: {
        openStatus,
      },
    }
  );

  return response.data.result;
};

export const getTalkBoxDefaultComment = async (
  itemId: number
): Promise<TalkBoxCommentDTO> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allItems = [
        ...DUMMY_DATA.RECOMMENDED_ITEMS.itemPreviewList,
        ...DUMMY_DATA.POPULAR_ITEMS.itemPreviewList,
        ...DUMMY_DATA.CLOSE_DEADLINE_ITEMS.itemPreviewList,
      ];

      const uniqueItems = allItems.filter(
        (item, index, self) =>
          index === self.findIndex((i) => i.itemId === item.itemId)
      );

      const itemData =
        uniqueItems.find((item) => item.itemId === itemId) ||
        DUMMY_DATA.RECOMMENDED_ITEMS.itemPreviewList[0];

      resolve({
        sellerId: itemData.sellerId,
        sellerProfileImg: itemData.sellerProfileImg,
        sellerUsername: itemData.sellerUsername,
        sellerNickname: itemData.sellerNickname,
        createdAt: new Date().toISOString(),
        talkBoxComment: `${itemData.itemName}에 대해 궁금한 점이 있으시면 언제든 문의해 주세요!`,
      });
    }, 200);
  });
};

interface PatchTalkBoxDefaultCommentRequest {
  talkBoxComment: string;
}

export const patchTalkBoxDefaultComment = async ({
  itemId,
  data,
}: {
  itemId: number;
  data: PatchTalkBoxDefaultCommentRequest;
}): Promise<void> => {
  await instance.patch(
    generateApiPath(SELLER_API_DOMAINS.PATCH_TALK_BOX_DEFAULT_COMMENT, {
      itemId,
    }),
    data
  );
};
