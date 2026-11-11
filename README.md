# 손성욱 법인 컨설턴트 공식 웹사이트 (Next.js + SEO 최적화)

참고 사이트([noahshinn.com](https://noahshinn.com/))의 단정하고 전문적인 미니멀 레이아웃을 기반으로 제작된 **손성욱 법인 컨설턴트** 소개 웹사이트입니다.

## 주요 특징
- **폰트**: 세리프체를 배제하고 단정하고 신뢰감 있는 산세리프(Pretendard + Inter) 적용
- **SEO 최적화 완료**:
  - `src/app/layout.tsx`: 메타태그, OpenGraph(카카오톡/링크 공유 미리보기), Twitter 카드, Canonical URL, 로봇 색인 허용
  - `JSON-LD` 구조화 데이터(`Person`, `ProfessionalService`) 내장
  - `src/app/sitemap.ts` 및 `src/app/robots.ts` 자동 생성
- **나중에 이메일 · 유튜브 주소 쉽게 변경하기**:
  - `src/config/site.ts` 파일의 `email`, `youtubeUrl` 값만 입력하면 사이트 전체와 검색엔진 데이터에 자동 반영됩니다.

## GitHub 퍼블릭 업로드 및 Vercel 배포 방법
이 폴더에는 이미 Git 저장소가 초기화(`git init`)되어 있고 첫 커밋(`thejeolselab@gmail.com`)까지 완료되어 있습니다.

1. 열려있는 크롬의 GitHub([https://github.com/new](https://github.com/new))에서 새 Public 저장소(예: `son-sungwook-site`)를 생성합니다.
2. 압축 해제한 폴더에서 아래 명령어를 실행하거나, GitHub 웹 화면에서 파일들을 바로 드래그 앤 드롭으로 업로드합니다:
   ```bash
   git remote add origin https://github.com/<본인깃허브아이디>/son-sungwook-site.git
   git push -u origin main
   ```
3. 열려있는 크롬의 Vercel([https://vercel.com/new](https://vercel.com/new))에서 방금 만든 GitHub 저장소를 `Import` → `Deploy` 클릭하면 무료(Hobby 플랜, 결제 불필요)로 즉시 배포됩니다.
