//스웨거 질문 카테고리
import { instance } from '@/api/axiosInstance';
import { generateApiPath } from '@/api/utils';
import { SELLER_API_DOMAINS, API_DOMAINS } from '@/constants/api';
import {
  CategoryListResponse,
  GeneratedNameList,
  UserCategoryList,
} from '@/types/common/TalkBox.types';
import { DUMMY_DATA } from '@/constants/dummyData';

export const postGenerateQuestionCategory = async ({
  itemId,
}: {
  itemId: number;
}): Promise<string[]> => {
  const response = await instance.post(
    generateApiPath(SELLER_API_DOMAINS.SELLER_GENERATE_QUESTION_CATEGORY, {
      itemId,
    })
  );

  return response.data.result.generatedNameList;
};

export const postAddQuestionCategories = async ({
  itemId,
  categoryList,
}: {
  itemId: number;
  categoryList: string[];
}): Promise<GeneratedNameList> => {
  const response = await instance.post(
    generateApiPath(SELLER_API_DOMAINS.SELLER_ADD_QUESTION_CATEGORIES, {
      itemId,
    }),
    {
      categoryList,
    }
  );

  return response.data.result;
};

export const getCategoryList = async ({
  itemId: _itemId,
}: {
  itemId: number;
}): Promise<CategoryListResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        completedCnt: 25,
        waitingCnt: 8,
        completedCategoryList: DUMMY_DATA.TALKBOX_CATEGORIES.filter(
          (cat) => cat.unCheckedCnt === 0
        ),
        waitingCategoryList: DUMMY_DATA.TALKBOX_CATEGORIES.filter(
          (cat) => cat.unCheckedCnt > 0
        ),
      } as any);
    }, 300);
  });
};

export const getCategoryQuestionCounts = async ({
  questionCategoryId,
}: {
  questionCategoryId: number;
}): Promise<{ waitingCnt: number; completedCnt: number }> => {
  const response = await instance.get(
    generateApiPath(SELLER_API_DOMAINS.SELLER_CATEGORY_QUESTION_COUNTS, {
      questionCategoryId,
    })
  );

  return response.data.result;
};

export const getUserCategoryList = async (
  _itemId: number
): Promise<UserCategoryList> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        viewList: DUMMY_DATA.TALKBOX_CATEGORIES.map((cat) => ({
          questionCategoryId: cat.questionCategoryId,
          questionCategoryName: cat.questionCategoryName,
        })),
      } as any);
    }, 300);
  });
};

export interface UserQuestionResponse {
  id: number;
  content: string;
  categoryName: string;
  createdAt: string;
}

export const postUserQuestion = async ({
  itemId,
  questionCategoryId,
  content,
}: {
  itemId: number;
  questionCategoryId: number;
  content: string;
}): Promise<UserQuestionResponse> => {
  const path = generateApiPath(API_DOMAINS.USER_POST_QUESTION, {
    itemId,
    questionCategoryId,
  });

  const response = await instance.post(path, { content });

  return response.data.result;
};
