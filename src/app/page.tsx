import { siteConfig } from "@/config/site";

export default function HomePage() {
  const displayEmail = siteConfig.email || "[업무용 이메일]";
  const displayYoutube = siteConfig.youtubeUrl || "[더절세미인 채널주소]";

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900">
      {/* 상단 고정 네비게이션 바 */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base font-bold tracking-tight text-slate-900">
              {siteConfig.name} <span className="font-medium text-slate-500">{siteConfig.role}</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
              Corporate Advisory
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#about-heading" className="hover:text-slate-900 transition">소개</a>
            <a href="#experience-heading" className="hover:text-slate-900 transition">경험 및 실적</a>
            <a href="#youtube-heading" className="hover:text-slate-900 transition">The 절세미인</a>
            <a href="#contact-section" className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="w-full max-w-5xl mx-auto px-6 sm:px-10 py-12 sm:py-16 space-y-14">
        {/* 상단 히어로 & 프로필 섹션 */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-7 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* 프로필 사진 컬럼 */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start">
              <div className="relative w-44 sm:w-52 aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-sm">
                <img
                  src="./profile.jpg"
                  alt="손성욱 법인 컨설턴트 프로필 사진"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* 메인 타이틀 & 핵심 소개 요약 */}
            <div className="md:col-span-8 space-y-5 text-center md:text-left">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                  {siteConfig.tagline}
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                  {siteConfig.name}{" "}
                  <span className="text-xl sm:text-2xl font-medium text-slate-600">
                    {siteConfig.role}
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-[17px] leading-relaxed text-slate-700 font-medium">
                안녕하세요. 법인 컨설턴트 손성욱입니다. 10년 이상 2,000명 이상의 기업 대표들과 만나며 법인의 재무구조, 경영 리스크, 대표 개인의 자산관리와 관련된 문제를 상담해 왔습니다.
              </p>

              {/* 핵심 수치 요약 (KPI 그리드) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                  <div className="text-xl font-bold text-slate-900">10년+</div>
                  <div className="text-xs text-slate-500 mt-0.5">법인·대표 컨설팅 경력</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                  <div className="text-xl font-bold text-slate-900">100+</div>
                  <div className="text-xs text-slate-500 mt-0.5">법인 고객사</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                  <div className="text-xl font-bold text-slate-900">2,000+</div>
                  <div className="text-xs text-slate-500 mt-0.5">기업 상담 건수</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                  <div className="text-xl font-bold text-slate-900">10,000+</div>
                  <div className="text-xs text-slate-500 mt-0.5">누적 상담 횟수</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 본문 2단 구성: 좌측 Contact 고정 카드 + 우측 상세 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* 좌측 Contact & 핵심 영역 사이드바 */}
          <aside id="contact-section" className="md:col-span-4 md:sticky md:top-24 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Contact
                </h2>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              <ul className="space-y-3.5 text-sm">
                <li className="space-y-1">
                  <span className="text-xs font-medium text-slate-400 block">이메일</span>
                  {siteConfig.email ? (
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-semibold text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 break-all transition"
                    >
                      {displayEmail}
                    </a>
                  ) : (
                    <span className="font-semibold text-slate-800 break-all">
                      {displayEmail}
                    </span>
                  )}
                </li>
                <li className="space-y-1 pt-2 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-400 block">유튜브</span>
                  {siteConfig.youtubeUrl ? (
                    <a
                      href={siteConfig.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 break-all transition"
                    >
                      {siteConfig.youtubeChannelName}
                    </a>
                  ) : (
                    <span className="font-semibold text-slate-800 break-all">
                      {displayYoutube}
                    </span>
                  )}
                </li>
              </ul>
            </div>

            {/* 주요 상담 분야 요약 카드 */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Advisory Focus
              </div>
              <div className="text-sm font-bold leading-snug">
                기업의 생애주기 전반을 함께 설계합니다
              </div>
              <ul className="space-y-2 pt-1 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  법인 재무구조 진단 및 개선
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  경영 리스크 점검 및 대응
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  대표 개인 자산관리 전략
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  가업승계 및 장기 플랜 수립
                </li>
              </ul>
            </div>
          </aside>

          {/* 우측 상세 콘텐츠 영역 */}
          <div className="md:col-span-8 space-y-10">
            {/* About | 소개 */}
            <section
              aria-labelledby="about-heading"
              className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 shadow-xs"
            >
              <div className="flex items-baseline gap-2.5 border-b border-slate-100 pb-3.5 mb-5">
                <h2
                  id="about-heading"
                  className="text-lg font-bold tracking-tight text-slate-900"
                >
                  About
                </h2>
                <span className="text-slate-300">|</span>
                <span className="text-sm font-semibold text-slate-500">소개</span>
              </div>

              <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                <p className="font-semibold text-slate-900 text-base">
                  안녕하세요. 법인 컨설턴트 손성욱입니다.
                </p>
                <p>
                  10년 이상 2,000명 이상의 기업 대표들과 만나며 법인의 재무구조, 경영 리스크, 대표 개인의 자산관리와 관련된 문제를 상담해 왔습니다.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-slate-900 text-slate-800 font-medium">
                  저의 컨설팅은 기업의 현재 상황을 정확히 이해하는 것에서 시작합니다. 단기적인 절세 효과에 집중하기보다 기업의 미래와 대표님의 장기적인 계획을 함께 고려합니다.
                </div>
              </div>
            </section>

            {/* Experience | 경험 */}
            <section
              aria-labelledby="experience-heading"
              className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 shadow-xs"
            >
              <div className="flex items-baseline gap-2.5 border-b border-slate-100 pb-3.5 mb-6">
                <h2
                  id="experience-heading"
                  className="text-lg font-bold tracking-tight text-slate-900"
                >
                  Experience
                </h2>
                <span className="text-slate-300">|</span>
                <span className="text-sm font-semibold text-slate-500">경험</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <article className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 transition">
                  <div className="inline-block text-xs font-bold px-2.5 py-0.5 rounded bg-slate-900 text-white mb-2">
                    10년 이상
                  </div>
                  <h3 className="text-[15px] font-semibold text-slate-900">
                    법인 및 기업 대표 대상 컨설팅 경력
                  </h3>
                </article>

                <article className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 transition">
                  <div className="inline-block text-xs font-bold px-2.5 py-0.5 rounded bg-slate-900 text-white mb-2">
                    100개 이상의 법인 고객사
                  </div>
                  <h3 className="text-[15px] font-semibold text-slate-900">
                    법인 고객사 100개 이상, 기업 상담 2,000건 이상, 누적 상담 10,000회 이상
                  </h3>
                </article>

                <article className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 transition">
                  <div className="inline-block text-xs font-bold px-2.5 py-0.5 rounded bg-slate-900 text-white mb-2">
                    기업의 생애주기 전반
                  </div>
                  <h3 className="text-[15px] font-semibold text-slate-900">
                    기업 재무, 경영 리스크, 대표 자산관리 및 가업승계 관련 상담
                  </h3>
                </article>
              </div>
            </section>

            {/* The 절세미인 | 유튜브 */}
            <section
              aria-labelledby="youtube-heading"
              className="bg-slate-900 text-white rounded-2xl p-7 sm:p-8 shadow-sm"
            >
              <div className="flex items-baseline gap-2.5 border-b border-slate-800 pb-3.5 mb-5">
                <h2
                  id="youtube-heading"
                  className="text-lg font-bold tracking-tight text-white"
                >
                  The 절세미인
                </h2>
                <span className="text-slate-600">|</span>
                <span className="text-sm font-medium text-slate-400">유튜브</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="space-y-1.5">
                  <p className="text-base font-semibold text-white">
                    {siteConfig.youtubeDescription}
                  </p>
                  <p className="text-xs text-slate-400">
                    법인 대표님들을 위한 실전 절세 및 경영 인사이트 채널
                  </p>
                </div>

                {siteConfig.youtubeUrl ? (
                  <a
                    href={siteConfig.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-sm font-bold shrink-0 transition"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                    <span>YouTube | {siteConfig.youtubeChannelName}</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                    <span>YouTube | {siteConfig.youtubeChannelName}</span>
                  </span>
                )}
              </div>
            </section>
          </div>
        </div>

        {/* 하단 푸터 */}
        <footer className="pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <span>© {siteConfig.fullTitle}. All rights reserved.</span>
          <span className="font-medium tracking-wider">{siteConfig.tagline}</span>
        </footer>
      </main>
    </div>
  );
}
