// 스웨거 '질문 관리'
import { instance } from '@/api/axiosInstance';
import { generateApiPath } from '@/api/utils';
import { SELLER_API_DOMAINS } from '@/constants/api';
import {
  QuestionResponse,
  SingleQuestionAnswerDTO,
  UserTalkBoxChat,
} from '@/types/common/TalkBox.types';
import { Pagination, PaginationType } from '@/types/common/ApiResponse.types';
import { DUMMY_DATA } from '@/constants/dummyData';
export const getAllQuestions = async ({
  questionCategoryId: _questionCategoryId,
  isAnswered: _isAnswered,
  page = 0,
  size: _size = 10,
}: {
  questionCategoryId: number;
  isAnswered: boolean;
  page?: number;
  size?: number;
}): Promise<QuestionResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (page === 0) {
        resolve(DUMMY_DATA.TALKBOX_QUESTIONS as any);
      } else {
        resolve({
          questions: [],
          listSize: 0,
          newQuestionCnt: 0,
          totalPage: 1,
          totalElements: 0,
          isFirst: false,
          isLast: true,
        });
      }
    }, 300);
  });
};

export const getQuestionsByTag = async ({
  questionTagId,
  isAnswered: _isAnswered,
  page = 0,
  size: _size = 10,
}: {
  questionTagId: number | null;
  isAnswered: boolean;
  page?: number;
  size?: number;
}): Promise<QuestionResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (questionTagId === null) {
        resolve({
          questions: [],
          listSize: 0,
          newQuestionCnt: 0,
          totalPage: 1,
          totalElements: 0,
          isFirst: true,
          isLast: true,
        });
        return;
      }

      if (page === 0) {
        // 특정 태그에 해당하는 질문들만 필터링
        const filteredQuestions = DUMMY_DATA.TALKBOX_QUESTIONS.questions.filter(
          (q) => q.tagId === questionTagId
        );

        resolve({
          ...DUMMY_DATA.TALKBOX_QUESTIONS,
          questions: filteredQuestions,
          listSize: filteredQuestions.length,
          totalElements: filteredQuestions.length,
        } as any);
      } else {
        resolve({
          questions: [],
          listSize: 0,
          newQuestionCnt: 0,
          totalPage: 1,
          totalElements: 0,
          isFirst: false,
          isLast: true,
        });
      }
    }, 300);
  });
};

export const deleteCategoryQuestions = async ({
  itemId,
  questionCategoryId,
  questionIdList,
}: {
  itemId: number;
  questionCategoryId: number;
  questionIdList: number[];
}): Promise<void> => {
  await instance.delete(
    generateApiPath(SELLER_API_DOMAINS.SELLER_DELETE_QUESTIONS_IN_CATEGORY, {
      itemId,
      questionCategoryId,
    }),
    {
      data: { questionIdList },
    }
  );
};

export const getSingleQuestionAnswer = async ({
  itemId,
  questionCategoryId,
  questionTagId,
  questionId,
}: {
  itemId: number;
  questionCategoryId: number;
  questionTagId: number;
  questionId: number;
}): Promise<SingleQuestionAnswerDTO> => {
  const response = await instance.get(
    generateApiPath(SELLER_API_DOMAINS.GET_SINGLE_QUESTION_ANSWER, {
      itemId,
      questionCategoryId,
      questionTagId,
      questionId,
    })
  );
  return response.data.result;
};

export const getUserTalkBoxHistory = async ({
  itemId: _itemId,
  page,
  size: _size,
}: PaginationType & { itemId: number }) => {
  return new Promise<Pagination<UserTalkBoxChat[] | [], 'chatList'>>(
    (resolve) => {
      setTimeout(() => {
        if (page === 1) {
          resolve(DUMMY_DATA.TALKBOX_USER_CHAT_HISTORY as any);
        } else {
          resolve({
            chatList: [],
            listSize: 0,
            totalPage: 1,
            totalElements: 0,
            isFirst: false,
            isLast: true,
          });
        }
      }, 300);
    }
  );
};
