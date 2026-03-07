export const DUMMY_DATA = {
  // Home
  TRENDING_SELLER: {
    sellerThumbnailList: [
      {
        sellerId: 1,
        profileImg: '/profile1.jpg',
        sellerUsername: 'wonyoung_official',
        sellerNickname: '원영',
      },
      {
        sellerId: 2,
        profileImg: '/profile2.jpg',
        sellerUsername: 'jennierubyjane',
        sellerNickname: '제니',
      },
    ],
  },

  RECOMMENDED_ITEMS: {
    itemPreviewList: [
      {
        itemId: 1,
        sellerId: 1,
        sellerProfileImg: '/profile1.jpg',
        sellerUsername: 'wonyoung_official',
        sellerNickname: '원영',
        itemMainImg: '/market1/product1/image1.jpg',
        itemPeriod: 7,
        itemName: '다이슨 에어랩',
        startDate: '2026-12-01T00:00:00Z',
        endDate: '2026-12-31T23:59:59Z',
        tagline:
          '뿌리 끝까지 선명한 컬을 연출하는 콘 배럴로 다양하고 트렌디한 스타일링을 완성하는 멀티 스타일러',
        currentStatus: 'DEFAULT' as const,
        liked: false,
      },
      {
        itemId: 2,
        sellerId: 2,
        sellerProfileImg: '/profile2.jpg',
        sellerUsername: 'jennierubyjane',
        sellerNickname: '제니',
        itemMainImg: '/market2/product1/image1.jpg',
        itemPeriod: 10,
        itemName: '헤라 립 글로우',
        startDate: '2026-01-01T00:00:00Z',
        endDate: '2026-12-25T23:59:59Z',
        tagline: '놓치면 후회하는 한정판 컬렉션',
        currentStatus: 'DEFAULT' as const,
        liked: true,
      },
    ],
    listSize: 2,
    totalPage: 10,
    totalElements: 50,
    isFirst: true,
    isLast: false,
  },

  POPULAR_ITEMS: {
    itemPreviewList: [
      {
        itemId: 3,
        sellerId: 1,
        sellerProfileImg: '/profile1.jpg',
        sellerUsername: 'wonyoung_official',
        sellerNickname: '원영',
        itemMainImg: '/market1/product2/image1.jpg',
        itemPeriod: 5,
        itemName: '메디큐브 올인원케어 부스터프로',
        startDate: '2026-12-01T00:00:00Z',
        endDate: '2026-12-30T23:59:59Z',
        tagline:
          '메디큐브 내 최단기간 판매1위. 토닝 광채 케어+라인 볼륨 케어+윤곽 탄력 케어+모공탄력케어를 부스터프로 단 하나로.',
        currentStatus: 'DEFAULT' as const,
        liked: false,
      },
    ],
    listSize: 1,
    totalPage: 1,
    totalElements: 1,
    isFirst: true,
    isLast: true,
  },

  CLOSE_DEADLINE_ITEMS: {
    itemPreviewList: [
      {
        itemId: 4,
        sellerId: 2,
        sellerProfileImg: '/profile2.jpg',
        sellerUsername: 'jennierubyjane',
        sellerNickname: '제니',
        itemMainImg: '/market2/product2/image1.avif',
        itemPeriod: 8,
        itemName: '젠틀몬스터 피쉬테일',
        startDate: '2026-01-01T00:00:00Z',
        endDate:
          new Date(
            new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
          )
            .toISOString()
            .split('T')[0] + 'T23:59:59',
        tagline: '젠몬 선글라스',
        currentStatus: 'DEFAULT' as const,
        liked: true,
      },
    ],
    listSize: 1,
    totalPage: 1,
    totalElements: 1,
    isFirst: true,
    isLast: true,
  },

  SELLER_PICK: {
    sellerId: 1,
    sellerNickname: '원영',
    mainImgList: [
      {
        itemId: 1,
        mainImg: '/market1/product1/image1.jpg',
      },
    ],
  },

  // Home Questions
  HOME_QUESTIONS: {
    itemList: [
      {
        itemId: 1,
        imageUrl: '/market1/product1/image1.jpg',
        itemStatus: 'DEFAULT' as const,
        itemPeriod: 7,
        itemTitle: '다이슨 에어랩',
        startDate: '2026-12-01T00:00:00Z',
        endDate: '2026-12-31T23:59:59Z',
        totalPendingQuestions: 15,
        newQuestions: 5,
        topCategories: ['사이즈 문의', '배송 관련'],
      },
    ],
    listSize: 1,
    totalPage: 1,
    totalElements: 1,
    isFirst: true,
    isLast: true,
    hasAnyItem: true,
  },

  // Auth - 현재 로그인된 상태
  KAKAO_LOGIN: {
    memberId: 123,
    memberName: '더미유저',
    profileImageUrl: null,
    accessToken: 'dummy_logged_in_token_12345',
    isSeller: false,
  },

  USER_REGISTER: {
    memberId: 124,
    memberName: '더미유저',
    profileImageUrl: null,
    accessToken: 'dummy_access_token_67890',
    isSeller: false,
  },

  // User Profile - 현재 로그인된 사용자
  USER_PROFILE: {
    id: 123,
    username: 'dummy_user',
    nickname: '더미유저',
    profileImg: null,
    createdAt: '2026-01-15',
  },

  // Seller Profile
  SELLER_PROFILE: {
    sellerId: 1,
    sellerName: '셀러 프로필',
    profileImageUrl: null,
    introduction: '더미데이터입니다!',
    isPublic: true,
    isLiked: false,
    likedCounts: 1250,
    marketLinksCount: 5,
    createdAt: '2026-01-01',
  },

  // Market Items
  MARKET_ITEMS: {
    itemPreviewList: [
      {
        itemId: 1,
        sellerId: 1,
        sellerProfileImg: '/profile1.jpg',
        sellerUsername: 'wonyoung_official',
        sellerNickname: '원영',
        itemMainImg: '/market1/product1/image1.jpg',
        itemPeriod: 7,
        itemName: '다이슨 에어랩',
        startDate: '2026-12-01T00:00:00Z',
        endDate: '2026-12-31T23:59:59Z',
        tagline:
          '뿌리 끝까지 선명한 컬을 연출하는 콘 배럴로 다양하고 트렌디한 스타일링을 완성하는 멀티 스타일러',
        currentStatus: 'DEFAULT' as const,
        liked: false,
      },
    ],
    listSize: 1,
    totalPage: 1,
    totalElements: 1,
    isFirst: true,
    isLast: true,
  },

  // Item Categories
  ITEM_CATEGORIES: [
    { id: 1, name: '패션' },
    { id: 2, name: '뷰티' },
    { id: 3, name: '라이프스타일' },
    { id: 4, name: '테크' },
    { id: 5, name: '푸드' },
    { id: 6, name: '여행' },
  ],

  // Category Recommendations
  CATEGORY_RECOMMENDATIONS: {
    1: {
      // 패션
      itemPreviewList: [
        {
          itemId: 1,
          sellerId: 1,
          sellerProfileImg: '/profile1.jpg',
          sellerUsername: 'wonyoung_official',
          sellerNickname: '원영',
          itemMainImg: '/market1/product1/image1.jpg',
          itemPeriod: 7,
          itemName: '다이슨 에어랩',
          startDate: '2026-12-01T00:00:00Z',
          endDate: '2026-12-31T23:59:59Z',
          tagline:
            '뿌리 끝까지 선명한 컬을 연출하는 콘 배럴로 다양하고 트렌디한 스타일링을 완성하는 멀티 스타일러',
          currentStatus: 'DEFAULT' as const,
          liked: false,
        },
      ],
      listSize: 1,
      totalPage: 1,
      totalElements: 1,
      isFirst: true,
      isLast: true,
    },
    2: {
      // 뷰티
      itemPreviewList: [
        {
          itemId: 2,
          sellerId: 2,
          sellerProfileImg: '/profile2.jpg',
          sellerUsername: 'jennierubyjane',
          sellerNickname: '제니',
          itemMainImg: '/market2/product1/image1.jpg',
          itemPeriod: 10,
          itemName: '헤라 립 글로우',
          startDate: '2026-01-01T00:00:00Z',
          endDate: '2026-12-25T23:59:59Z',
          tagline: '놓치면 후회하는 한정판 컬렉션',
          currentStatus: 'DEFAULT' as const,
          liked: true,
        },
      ],
      listSize: 2,
      totalPage: 1,
      totalElements: 2,
      isFirst: true,
      isLast: true,
    },
    3: {
      // 라이프스타일
      itemPreviewList: [
        {
          itemId: 1,
          sellerId: 1,
          sellerProfileImg: '/profile1.jpg',
          sellerUsername: 'wonyoung_official',
          sellerNickname: '원영',
          itemMainImg: '/market1/product1/image1.jpg',
          itemPeriod: 7,
          itemName: '다이슨 에어랩',
          startDate: '2026-12-01T00:00:00Z',
          endDate: '2026-12-31T23:59:59Z',
          tagline:
            '뿌리 끝까지 선명한 컬을 연출하는 콘 배럴로 다양하고 트렌디한 스타일링을 완성하는 멀티 스타일러',
          currentStatus: 'DEFAULT' as const,
          liked: false,
        },
      ],
      listSize: 1,
      totalPage: 1,
      totalElements: 1,
      isFirst: true,
      isLast: true,
    },
    4: {
      itemPreviewList: [],
      listSize: 0,
      totalPage: 0,
      totalElements: 0,
      isFirst: true,
      isLast: true,
    },
    5: {
      itemPreviewList: [],
      listSize: 0,
      totalPage: 0,
      totalElements: 0,
      isFirst: true,
      isLast: true,
    },
    6: {
      itemPreviewList: [],
      listSize: 0,
      totalPage: 0,
      totalElements: 0,
      isFirst: true,
      isLast: true,
    },
  },

  // Search Results
  SEARCHED_ITEMS: {
    itemPreviewList: [
      {
        itemId: 6,
        sellerId: 1,
        sellerProfileImg: '/profile1.jpg',
        sellerUsername: 'wonyoung_official',
        sellerNickname: '원영',
        itemMainImg: '/market1/product2/image1.jpg',
        itemPeriod: 6,
        itemName: '라이프스타일 필수템 추천',
        startDate: '2026-12-01T00:00:00Z',
        endDate: '2026-12-25T23:59:59Z',
        tagline: '일상을 더욱 특별하게 만드는 라이프스타일 제품',
        currentStatus: 'DEFAULT' as const,
        liked: false,
      },
    ],
    listSize: 2,
    totalPage: 1,
    totalElements: 2,
    isFirst: true,
    isLast: true,
  },

  // Likes
  LIKED_ITEMS: {
    itemLikeList: [
      {
        itemId: 2,
        sellerId: 2,
        sellerProfileImg: '/profile2.jpg',
        sellerUsername: 'jennierubyjane',
        sellerNickname: '제니',
        itemMainImg: '/market2/product1/image1.jpg',
        itemPeriod: 10,
        itemName: '헤라 립 글로우',
        startDate: '2026-01-01T00:00:00Z',
        endDate: '2026-12-25T23:59:59Z',
        tagline: '놓치면 후회하는 한정판 컬렉션',
        currentStatus: 'DEFAULT' as const,
        liked: true,
      },
    ],
    listSize: 1,
    totalPage: 1,
    totalElements: 1,
    isFirst: true,
    isLast: true,
  },

  ITEM_LIKE_RESPONSE: {
    likeId: 1,
    memberId: 123,
    targetType: 'ITEM' as const,
    likeStatus: 'LIKE' as const,
    itemId: 1,
    itemName: '더미 아이템',
  },

  ITEM_LIKE_COUNTS: {
    targetType: 'ITEM' as const,
    targetId: 1,
    likeCnt: 156,
    liked: false,
  },

  LIKED_SELLERS: {
    sellerThumbnailList: [
      {
        sellerId: 2,
        profileImg: '/profile2.jpg',
        sellerUsername: 'jennierubyjane',
        sellerNickname: '제니',
      },
    ],
  },

  // TalkBox
  TALKBOX_CATEGORIES: [
    {
      questionCategoryId: 1,
      questionCategoryName: '제품 문의',
      questionCnt: 25,
      unCheckedCnt: 5,
    },
    {
      questionCategoryId: 2,
      questionCategoryName: '배송 관련',
      questionCnt: 15,
      unCheckedCnt: 2,
    },
    {
      questionCategoryId: 3,
      questionCategoryName: '기타',
      questionCnt: 8,
      unCheckedCnt: 1,
    },
  ],

  TALKBOX_QUESTIONS: {
    questions: [
      {
        questionId: 1,
        memberId: 123,
        username: 'user1',
        tagName: '제품 정보',
        content: '다이슨 에어랩은 언제 배송되나요?',
        nthQuestion: 1,
        createdAt: '2026-12-01T10:00:00Z',
        new: false,
        profileImg: '/profile.png',
        tagId: 1,
      },
      {
        questionId: 2,
        memberId: 124,
        username: 'user2',
        tagName: '색상',
        content: '헤라 립글로우 색상은 어떻게 되나요?',
        nthQuestion: 2,
        createdAt: '2026-12-02T14:30:00Z',
        new: true,
        profileImg: '/profile.png',
        tagId: 2,
      },
      {
        questionId: 3,
        memberId: 125,
        username: 'user3',
        tagName: '사용법',
        content: '다이슨 에어랩 사용법 궁금해요!',
        nthQuestion: 3,
        createdAt: '2026-12-03T09:15:00Z',
        new: false,
        profileImg: '/profile.png',
        tagId: 3,
      },
    ],
    listSize: 3,
    newQuestionCnt: 1,
    totalPage: 1,
    totalElements: 3,
    isFirst: true,
    isLast: true,
  },

  TALKBOX_CATEGORY_TAGS: {
    1: [
      { id: 1, name: '제품 정보', totalQuestions: 10, uncheckedExists: true },
      { id: 2, name: '가격', totalQuestions: 8, uncheckedExists: false },
      { id: 3, name: '사용법', totalQuestions: 7, uncheckedExists: true },
    ],
    2: [
      { id: 4, name: '배송 일정', totalQuestions: 12, uncheckedExists: true },
      { id: 5, name: '배송비', totalQuestions: 3, uncheckedExists: false },
    ],
    3: [{ id: 6, name: '기타', totalQuestions: 8, uncheckedExists: true }],
  },

  TALKBOX_USER_CHAT_HISTORY: {
    chatList: [
      {
        type: 'Default Message' as const,
        content: '안녕하세요! 궁금한 점이 있으시면 언제든 문의해 주세요.',
      },
      {
        type: 'Q' as const,
        id: 1,
        questionId: 1,
        categoryName: '제품 문의',
        content: '다이슨 에어랩은 언제 배송되나요?',
        createdAt: '2026-12-01T10:00:00Z',
      },
      {
        type: 'A' as const,
        id: 2,
        questionId: 1,
        answerType: 'INDIVIDUAL' as const,
        questionContent: '다이슨 에어랩은 언제 배송되나요?',
        content: '보통 주문 후 3-5일 내에 배송됩니다.',
        createdAt: '2026-12-01T10:30:00Z',
      },
      {
        type: 'Q' as const,
        id: 3,
        questionId: 2,
        categoryName: '제품 문의',
        content: '헤라 립글로우 색상은 어떻게 되나요?',
        createdAt: '2026-12-02T14:30:00Z',
      },
    ],
    listSize: 4,
    totalPage: 1,
    totalElements: 4,
    isFirst: true,
    isLast: true,
  },

  // FAQ
  FAQ_CATEGORIES: [
    {
      faqCategoryId: 1,
      categoryName: '상품 정보',
      questionCount: 5,
      order: 1,
    },
    {
      faqCategoryId: 2,
      categoryName: '배송 관련',
      questionCount: 3,
      order: 2,
    },
    {
      faqCategoryId: 3,
      categoryName: '사용법',
      questionCount: 4,
      order: 3,
    },
  ],

  FAQ_CARDS: [
    {
      faqCardId: 1,
      question: '이 제품은 어떤 피부 타입에 적합한가요?',
      answer: '모든 피부 타입에 사용 가능하며, 특히 건성 피부에 효과적입니다.',
      isPinned: true,
      createdAt: '2026-12-01',
    },
    {
      faqCardId: 2,
      question: '배송은 얼마나 걸리나요?',
      answer: '주문 후 2-3일 내에 배송됩니다.',
      isPinned: false,
      createdAt: '2026-12-02',
    },
    {
      faqCardId: 3,
      question: '사용법이 궁금합니다.',
      answer: '세안 후 적당량을 얼굴에 발라주시면 됩니다.',
      isPinned: false,
      createdAt: '2026-12-03',
    },
    {
      faqCardId: 4,
      question: '제품 성분이 궁금해요',
      answer: '천연 성분으로 제작되었으며, 민감한 피부에도 안전합니다.',
      isPinned: true,
      createdAt: '2026-12-04',
    },
  ],

  // Market Links
  MARKET_LINKS: [
    {
      linkId: 1,
      platformName: 'Instagram',
      url: 'https://instagram.com/jennierubyjane',
      order: 1,
    },
    {
      linkId: 2,
      platformName: 'YouTube',
      url: 'https://youtube.com/@dummy',
      order: 2,
    },
  ],

  // Announcements
  ANNOUNCEMENTS: [
    {
      announcementId: 1,
      title: '더미 공지사항 1',
      content: '이것은 더미 공지사항입니다.',
      isPinned: true,
      createdAt: '2026-12-01',
    },
    {
      announcementId: 2,
      title: '더미 공지사항 2',
      content: '또 다른 더미 공지사항입니다.',
      isPinned: false,
      createdAt: '2026-12-02',
    },
  ],

  PRIMARY_ANNOUNCEMENT: {
    announcementId: 1,
    title: '주요 더미 공지사항',
    content: '이것은 주요 더미 공지사항입니다.',
    isPinned: true,
    createdAt: '2026-12-01',
  },

  // Generic Success Response
  SUCCESS_RESPONSE: {
    success: true,
    message: '성공적으로 처리되었습니다.',
  },

  // Item Details
  ITEM_DETAIL: {
    itemId: 1,
    sellerId: 1,
    sellerName: '더미 셀러',
    sellerProfileImageUrl: 'https://via.placeholder.com/100',
    itemName: '상세 더미 아이템',
    itemImageUrls: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300?text=Image2',
    ],
    category: '패션',
    price: 25000,
    description: '이것은 더미 아이템의 상세 설명입니다.',
    deadline: '2026-12-31',
    isLiked: false,
    likedCounts: 150,
    commentCounts: 45,
    createdAt: '2026-12-01',
  },

  // Presigned URL
  PRESIGNED_URL: {
    presignedUrl: 'https://dummy-bucket.s3.amazonaws.com/upload-url',
    imgUrl: 'https://dummy-bucket.s3.amazonaws.com/image.jpg',
  },

  // Logout Response
  LOGOUT_SUCCESS: {
    success: true,
    message: '로그아웃되었습니다.',
  },

  // ID Duplicate Check
  ID_DUPLICATE_CHECK: {
    isAvailable: true,
  },

  // 로그인된 사용자 전용 데이터
  CURRENT_USER: {
    memberId: 123,
    memberName: '김유저',
    profileImageUrl: null,
    introduction: '안녕하세요! 패션과 뷰티에 관심이 많은 사용자입니다.',
    isLoggedIn: true,
    isSeller: false,
    accessToken: 'dummy_logged_in_token_12345',
    createdAt: '2026-01-15',
    // 사용자 설정
    preferences: {
      notifications: true,
      emailMarketing: false,
      categories: [1, 2], // 패션, 뷰티 관심 카테고리
    },
  },
};
