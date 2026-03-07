import { DUMMY_DATA } from '@/constants/dummyData';
import { PresignedUrlResponse } from '@/types/common/PresignedUrl.types';

export const postPresignedUrl = async (
  _imgName: string
): Promise<PresignedUrlResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.PRESIGNED_URL);
    }, 300);
  });
};
