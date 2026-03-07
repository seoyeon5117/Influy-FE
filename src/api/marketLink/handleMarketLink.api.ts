import { instance } from '@/api/axiosInstance';
import { generateApiPath } from '@/api/utils';
import { API_DOMAINS } from '@/constants/api';
import { ApiResponse } from '@/types/common/ApiResponse.types';
import { BaseLinkType, LinkType } from '@/types/seller/LinkType.types';

export const postMarketLink = async ({ data }: { data: BaseLinkType }) => {
  const response = await instance.post(
    API_DOMAINS.SELLER_MY_POST_MARKET_LINKS,
    data
  );
  return response.data;
};

export const patchMarketLink = async ({
  sellerId,
  data,
  linkId,
}: {
  sellerId: number;
  data?: BaseLinkType;
  linkId: number;
}) => {
  const response = await instance.patch(
    generateApiPath(API_DOMAINS.SELLER_MY_HANDLE_MARKET_LINKS, { linkId }),
    data,
    { params: { sellerId } }
  );
  return response.data;
};

export const getMarketLinks = async ({ sellerId }: { sellerId: number }) => {
  return new Promise<ApiResponse<LinkType[] | []>>((resolve) => {
    setTimeout(() => {
      const links: LinkType[] =
        sellerId === 1
          ? [
              {
                id: 1,
                linkName: '깃허브',
                link: 'https://github.com/seoyeon5117',
              },
            ]
          : [
              {
                id: 2,
                linkName: '깃허브',
                link: 'https://github.com/seoyeon5117',
              },
            ];

      resolve({
        code: 'COMMON200',
        isSuccess: true,
        message: '성공',
        result: links,
      });
    }, 200);
  });
};

export const deleteMarketLink = async ({ linkId }: { linkId: number }) => {
  const response = await instance.delete(
    generateApiPath(API_DOMAINS.SELLER_MY_HANDLE_MARKET_LINKS, { linkId })
  );
  return response.data;
};
