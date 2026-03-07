import { Pagination } from '@/types/common/ApiResponse.types';
// import { instance } from '@/api/axiosInstance';
// import { generateApiPath } from '@/api/utils';
// import { API_DOMAINS } from '@/constants/api';
import { UserMyQuestions } from '@/types/common/TalkBox.types';

export const getUserQuestionList = async ({
  page,
  size: _size,
}: {
  page: number;
  size: number;
}) => {
  return new Promise<Pagination<UserMyQuestions[] | [], 'talkboxList'>>(
    (resolve) => {
      setTimeout(() => {
        // 첫 페이지만 데이터 반환
        if (page === 1) {
          const questions = [
            {
              itemId: 1,
              sellerId: 1,
              itemTitle: '다이슨 에어랩',
              itemMainPic: '/market1/product1/image1.jpg',
              sellerNickname: '원영',
              sellerProfilePic: '/profile1.jpg',
              lastChatContent: '이 제품은 어떤 피부 타입에 적합한가요?',
              lastChatTime: '2025-12-01T10:00:00Z',
              uncheckedCnt: 0,
            },
            {
              itemId: 2,
              sellerId: 2,
              itemTitle: '헤라 립 글로우',
              itemMainPic: '/market2/product1/image1.jpg',
              sellerNickname: '제니',
              sellerProfilePic: '/market2/profile2.jpg',
              lastChatContent: '사용법이 궁금합니다.',
              lastChatTime: '2025-12-02T14:30:00Z',
              uncheckedCnt: 1,
            },
          ];

          resolve({
            talkboxList: questions,
            listSize: questions.length,
            totalPage: 1,
            totalElements: questions.length,
            isFirst: true,
            isLast: true,
          });
        } else {
          // 2페이지 이후는 빈 배열
          resolve({
            talkboxList: [],
            listSize: 0,
            totalPage: 1,
            totalElements: 0,
            isFirst: false,
            isLast: true,
          });
        }
      }, 400);
    }
  );
};
