import { siteConfig } from "@/config/site";

export default function HomePage() {
  const displayEmail = siteConfig.email || "[업무용 이메일]";
  const displayYoutube = siteConfig.youtubeUrl || "[더절세미인 채널주소]";

  return (
    <main className="bg-white text-black p-3 sm:p-5 text-[16px] leading-[1.6]">
      {/* 1. 최상단 제목 */}
      <h1 className="text-[28px] font-bold leading-tight m-0">
        {siteConfig.fullTitle}
      </h1>
      <p className="text-[13px] font-medium tracking-wide text-neutral-700 mt-1 mb-4">
        {siteConfig.tagline}
      </p>

      {/* 2. 프로필 이미지 (왼쪽 정렬, 직각 모서리 단독 배치) */}
      <div className="my-4">
        <img
          src="./profile.jpg"
          alt={`${siteConfig.fullTitle} 프로필 사진`}
          className="w-[200px] h-auto block"
        />
      </div>

      {/* 3. Contact */}
      <section aria-labelledby="contact-heading" className="my-6">
        <h2 id="contact-heading" className="text-[20px] font-bold mb-2">
          Contact
        </h2>
        <p className="m-0">
          이메일:{" "}
          {siteConfig.email ? (
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[#0000EE] underline"
            >
              {displayEmail}
            </a>
          ) : (
            <span>{displayEmail}</span>
          )}
        </p>
        <p className="m-0">
          유튜브:{" "}
          {siteConfig.youtubeUrl ? (
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0000EE] underline"
            >
              {displayYoutube}
            </a>
          ) : (
            <span className="text-[#0000EE] underline">{displayYoutube}</span>
          )}
        </p>
      </section>

      {/* 4. About | 소개 */}
      <section aria-labelledby="about-heading" className="my-6">
        <h2 id="about-heading" className="text-[20px] font-bold mb-2">
          About | 소개
        </h2>
        <p className="my-3">안녕하세요. 법인 컨설턴트 손성욱입니다.</p>
        <p className="my-3">
          10년 이상 2,000명 이상의 기업 대표들과 만나며 법인의 재무구조, 경영
          리스크, 대표 개인의 자산관리와 관련된 문제를 상담해 왔습니다.
        </p>
        <p className="my-3">
          저의 컨설팅은 기업의 현재 상황을 정확히 이해하는 것에서 시작합니다.
          단기적인 절세 효과에 집중하기보다 기업의 미래와 대표님의 장기적인
          계획을 함께 고려합니다.
        </p>
      </section>

      {/* 5. Experience | 경험 (noahshinn.com의 Papers 불릿 리스트와 동일) */}
      <section aria-labelledby="experience-heading" className="my-6">
        <h2 id="experience-heading" className="text-[20px] font-bold mb-2">
          Experience | 경험
        </h2>
        <ul className="list-disc pl-8 space-y-3 my-2">
          <li>
            <strong>[10년 이상]</strong>
            <br />
            법인 및 기업 대표 대상 컨설팅 경력
          </li>
          <li>
            <strong>[100개 이상의 법인 고객사]</strong>
            <br />
            법인 고객사 100개 이상, 기업 상담 2,000건 이상, 누적 상담 10,000회
            이상
          </li>
          <li>
            <strong>[기업의 생애주기 전반]</strong>
            <br />
            기업 재무, 경영 리스크, 대표 자산관리 및 가업승계 관련 상담
          </li>
        </ul>
      </section>

      {/* 6. The 절세미인 | 유튜브 */}
      <section aria-labelledby="youtube-heading" className="my-6">
        <h2 id="youtube-heading" className="text-[20px] font-bold mb-2">
          The 절세미인 | 유튜브
        </h2>
        <p className="my-2">{siteConfig.youtubeDescription}</p>
        <p className="my-2">
          {siteConfig.youtubeUrl ? (
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0000EE] underline"
            >
              YouTube | {siteConfig.youtubeChannelName}
            </a>
          ) : (
            <span className="text-[#0000EE] underline">
              YouTube | {siteConfig.youtubeChannelName}
            </span>
          )}
        </p>
      </section>

      {/* 7. 하단 가로선(<hr>) + Last updated (noahshinn.com 동일 푸터) */}
      <hr className="my-4 border-t border-neutral-300" />
      <p className="text-[14px] text-black m-0">Last updated: 11/2026</p>
    </main>
  );
}
