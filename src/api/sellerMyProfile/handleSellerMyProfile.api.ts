import { SELLER_API_DOMAINS } from '@/constants/api';
import { ApiResponse } from '@/types/common/ApiResponse.types';
import { instance } from '@/api/axiosInstance';
import {
  SellerEditProfileType,
  SellerProfileType,
} from '@/types/seller/SellerProfile.types';

export const getSellerMyProfile = async () => {
  return new Promise<SellerProfileType>((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        sellerId: 1,
        username: 'wonyoung_official',
        nickname: '원영',
        backgroundImg: '/profile1.jpg',
        profileImg: '/profile1.jpg',
        instagram: 'wonyoung_official',
        tiktok: 'https://tiktok.com/@wonyoung',
        youtube: 'https://youtube.com/@wonyoung',
        email: 'wonyoung@example.com',
      });
    }, 300);
  });
};

export const patchSellerMyProfile = async ({
  data,
}: {
  data: SellerEditProfileType;
}) => {
  const response = await instance.patch<ApiResponse<SellerProfileType>>(
    SELLER_API_DOMAINS.SELLER_MY_PROFILE,
    data
  );
  return response.data.result;
};
