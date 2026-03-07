import { instance } from '@/api/axiosInstance';
import { generateApiPath } from '@/api/utils';
import { API_DOMAINS } from '@/constants/api';
import { ApiResponse, Pagination } from '@/types/common/ApiResponse.types';
import {
  BaseAnnouncement,
  AnnouncementType,
  PrimaryAnnouncementType,
} from '@/types/common/AnnouncementType.types';

export const postAnnouncement = async ({
  data,
}: {
  data: BaseAnnouncement;
}) => {
  const response = await instance.post(
    API_DOMAINS.SELLER_MY_ANNOUNCEMENT,
    data
  );
  return response.data.result;
};

export const patchAnnouncement = async ({
  data,
  announcementId,
  isPrimary,
}: {
  data?: BaseAnnouncement;
  announcementId: number;
  isPrimary?: boolean;
}) => {
  const params: Record<string, any> = { announcementId };
  if (isPrimary !== undefined) {
    params.isPrimary = isPrimary;
  }
  const response = await instance.patch(
    generateApiPath(API_DOMAINS.SELLER_MY_ANNOUNCEMENT_DETAIL, {
      announcementId,
    }),
    data || {},
    { params }
  );
  return response.data.result;
};

export const getAnnouncement = async ({
  sellerId,
  page,
  size,
}: {
  sellerId: number;
  page: number;
  size: number;
}) => {
  const response = await instance.get<
    ApiResponse<Pagination<AnnouncementType[] | [], 'announcements'>>
  >(generateApiPath(API_DOMAINS.SELLER_ANNOUNCEMENT, { sellerId }), {
    params: { page, size },
  });
  return response.data.result;
};

export const getPrimaryAnnouncement = async ({
  sellerId,
}: {
  sellerId: number;
}) => {
  return new Promise<PrimaryAnnouncementType | null>((resolve) => {
    setTimeout(() => {
      const announcement =
        sellerId === 1
          ? {
              id: 1,
              title: '🎉 새로운 뷰티 제품 출시! 할인 이벤트 진행중',
              totalAnnouncements: 3,
            }
          : {
              id: 2,
              title: '💎 럭셔리 컬렉션 신규 입고 소식',
              totalAnnouncements: 2,
            };

      resolve(announcement);
    }, 200);
  });
};

export const deleteAnnouncement = async ({
  announcementId,
}: {
  announcementId: number;
}) => {
  const response = await instance.delete(
    generateApiPath(API_DOMAINS.SELLER_MY_ANNOUNCEMENT_DETAIL, {
      announcementId,
    })
  );
  return response.data.result;
};
