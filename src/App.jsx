import { useState, useEffect, useRef } from "react";

export default function App() {
  // 다크모드 상태 관리
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 스크롤 애니메이션을 위한 Observer 훅
  const useScrollAnimation = () => {
    const elementRef = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        },
        { threshold: 0.1 }
      );
      if (elementRef.current) observer.observe(elementRef.current);
      return () => {
        if (elementRef.current) observer.unobserve(elementRef.current);
      };
    }, []);
    return elementRef;
  };

  // 각각의 블록에 애니메이션을 걸기 위한 Ref
  const heroRef = useScrollAnimation();
  const titleRef = useScrollAnimation();
  const block1Ref = useScrollAnimation();
  const block2Ref = useScrollAnimation();
  const block3Ref = useScrollAnimation();
  const block4Ref = useScrollAnimation();

  return (
    // 다크모드 토글을 위한 최상위 wrapper
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-slate-100 font-sans transition-colors duration-500">
        
        {/* 1. 상단 네비게이션 바 */}
        <nav className="border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-500">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* 아이덴티티 반영 */}
            <span className="text-xl font-extrabold tracking-tight">kyw's portfolio</span>
            
            <div className="flex items-center gap-6 text-sm font-medium">
              <a href="mailto:kimyvwol@naver.com" className="hover:text-purple-500 transition-colors">Contact</a>
              
              {/* 다크/라이트 모드 전환 버튼 */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>
          </div>
        </nav>

        {/* 2. 히어로 섹션 (시선 집중 인트로 & 겸손한 문구) */}
        <header 
          ref={heroRef}
          className="py-32 md:py-40 text-center px-4 transition-all duration-1000 ease-out opacity-0 translate-y-10"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400 mb-6">
            Front-end Developer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter leading-tight max-w-4xl mx-auto">
            기본부터 차근차근 채워가며 <br className="md:hidden" /> 
            사용자에게 <span className="text-purple-600 dark:text-purple-400">가치를 전달하고자</span> 노력합니다.
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            안녕하세요, 프론트엔드 개발자 김유월입니다.<br />
            당장 눈에 보이는 화려함보다, 어떤 환경에서도 흔들리지 않는 자바스크립트의 기본기와 구조적인 코드 작성을 중요하게 생각합니다. 
          </p>
        </header>

        {/* 3. 코어 스킬 강조 섹션 (애니메이션이 적용된 심플 블록) */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <div 
            ref={titleRef}
            className="mb-16 text-center md:text-left transition-all duration-1000 ease-out opacity-0 translate-y-10"
          >
            <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-2">Capabilities</h2>
            <p className="text-3xl font-black tracking-tight">제가 다룰 수 있는 기술들</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* 자바스크립트 블록 */}
            <div 
              ref={block1Ref}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all duration-1000 ease-out opacity-0 translate-y-10 delay-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💛</span>
                <h3 className="text-xl font-extrabold">JavaScript (ES6+)</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-light text-sm leading-relaxed mb-6">
                단순히 코드를 복사하는 것을 넘어, 언어의 핵심 동작 원리를 이해하고 활용하려 노력합니다.
              </p>
              <ul className="space-y-2.5 text-sm text-gray-700 dark:text-gray-400 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>Promise 및 async/await를 활용한 직관적인 비동기 처리</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>실행 콘텍스트와 클로저에 대한 기본적인 이해</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>DOM API 제어를 통한 동적인 UI 구현</span>
                </li>
              </ul>
            </div>

            {/* 리액트 블록 */}
            <div 
              ref={block2Ref}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all duration-1000 ease-out opacity-0 translate-y-10 delay-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💙</span>
                <h3 className="text-xl font-extrabold">React</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-light text-sm leading-relaxed mb-6">
                컴포넌트 기반 설계를 통해 유지보수가 용이한 웹 애플리케이션을 지향합니다.
              </p>
              <ul className="space-y-2.5 text-sm text-gray-700 dark:text-gray-400 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>useState, useEffect를 활용한 컴포넌트 생명주기 관리</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>가독성을 고려한 컴포넌트 분리 및 구조 설계</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>React Router를 이용한 SPA(Single Page Application) 라우팅 처리</span>
                </li>
              </ul>
            </div>

            {/* 스타일링 블록 */}
            <div 
              ref={block3Ref}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all duration-1000 ease-out opacity-0 translate-y-10 delay-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎨</span>
                <h3 className="text-xl font-extrabold">HTML / CSS / Tailwind</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-light text-sm leading-relaxed mb-6">
                다양한 디바이스에서도 깨지지 않는 깔끔하고 반응형인 레이아웃을 구성합니다.
              </p>
              <ul className="space-y-2.5 text-sm text-gray-700 dark:text-gray-400 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>Flexbox와 Grid를 활용한 안정적인 화면 레이아웃 빌드</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>Tailwind CSS를 활용하여 신속하고 일관된 디자인 시스템 적용</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>다크모드 및 모바일 최적화를 고려한 UI/UX 구현</span>
                </li>
              </ul>
            </div>

            {/* 도구 블록 */}
            <div 
              ref={block4Ref}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all duration-1000 ease-out opacity-0 translate-y-10 delay-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🛠</span>
                <h3 className="text-xl font-extrabold">Tools & Version Control</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-light text-sm leading-relaxed mb-6">
                코드의 안전한 관리와 협업을 위한 필수적인 도구들을 다룹니다.
              </p>
              <ul className="space-y-2.5 text-sm text-gray-700 dark:text-gray-400 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>Git과 GitHub를 활용한 버전 관리 및 코드 저장소 운영</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>Vite 번들러를 이용한 빠르고 쾌적한 개발 환경 세팅</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✔</span>
                  <span>Vercel을 통한 빠르고 안정적인 웹 서비스 배포 경험</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* 4. 푸터 및 연락처 섹션 */}
        <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-16 text-center px-4 transition-colors duration-500">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-8">CONTACT ME</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-mono text-gray-700 dark:text-gray-300">
            <p>kimyvwol@naver.com</p>
            <a href="https://github.com/kimyvwol-beep" target="_blank" rel="noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:underline">
              https://github.com/kimyvwol-beep
            </a>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-12">© 2026 kyw's portfolio. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}