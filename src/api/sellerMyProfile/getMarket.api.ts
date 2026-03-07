import { DUMMY_DATA } from '@/constants/dummyData';
import {
  SellerMarketType,
  SellerMyMarketType,
  SellerOverviewDTO,
} from '@/types/seller/SellerProfile.types';

// 유저의 셀러 마켓 조회
export const getMarket = async ({
  sellerId,
}: {
  sellerId: number;
}): Promise<SellerMarketType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sellerData =
        sellerId === 1
          ? {
              sellerId: 1,
              sellerProfile: {
                nickname: '원영',
                username: 'wonyoung_official',
                profileImg: '/profile1.jpg',
                backgroundImg: '/profile1.jpg',
                followerCnt: 1250000,
                introduction: '안녕하세요! 원영입니다 ✨',
                instagram: 'wonyoung_official',
                youtube: 'https://youtube.com/@wonyoung',
                tiktok: 'https://tiktok.com/@wonyoung',
                email: 'wonyoung@example.com',
                categoriesOfInterest: ['뷰티', '패션', '라이프스타일'],
              },
              publicItemCnt: 3,
              reviews: 25,
            }
          : {
              sellerId: 2,
              sellerProfile: {
                nickname: '제니',
                username: 'jennierubyjane',
                profileImg: '/profile2.jpg',
                backgroundImg: '',
                followerCnt: 2100000,
                introduction: '제니입니다.',
                instagram: 'jennierubyjane',
                youtube: 'https://youtube.com/@jennierubyjane',
                tiktok: 'https://tiktok.com/@jennierubyjane',
                email: 'jennie@example.com',
                categoriesOfInterest: ['패션', '뷰티', '럭셔리'],
              },
              publicItemCnt: 2,
              reviews: 18,
            };
      resolve(sellerData as any);
    }, 300);
  });
};

// 셀러 본인 마켓 조회
export const getMyMarket = async (): Promise<SellerMyMarketType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.SELLER_PROFILE as any);
    }, 500);
  });
};

// 셀러 오버뷰 정보
export const getSellerOverview = async (
  sellerId: number
): Promise<SellerOverviewDTO> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sellerData =
        sellerId === 1
          ? {
              sellerId: 1,
              profileImg: '/profile1.jpg',
              sellerUsername: 'wonyoung_official',
              sellerNickname: '원영',
            }
          : {
              sellerId: 2,
              profileImg: '/profile2.jpg',
              sellerUsername: 'jennierubyjane',
              sellerNickname: '제니',
            };
      resolve(sellerData);
    }, 300);
  });
};
