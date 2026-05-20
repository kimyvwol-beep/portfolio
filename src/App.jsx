import { useState, useEffect, useRef } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // 기본값을 다크모드로 설정해두면 첫인상이 훨씬 화려해!

  // 고급스러운 블러 + 페이드인 애니메이션 훅
  const useScrollAnimation = () => {
    const elementRef = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "blur-none");
            entry.target.classList.remove("opacity-0", "translate-y-12", "blur-md");
          }
        },
        { threshold: 0.15 } // 조금 더 보였을 때 애니메이션 시작
      );
      if (elementRef.current) observer.observe(elementRef.current);
      return () => {
        if (elementRef.current) observer.unobserve(elementRef.current);
      };
    }, []);
    return elementRef;
  };

  const heroRef = useScrollAnimation();
  const titleRef = useScrollAnimation();
  const block1Ref = useScrollAnimation();
  const block2Ref = useScrollAnimation();
  const block3Ref = useScrollAnimation();
  const block4Ref = useScrollAnimation();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-700 relative overflow-hidden">
        
        {/* 뒷배경 은은한 네온 조명 (앰비언트 라이트) */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[150px] pointer-events-none transition-opacity duration-1000 dark:opacity-100 opacity-0"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[150px] pointer-events-none transition-opacity duration-1000 dark:opacity-100 opacity-0"></div>

        {/* 1. 상단 네비게이션 바 */}
        <nav className="border-b border-slate-200/50 dark:border-slate-800/50 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl sticky top-0 z-50 transition-colors duration-700">
          <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
            {/* 요청하신 대문자 적용! */}
            <span className="text-xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
              KYW'S PORTFOLIO
            </span>
            
            <div className="flex items-center gap-6 text-sm font-semibold tracking-wide">
              <a href="mailto:kimyvwol@naver.com" className="hover:text-purple-500 transition-colors">Contact</a>
              
              {/* 다크모드 고급 토글 스위치 */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 hover:scale-110 transition-all duration-300 shadow-inner"
                aria-label="Toggle Dark Mode"
              >
                <span className="text-lg transition-transform duration-500 group-hover:rotate-[360deg]">
                  {isDarkMode ? "✨" : "🌙"}
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* 2. 히어로 섹션 (시선 집중 인트로) */}
        <header 
          ref={heroRef}
          className="relative py-32 md:py-48 text-center px-4 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 translate-y-12 blur-md"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-purple-600 dark:text-purple-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            Front-end Engineer
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.15] max-w-4xl mx-auto drop-shadow-sm">
            기본부터 차근차근 채워가며 <br className="md:hidden" /> 
            사용자에게 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400 drop-shadow-md">
              확실한 가치를 전달합니다.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            안녕하세요, 개발자 김유월입니다.<br />
            당장 눈에 보이는 화려함보다, 어떤 환경에서도 흔들리지 않는 자바스크립트의 기본기와 구조적인 코드 작성을 가장 중요하게 생각합니다.
          </p>
        </header>

        {/* 3. 코어 스킬 강조 섹션 */}
        <section className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
          <div 
            ref={titleRef}
            className="mb-16 text-center md:text-left transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 translate-y-12 blur-md"
          >
            <h2 className="text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-3">Capabilities</h2>
            <p className="text-3xl md:text-4xl font-black tracking-tight drop-shadow-sm">제가 다룰 수 있는 기술들</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* 자바스크립트 블록 (글로우 호버 효과 추가) */}
            <div 
              ref={block1Ref}
              className="group relative transition-all duration-1000 ease-out opacity-0 translate-y-12 blur-md delay-100"
            >
              {/* 호버 시 뒤에서 퍼지는 네온 글로우 */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 transform transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-yellow-100 dark:bg-yellow-500/20 text-2xl">💛</div>
                  <h3 className="text-2xl font-black tracking-tight">JavaScript</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-light text-base leading-relaxed mb-6">
                  단순히 코드를 복사하는 것을 넘어, 언어의 핵심 메커니즘을 짚어보고 원리를 이해하려 노력합니다.
                </p>
                <ul className="space-y-3 text-sm md:text-base text-slate-700 dark:text-slate-400 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 dark:text-yellow-400 mt-0.5">✦</span>
                    <span>Promise 및 async/await를 활용한 직관적인 비동기 처리</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 dark:text-yellow-400 mt-0.5">✦</span>
                    <span>실행 콘텍스트와 클로저에 대한 기본적인 이해</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 dark:text-yellow-400 mt-0.5">✦</span>
                    <span>DOM API 직접 제어를 통한 동적인 UI 로직 구현</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 리액트 블록 */}
            <div 
              ref={block2Ref}
              className="group relative transition-all duration-1000 ease-out opacity-0 translate-y-12 blur-md delay-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 transform transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-500/20 text-2xl">💙</div>
                  <h3 className="text-2xl font-black tracking-tight">React</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-light text-base leading-relaxed mb-6">
                  컴포넌트 기반 설계를 통해 상태를 직관적으로 관리하고 유지보수가 용이한 웹을 지향합니다.
                </p>
                <ul className="space-y-3 text-sm md:text-base text-slate-700 dark:text-slate-400 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 mt-0.5">✦</span>
                    <span>useState, useEffect를 활용한 컴포넌트 라이프사이클 관리</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 mt-0.5">✦</span>
                    <span>가독성을 고려한 컴포넌트 분리 및 효율적 구조 설계</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 mt-0.5">✦</span>
                    <span>React Router를 이용한 매끄러운 SPA 라우팅 구현</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 스타일링 블록 */}
            <div 
              ref={block3Ref}
              className="group relative transition-all duration-1000 ease-out opacity-0 translate-y-12 blur-md delay-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 transform transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-pink-100 dark:bg-pink-500/20 text-2xl">🎨</div>
                  <h3 className="text-2xl font-black tracking-tight">HTML / Tailwind</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-light text-base leading-relaxed mb-6">
                  다양한 디바이스에서도 깨지지 않는 깔끔하고 완성도 높은 반응형 레이아웃을 구성합니다.
                </p>
                <ul className="space-y-3 text-sm md:text-base text-slate-700 dark:text-slate-400 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 dark:text-pink-400 mt-0.5">✦</span>
                    <span>Flexbox와 Grid를 활용한 안정적인 화면 레이아웃 빌드</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 dark:text-pink-400 mt-0.5">✦</span>
                    <span>Tailwind CSS를 활용하여 신속하고 일관된 디자인 시스템 적용</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 dark:text-pink-400 mt-0.5">✦</span>
                    <span>다크모드 및 모바일 최적화를 고려한 세밀한 UI/UX 구현</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 툴스 블록 */}
            <div 
              ref={block4Ref}
              className="group relative transition-all duration-1000 ease-out opacity-0 translate-y-12 blur-md delay-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 transform transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-2xl">🛠</div>
                  <h3 className="text-2xl font-black tracking-tight">Tools & Deploy</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-light text-base leading-relaxed mb-6">
                  코드의 안전한 관리와 배포, 그리고 협업을 위한 필수적인 모던 개발 환경을 다룹니다.
                </p>
                <ul className="space-y-3 text-sm md:text-base text-slate-700 dark:text-slate-400 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">✦</span>
                    <span>Git과 GitHub를 활용한 버전 관리 및 원격 저장소 운영</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">✦</span>
                    <span>Vite 번들러를 이용한 빠르고 쾌적한 로컬 개발 환경 세팅</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">✦</span>
                    <span>Vercel을 통한 빠르고 안정적인 라이브 웹 서비스 자동 배포</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* 4. 푸터 및 연락처 섹션 */}
        <footer className="relative z-10 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-20 text-center px-4 transition-colors duration-700 mt-20">
          <h2 className="text-sm font-bold tracking-widest uppercase text-purple-500 dark:text-purple-400 mb-8">CONTACT ME</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-base font-mono text-slate-700 dark:text-slate-300">
            <p className="hover:text-purple-500 transition-colors cursor-pointer">kimyvwol@naver.com</p>
            <a href="https://github.com/kimyvwol-beep" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-purple-500 dark:text-slate-400 dark:hover:text-purple-400 transition-colors underline underline-offset-4 decoration-slate-300 dark:decoration-slate-700 hover:decoration-purple-500">
              github.com/kimyvwol-beep
            </a>
          </div>
          <p className="text-sm text-slate-400 dark:text-slate-600 mt-16 font-light tracking-wide">© 2026 KYW'S PORTFOLIO. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}