import { DUMMY_DATA } from '@/constants/dummyData';
import { CategoryType } from '@/types/common/CategoryType.types';

export const getItemCategory = async (): Promise<{
  categoryDtoList: CategoryType[];
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        categoryDtoList: DUMMY_DATA.ITEM_CATEGORIES,
      });
    }, 400);
  });
};
