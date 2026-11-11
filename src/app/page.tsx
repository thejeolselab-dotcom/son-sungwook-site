import { siteConfig } from "@/config/site";

export default function HomePage() {
  const displayEmail = siteConfig.email || "[업무용 이메일]";
  const displayYoutube = siteConfig.youtubeUrl || "[더절세미인 채널주소]";

  return (
    <main className="w-full max-w-4xl mx-auto px-6 sm:px-10 py-14 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
        {/* 좌측 프로필 및 연락처 영역 (noahshinn.com 스타일) */}
        <aside className="md:col-span-4 md:sticky md:top-16 flex flex-col items-start">
          <div className="w-40 sm:w-44 aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 border border-slate-200/80 shadow-sm mb-6">
            <img
              src="./profile.jpg"
              alt="손성욱 법인 컨설턴트 프로필 사진"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {siteConfig.name}{" "}
            <span className="text-lg font-medium text-slate-600">
              {siteConfig.role}
            </span>
          </h1>

          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mt-1.5 leading-relaxed">
            {siteConfig.tagline}
          </p>

          <div className="w-full border-t border-slate-200 my-6" />

          {/* Contact */}
          <div className="w-full">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Contact
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 shrink-0 w-12">이메일:</span>
                {siteConfig.email ? (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 break-all transition"
                  >
                    {displayEmail}
                  </a>
                ) : (
                  <span className="font-medium text-slate-800 break-all">
                    {displayEmail}
                  </span>
                )}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 shrink-0 w-12">유튜브:</span>
                {siteConfig.youtubeUrl ? (
                  <a
                    href={siteConfig.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 break-all transition"
                  >
                    {siteConfig.youtubeChannelName}
                  </a>
                ) : (
                  <span className="font-medium text-slate-800 break-all">
                    {displayYoutube}
                  </span>
                )}
              </li>
            </ul>
          </div>
        </aside>

        {/* 우측 본문 영역: About, Experience, YouTube */}
        <div className="md:col-span-8 space-y-12">
          {/* About | 소개 */}
          <section aria-labelledby="about-heading">
            <div className="flex items-baseline gap-2 border-b border-slate-200 pb-2.5 mb-5">
              <h2
                id="about-heading"
                className="text-base font-bold tracking-tight text-slate-900"
              >
                About
              </h2>
              <span className="text-slate-300">|</span>
              <span className="text-sm font-medium text-slate-500">소개</span>
            </div>
            <div className="space-y-4 text-[15px] leading-7 text-slate-700">
              <p className="font-medium text-slate-900">
                안녕하세요. 법인 컨설턴트 손성욱입니다.
              </p>
              <p>
                10년 이상 2,000명 이상의 기업 대표들과 만나며 법인의 재무구조,
                경영 리스크, 대표 개인의 자산관리와 관련된 문제를 상담해
                왔습니다.
              </p>
              <p>
                저의 컨설팅은 기업의 현재 상황을 정확히 이해하는 것에서
                시작합니다. 단기적인 절세 효과에 집중하기보다 기업의 미래와
                대표님의 장기적인 계획을 함께 고려합니다.
              </p>
            </div>
          </section>

          {/* Experience | 경험 */}
          <section aria-labelledby="experience-heading">
            <div className="flex items-baseline gap-2 border-b border-slate-200 pb-2.5 mb-5">
              <h2
                id="experience-heading"
                className="text-base font-bold tracking-tight text-slate-900"
              >
                Experience
              </h2>
              <span className="text-slate-300">|</span>
              <span className="text-sm font-medium text-slate-500">경험</span>
            </div>
            <div className="space-y-6">
              <article>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1">
                  10년 이상
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600">
                  법인 및 기업 대표 대상 컨설팅 경력
                </p>
              </article>

              <article>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1">
                  100개 이상의 법인 고객사
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600">
                  법인 고객사 100개 이상, 기업 상담 2,000건 이상, 누적 상담
                  10,000회 이상
                </p>
              </article>

              <article>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1">
                  기업의 생애주기 전반
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600">
                  기업 재무, 경영 리스크, 대표 자산관리 및 가업승계 관련 상담
                </p>
              </article>
            </div>
          </section>

          {/* The 절세미인 | 유튜브 */}
          <section aria-labelledby="youtube-heading">
            <div className="flex items-baseline gap-2 border-b border-slate-200 pb-2.5 mb-5">
              <h2
                id="youtube-heading"
                className="text-base font-bold tracking-tight text-slate-900"
              >
                The 절세미인
              </h2>
              <span className="text-slate-300">|</span>
              <span className="text-sm font-medium text-slate-500">유튜브</span>
            </div>
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-[15px] font-medium text-slate-800">
                {siteConfig.youtubeDescription}
              </p>
              {siteConfig.youtubeUrl ? (
                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium shrink-0 transition"
                >
                  <span>YouTube | {siteConfig.youtubeChannelName}</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium shrink-0">
                  YouTube | {siteConfig.youtubeChannelName}
                </span>
              )}
            </div>
          </section>

          <footer className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            <span>© {siteConfig.fullTitle}. All rights reserved.</span>
            <span>{siteConfig.tagline}</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
