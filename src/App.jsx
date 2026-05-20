// ==========================================
// 김유월 개발자 맞춤형 - 기술 강조형 포트폴리오
// ==========================================
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. 상단 네비게이션 바 (CDG 스타일) */}
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-extrabold tracking-tight">KIMYUWOOL</span>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <span className="cursor-default text-purple-600">Capabilities</span>
            <a href="mailto:kimyvwol@naver.com" className="hover:text-purple-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* 2. 히어로 섹션 (자신감 있는 타이포그래피) */}
      <header className="py-24 md:py-32 text-center px-4 bg-gray-50 border-b border-gray-100">
        <p className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4">Front-end Engineer</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter leading-tight max-w-4xl mx-auto">
          화려한 결과물보다 <br className="md:hidden" /> 
          <span className="underline decoration-purple-500 decoration-4 underline-offset-8">견고한 기본기</span>를 신뢰합니다.
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
          안녕하세요, 프론트엔드 개발자 김유월입니다.<br />
          화려한 프로젝트 껍데기를 만드는 것보다 자바스크립트의 동작 원리를 이해하고, 지속 가능한 코드를 작성하는 것에 집중합니다.
        </p>
      </header>

      {/* 3. 코어 스킬 강조 섹션 (★핵심: 면접관이 좋아하는 디테일 기술 설명 블록) */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">My Capabilities</h2>
          <p className="text-3xl font-black tracking-tight">다룰 줄 아는 기술과 깊이</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* 자바스크립트 블록 */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💛</span>
              <h3 className="text-xl font-extrabold text-gray-950">JavaScript (ES6+)</h3>
            </div>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
              단순한 문법 사용을 넘어 언어의 핵심 메커니즘을 이해하고 웹을 제어합니다.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-700 font-light">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>실행 콘텍스트와 클로저를 활용한 변수 은닉화 이해</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>Promise 및 async/await를 활용한 직관적인 비동기 처리</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>DOM API를 직접 제어하여 다이내믹한 사용자 UI 구현 가능</span>
              </li>
            </ul>
          </div>

          {/* 리액트 블록 */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💙</span>
              <h3 className="text-xl font-extrabold text-gray-950">React</h3>
            </div>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
              컴포넌트 기반 설계를 통해 재사용성과 가독성이 높은 웹 애플리케이션을 지향합니다.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-700 font-light">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>useState, useEffect 등 상태 변화에 따른 선언형 컴포넌트 설계</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>컴포넌트 분리 및 Props 지옥을 해결하기 위한 구조적 고민</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>가상 돔(Virtual DOM)의 렌더링 최적화 개념 숙지</span>
              </li>
            </ul>
          </div>

          {/* 스타일링 블록 */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎨</span>
              <h3 className="text-xl font-extrabold text-gray-950">HTML5 / CSS3 / Tailwind</h3>
            </div>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
              웹 표준과 접근성을 준수하며, 어떤 스크린에서도 깨지지 않는 반응형 레이아웃을 구성합니다.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-700 font-light">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>시맨틱(Semantic) 태그를 활용한 SEO 향상 및 마크업 구조 설계</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>Flexbox와 Grid 시스템을 자유롭게 다루는 정갈한 레이아웃 빌드</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>Tailwind CSS 유틸리티 클래스를 이용한 신속하고 일관성 있는 스타일링</span>
              </li>
            </ul>
          </div>

          {/* 개발 도구 블록 */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🛠</span>
              <h3 className="text-xl font-extrabold text-gray-950">Dev Tools / 협업</h3>
            </div>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
              코드 버전을 안전하게 관리하고 다른 개발자와 원활하게 소통할 수 있는 도구를 다룹니다.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-700 font-light">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>Git의 브랜치 전략을 이해하고 독립적인 기능 단위로 커밋 관리</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>GitHub를 통한 원격 코드 저장소 운영 및 오픈소스 생태계 이해</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✔</span>
                <span>Vite 번들러를 활용하여 에러 없고 가벼운 최신 리액트 환경 빌드</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. 푸터 및 연락처 섹션 */}
      <footer className="bg-white border-t border-gray-100 py-16 text-center px-4">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-8">CONTACT</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-mono text-gray-700">
          <p>kimyvwol@naver.com</p>
          <a href="https://github.com/kimyvwol-beep" target="_blank" rel="noreferrer" className="text-purple-600 hover:text-purple-700 hover:underline">https://github.com/kimyvwol-beep</a>
        </div>
        <p className="text-xs text-gray-400 mt-12">© 2026 김유월. All rights reserved.</p>
      </footer>
    </div>
  );
}