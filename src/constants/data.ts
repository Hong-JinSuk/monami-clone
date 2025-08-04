export const mainMenus = [
  {
    label: '모나미 소개',
    link: 'https://www.monami.com/about/ceo.php',
    subMenus: [
      { label: 'CEO 메세지', link: 'https://www.monami.com/about/ceo.php' },
      { label: '회사정보', link: 'https://www.monami.com/about/company.php' },
      { label: '회사연혁', link: 'https://www.monami.com/about/history.php' },
      { label: '윤리강령', link: 'https://www.monami.com/about/conduct.php' },
      {
        label: '투자정보',
        link: 'https://www.monami.com/about/investment.php',
      },
      { label: 'CI', link: 'https://www.monami.com/about/ci.php' },
      {
        label: '찾아오시는 길',
        link: 'https://www.monami.com/about/location.php',
      },
      {
        label: '안전보건 경영방침',
        link: 'https://www.monami.com/about/safety.php',
      },
    ],
  },
  {
    label: '모나미 제품',
    link: 'https://www.monami.com/product/product_list.php?ccode=005',
    subMenus: [
      {
        label: '프리미엄 펜',
        link: 'https://www.monami.com/product/product_list.php?ccode=005',
      },
      {
        label: `펜·펜슬`,
        link: 'https://www.monami.com/product/product_list.php?ccode=003',
      },
      {
        label: `마카·컬러링`,
        link: 'https://www.monami.com/product/product_list.php?ccode=004',
      },
      {
        label: `잉크·리필`,
        link: 'https://www.monami.com/product/product_list.php?ccode=001',
      },
      {
        label: '카탈로그',
        link: 'https://www.monami.com/board/board.php?bo_table=catalogue',
      },
    ],
  },
  {
    label: 'NEWS & VIDEO',
    link: '',
    subMenus: [
      {
        label: '보도자료',
        link: 'https://www.monami.com/board/board.php?bo_table=bodo',
      },
      {
        label: '동영상자료',
        link: 'https://www.monami.com/board/board.php?bo_table=vod',
      },
    ],
  },
  {
    label: '모나미 미술대회',
    link: 'https://artcontest.monami.com/w/main.do',
    subMenus: [
      {
        label: '미술대회 소개',
        link: 'https://artcontest.monami.com/w/main.do',
      },
      {
        label: '수상작 발표',
        link: 'https://artcontest.monami.com/w/artcontest/award/award.do',
      },
    ],
  },
  {
    label: '고객지원',
    link: 'https://www.monami.com/customer/faq.php',
    subMenus: [
      {
        label: '자주묻는질문',
        link: 'https://www.monami.com/customer/faq.php',
      },
      {
        label: '문의하기',
        link: 'https://www.monami.com/customer/inquiry.php',
      },
    ],
  },
  {
    label: '기업 구매 / 개발',
    link: 'https://www.monami.com/customer/inquiry.php?bluk=10',
    subMenus: [
      {
        label: '대량 구매 문의',
        link: 'https://www.monami.com/customer/inquiry.php?bluk=10',
      },
      {
        label: '기업 및 단체 구매',
        link: 'https://mpms.monami.com/promotion/',
      },
      {
        label: '산업용 맞춤 제품개발',
        link: 'https://www.monami.com/industry/industry.php',
      },
    ],
  },
];

export const NEW_ARRIVALS = {
  arrival: '가장 먼저 만나는 설레는 기다림',
  imageData: {
    pen: {
      description: 'FX ZETA C3',
      link: 'https://www.monami.com/product/product_view.php?ccode=005002&idx=188',
    },
    note: {
      description: '지퀸스',
      link: 'https://www.monami.com/product/product_view.php?ccode=001005&idx=186',
    },
    preminum_pen: {
      description: '프러스펜3000프라임',
      link: 'https://www.monami.com/product/product_view.php?ccode=005&idx=248',
    },
    fountain_pen: {
      description: '153 아이디 만년필',
      link: 'https://www.monami.com/product/product_view.php?ccode=005&idx=204',
    },
    water_based_marker: {
      description: '프로스펜 3000',
      link: 'https://www.monami.com/product/product_view.php?ccode=003&idx=168',
    },
  },
};

export const BEST_PRODUCT = [
  {
    category: '프리미엄 펜',
    label: '프러스펜 3000 프라임',
    link: 'https://www.monami.com/product/product_view.php?idx=248&ccode=005005',
    image: '/assets/best-procudt/plus3000prime.jpg',
  },
  {
    category: '프리미엄 펜',
    label: '153 리스펙트 리파인',
    link: 'https://www.monami.com/product/product_view.php?idx=213&ccode=005005',
    image: '/assets/best-procudt/153respect-repine.jpg',
  },
  {
    category: '만년필',
    label: '153 아이디 만년필',
    link: 'https://www.monami.com/product/product_view.php?idx=204&ccode=005006',
    image: '/assets/best-procudt/153-id-fountain.jpg',
  },
  {
    category: '만년필',
    label: '153 네오 만년필 EF',
    link: 'https://www.monami.com/product/product_view.php?idx=160&ccode=005006',
    image: '/assets/best-procudt/153-neo-fountain-ef.jpg',
  },
  {
    category: '프리미엄 펜',
    label: '153 블랙 & 화이트',
    link: 'https://www.monami.com/product/product_view.php?idx=19&ccode=005005',
    image: '/assets/best-procudt/153-black-and-white.jpg',
  },
  {
    category: '프리미엄 펜',
    label: '153 골드',
    link: 'https://www.monami.com/product/product_view.php?idx=24&ccode=005005',
    image: '/assets/best-procudt/153-gold.jpg',
  },
  {
    category: '프리미엄 펜',
    label: '153 아이디',
    link: 'https://www.monami.com/product/product_view.php?idx=15&ccode=005005',
    image: '/assets/best-procudt/153-id.jpg',
  },
  {
    category: '프리미엄 펜',
    label: '60주년 프러스펜 3000 데스크펜 스페셜 에디션',
    link: 'https://www.monami.com/product/product_view.php?idx=157&ccode=005005',
    image: '/assets/best-procudt/60th-plus-3000-deskpen-special-edition.jpg',
  },
  {
    category: '고급샤프',
    label: '153 아이디 샤프',
    link: 'https://www.monami.com/product/product_view.php?idx=18&ccode=005002',
    image: '/assets/best-procudt/153-id-sharp.jpg',
  },
  {
    category: '프리미엄 펜',
    label: '153 네오',
    link: 'https://www.monami.com/board/board.php?bo_table=catalogue',
    image: '/assets/best-procudt/153-neo.jpg',
  },
  {
    category: '프리미엄 펜',
    label: '153 리스펙트',
    link: 'https://www.monami.com/product/product_view.php?idx=16&ccode=005005',
    image: '/assets/best-procudt/153-respect.jpg',
  },
];
