import { instance } from '@/api/axiosInstance';
import { generateApiPath } from '@/api/utils';
import { SELLER_API_DOMAINS } from '@/constants/api';
import { ApiResponse, Pagination } from '@/types/common/ApiResponse.types';
import {
  FaqCardDetailResponse,
  FaqCardRequestType,
  QuestionCardListType,
} from '@/types/common/FaqCardType.types';
import { FaqQuestion } from '@/types/common/ItemType.types';
import { DUMMY_DATA } from '@/constants/dummyData';

export const postFaqCard = async ({
  sellerId,
  faqCategoryId,
  itemId,
  data,
}: FaqCardRequestType) => {
  const response = await instance.post<ApiResponse<FaqCardDetailResponse>>(
    generateApiPath(SELLER_API_DOMAINS.SELLER_MY_POST_FAQ_CARD, { itemId }),
    data,
    {
      params: {
        sellerId,
        faqCategoryId,
      },
    }
  );
  return response.data.result;
};

export const patchFaqCard = async ({
  sellerId,
  itemId,
  faqCardId,
  data,
}: FaqCardRequestType & { faqCardId: number }) => {
  const response = await instance.patch(
    generateApiPath(SELLER_API_DOMAINS.SELLER_MY_HANDLE_FAQ_CARD, {
      itemId,
      faqCardId,
    }),
    data,
    {
      params: {
        sellerId,
      },
    }
  );
  return response.data.result;
};

export const deleteFaqCard = async ({
  itemId,
  faqCardId,
}: {
  itemId: number;
  faqCardId: number;
}) => {
  const response = await instance.delete<ApiResponse<{ id: 'number' }>>(
    generateApiPath(SELLER_API_DOMAINS.SELLER_MY_HANDLE_FAQ_CARD, {
      itemId,
      faqCardId,
    })
  );
  return response.data.result;
};

export const patchFaqPin = async ({
  itemId,
  faqCardId,
  isPinned,
}: {
  itemId: number;
  faqCardId: number;
  isPinned: boolean;
}) => {
  const response = await instance.patch<ApiResponse<FaqQuestion>>(
    generateApiPath(SELLER_API_DOMAINS.SELLER_MY_FAQ_PIN, {
      itemId,
      faqCardId,
    }),
    {},
    { params: { isPinned } }
  );
  return response.data.result;
};

export const getFaqCardDetail = async ({
  faqCardId,
}: {
  sellerId: number;
  itemId: number;
  faqCardId: number;
}) => {
  return new Promise<FaqCardDetailResponse>((resolve) => {
    setTimeout(() => {
      const faqCard =
        DUMMY_DATA.FAQ_CARDS.find((card) => card.faqCardId === faqCardId) ||
        DUMMY_DATA.FAQ_CARDS[0];

      resolve({
        id: faqCard.faqCardId,
        pinned: faqCard.isPinned,
        adjustImg: true,
        questionContent: faqCard.question,
        answerContent: faqCard.answer,
        backgroundImgLink: null,
        faqCategoryId: 1,
        updatedAt: faqCard.createdAt + 'T00:00:00Z',
      });
    }, 300);
  });
};

export const getFaqCardQuestionList = async ({
  faqCategoryId: _faqCategoryId,
}: {
  size: number;
  page: number;
  sellerId: number;
  itemId: number;
  faqCategoryId: number;
}) => {
  return new Promise<
    Pagination<QuestionCardListType[] | [], 'questionCardList'>
  >((resolve) => {
    setTimeout(() => {
      const questions = DUMMY_DATA.FAQ_CARDS.map((faqCard) => ({
        id: faqCard.faqCardId,
        questionContent: faqCard.question,
        pinned: faqCard.isPinned,
        updatedAt: faqCard.createdAt + 'T00:00:00Z',
      }));

      resolve({
        questionCardList: questions,
        listSize: questions.length,
        totalPage: 1,
        totalElements: questions.length,
        isFirst: true,
        isLast: true,
      });
    }, 300);
  });
};

interface FaqCardListParams {
  sellerId: number;
  itemId: number;
  faqCategoryId: number | null;
  page?: number;
  size?: number;
}

export const getFaqCardByCategory = async ({
  faqCategoryId,
}: FaqCardListParams) => {
  return new Promise<Pagination<FaqCardDetailResponse[] | [], 'faqCardList'>>(
    (resolve) => {
      setTimeout(() => {
        const faqCards = DUMMY_DATA.FAQ_CARDS.map((faqCard) => ({
          id: faqCard.faqCardId,
          pinned: faqCard.isPinned,
          adjustImg: true,
          questionContent: faqCard.question,
          answerContent: faqCard.answer,
          backgroundImgLink: null,
          faqCategoryId: faqCategoryId || 1,
          updatedAt: faqCard.createdAt + 'T00:00:00Z',
        }));

        resolve({
          faqCardList: faqCards,
          listSize: faqCards.length,
          totalPage: 1,
          totalElements: faqCards.length,
          isFirst: true,
          isLast: true,
        });
      }, 300);
    }
  );
};
