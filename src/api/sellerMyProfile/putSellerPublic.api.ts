// import { SELLER_API_DOMAINS } from '@/constants/api';
// import { instance } from '@/api/axiosInstance';
// import { ApiResponse } from '@/types/common/ApiResponse.types';
import { SellerPulicResponse } from '@/types/seller/SellerProfile.types';

export const putSellerPublic = async ({ status }: { status: boolean }) => {
  return new Promise<SellerPulicResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        sellerId: 1,
        isPublic: status,
      });
    }, 300);
  });
};
