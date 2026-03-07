// import { instance } from '@/api/axiosInstance';
// import { generateApiPath } from '@/api/utils';
// import { API_DOMAINS } from '@/constants/api';
import { Pagination, PaginationType } from '@/types/common/ApiResponse.types';
import {
  LikeSellerResponse,
  LikeType,
  SellerLikeList,
} from '@/types/user/Like.types';

export const postSellerLike = async ({ sellerId }: { sellerId: number }) => {
  return new Promise<LikeSellerResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        likeId: sellerId + 1000,
        memberId: 123,
        targetType: 'SELLER' as const,
        likeStatus: 'LIKE' as const,
        sellerId,
        sellerName: `셀러${sellerId}`,
      });
    }, 300);
  });
};

export const patchSellerLike = async ({ sellerId }: { sellerId: number }) => {
  return new Promise<LikeSellerResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        likeId: sellerId + 1000,
        memberId: 123,
        targetType: 'SELLER' as const,
        likeStatus: 'UNLIKE' as const,
        sellerId,
        sellerName: `셀러${sellerId}`,
      });
    }, 300);
  });
};

export const getSellerLikes = async ({ sellerId }: { sellerId: number }) => {
  return new Promise<LikeType>((resolve) => {
    setTimeout(() => {
      resolve({
        targetType: 'SELLER' as const,
        targetId: sellerId,
        likeCnt: 1250 + sellerId * 100,
        liked: sellerId === 1,
      });
    }, 200);
  });
};

export const getLikedSellerList = async ({
  page: _page,
  size: _size,
}: PaginationType) => {
  return new Promise<Pagination<SellerLikeList[] | [], 'sellerLikeList'>>(
    (resolve) => {
      setTimeout(() => {
        const sellers = [
          {
            sellerId: 1,
            nickName: '원영',
            userName: 'wonyoung_official',
            profileImgLink: '/profile1.jpg',
            likeCnt: 1250,
            liked: true,
          },
          {
            sellerId: 2,
            nickName: '제니',
            userName: 'jennierubyjane',
            profileImgLink: '/profile2.jpg',
            likeCnt: 2100,
            liked: true,
          },
        ];

        resolve({
          sellerLikeList: sellers,
          listSize: sellers.length,
          totalPage: 1,
          totalElements: sellers.length,
          isFirst: true,
          isLast: true,
        });
      }, 400);
    }
  );
};
