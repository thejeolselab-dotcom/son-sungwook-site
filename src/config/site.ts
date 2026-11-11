/**
 * 웹사이트 핵심 정보 설정 파일 (src/config/site.ts)
 * ----------------------------------------------------
 * 나중에 업무용 이메일이나 유튜브 채널 주소가 준비되면
 * 아래 email, youtubeUrl 값만 채워서 커밋/푸시하시면 전체 사이트와 SEO에 자동 반영됩니다.
 */
export const siteConfig = {
  name: "손성욱",
  role: "법인 컨설턴트",
  fullTitle: "손성욱 법인 컨설턴트",
  tagline: "CORPORATE ADVISORY · BUSINESS & OWNER WEALTH",
  description:
    "10년 이상 2,000명 이상의 기업 대표들과 만나며 법인의 재무구조, 경영 리스크, 대표 개인의 자산관리와 관련된 문제를 상담해 온 법인 컨설턴트 손성욱입니다.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://son-sungwook.vercel.app",

  // TODO: 추후 업무용 이메일과 유튜브 채널 주소를 아래 따옴표 안에 입력해 주세요.
  // 비워두면 화면에 '[업무용 이메일]', '[더절세미인 채널주소]'로 깔끔하게 표시됩니다.
  email: "", // 예: "contact@thejeolse.com"
  youtubeUrl: "", // 예: "https://www.youtube.com/@thejeolse"
  youtubeChannelName: "더절세미인",
  youtubeDescription: "실제 사례를 기반으로 풀어보는, 더 절세하는 방법",

  keywords: [
    "손성욱",
    "손성욱 법인 컨설턴트",
    "법인 컨설턴트",
    "법인 컨설팅",
    "더절세미인",
    "The 절세미인",
    "기업 재무구조",
    "경영 리스크",
    "대표 자산관리",
    "가업승계 상담",
    "법인 절세",
  ],

  // 구글 서치콘솔 및 네이버 서치어드바이저 소유권 확인 메타태그 (필요 시 값 입력)
  verification: {
    google: "",
    naver: "",
  },
};
