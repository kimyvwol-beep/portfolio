import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// ==========================================
// 1. 메인 홈 화면 컴포넌트 (심플 블록 & 시원한 이미지 레이아웃)
// ==========================================
function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100 selección:text-purple-900">
      
      {/* GNB (CDG 스타일 심플 네비바) */}
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-extrabold tracking-tight">KIMYUWOOL</Link>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <span className="cursor-default">Work</span>
            <span className="cursor-default">About</span>
            <a href="mailto:kimyvwol@naver.com" className="hover:text-purple-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section (심플 타이포그래피) */}
      <header className="py-24 md:py-32 text-center px-4 bg-gray-50 border-b border-gray-100">
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">Front-end Developer</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter leading-tight max-w-4xl mx-auto">
          안녕하세요, <br />
          사용자 중심의 UI/UX를 고민하며, <br />
          깔끔하고 유지보수 가능한 코드를 작성하는 김유월입니다.
        </h1>
      </header>

      {/* About Section (심플한 블록) */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="col-span-1">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500">About Me</h2>
          </div>
          <div className="col-span-2 space-y-6 text-lg leading-relaxed text-gray-700 font-light">
            <p>
              문제 해결을 즐기며 성장하는 프론트엔드 개발자 김유월입니다. <br className="hidden md:inline" />
              복잡한 상태를 직관적인 구조로 설계하는 과정에서 큰 성취감을 느끼며, 팀과 함께 성장하고 소통하는 것을 즐깁니다.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section (그리드 블록) */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="col-span-1">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-8">TECH STACKS</h2>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Git", "GitHub"].map((skill) => (
              <span key={skill} className="px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-center text-sm font-medium text-gray-700 shadow-sm hover:border-purple-200 hover:bg-white hover:shadow-lg hover:text-purple-600 transition-all duration-300 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section (핵심: CDG 스타일 블록 레이아웃) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100 bg-gray-50">
        <h2 className="text-3xl font-extrabold mb-16 text-center tracking-tight">FEATURED PROJECTS</h2>
        <div className="space-y-16">
          
          {/* Project 1 (이미지-텍스트 블록) */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-stretch gap-8 md:gap-12 group hover:border-gray-200 hover:shadow-2xl transition-all duration-300">
            {/* 왼쪽: 이미지 영역 (시원하게) */}
            <div className="md:w-1/2 rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img src="https://via.placeholder.com/600x450" alt="쇼핑몰 프로젝트" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            {/* 오른쪽: 텍스트 영역 */}
            <div className="md:w-1/2 flex flex-col justify-between py-2">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-600 border border-purple-100 rounded-full mb-5 inline-block">Web</span>
                <h3 className="text-2xl font-extrabold text-gray-950 mb-3 group-hover:text-purple-600 transition-colors">리액트 기반 오픈마켓 쇼핑몰</h3>
                <p className="text-gray-600 font-light mb-6 leading-relaxed">대량의 데이터를 효율적으로 렌더링하고 장바구니 기능을 구현한 이커머스 서비스입니다.</p>
              </div>
              <Link to="/project/1" className="inline-flex items-center justify-center w-full py-4 bg-gray-900 hover:bg-purple-600 rounded-xl text-sm font-semibold text-white transition-all duration-300">
                프로젝트 상세보기 &rarr;
              </Link>
            </div>
          </div>

          {/* Project 2 (이미지-텍스트 블록) */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-stretch gap-8 md:gap-12 group hover:border-gray-200 hover:shadow-2xl transition-all duration-300">
            {/* 왼쪽: 이미지 영역 (시원하게) */}
            <div className="md:w-1/2 rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img src="https://via.placeholder.com/600x450" alt="채팅 앱 프로젝트" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            {/* 오른쪽: 텍스트 영역 */}
            <div className="md:w-1/2 flex flex-col justify-between py-2">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-5 text-blue-600 border border-blue-100 rounded-full mb-5 inline-block">Web</span>
                <h3 className="text-2xl font-extrabold text-gray-950 mb-3 group-hover:text-blue-600 transition-colors">WebSocket 실시간 멀티 채팅 앱</h3>
                <p className="text-gray-600 font-light mb-6 leading-relaxed">웹소켓의 양방향 통신을 기반으로 설계하여 딜레이 없는 다중 사용자 채팅 환경을 제공합니다.</p>
              </div>
              <Link to="/project/2" className="inline-flex items-center justify-center w-full py-4 bg-gray-900 hover:bg-blue-600 rounded-xl text-sm font-semibold text-white transition-all duration-300">
                프로젝트 상세보기 &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer / Contact (심플 블록) */}
      <footer className="bg-white border-t border-gray-100 py-16 text-center px-4">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-10">CONTACT</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-mono text-gray-700">
          <p>kimyvwol@naver.com</p>
          <a href="https://github.com/kimyvwol-beep" target="_blank" rel="noreferrer" className="text-purple-600 hover:text-purple-700 hover:underline">https://github.com/kimyvwol-beep</a>
        </div>
        <p className="text-xs text-gray-400 mt-12">© 2026 김유월. All rights reserved.</p>
      </footer>
    </div>
  );
}

// ==========================================
// 2. 프로젝트 상세 화면 컴포넌트 (심플 & 이미지 중심)
// ==========================================
function ProjectDetail() {
  const { id } = useParams();

  const project1 = {
    title: "리액트 기반 오픈마켓 쇼핑몰",
    description: "React와 상태 관리를 활용하여 대량의 상품 데이터를 효율적으로 렌더링하고 장바구니 기능을 구현한 웹 서비스입니다.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    imageUrl: "https://via.placeholder.com/1200x800", // 나중에 유월님의 실제 쇼핑몰 스크린샷 링크로 교체하세요!
    trouble: {
      problem: "상품 리스트 페이지에서 이미지가 수십 개씩 한 번에 로딩되면서 초기 로딩 속도가 느려지고 화면이 끊기는 현상이 발생했습니다.",
      solved: "Intersection Observer API를 활용한 '이미지 지연 로딩(Lazy Loading)' 기술을 도입했습니다. 사용자의 화면에 이미지가 보이기 직전에만 로딩되도록 구조를 변경했습니다.",
      result: "초기 페이지 로딩 속도를 기존 대비 약 45% 개선하였고, 불필요한 네트워크 리소스를 절약하는 성과를 거두었습니다."
    }
  };

  const project2 = {
    title: "WebSocket 실시간 멀티 채팅 애플리케이션",
    description: "웹소켓 양방향 통신을 활용하여 사용자들이 별도의 새로고침 없이 실시간으로 메시지를 주고받을 수 있는 채팅 서비스입니다.",
    tags: ["React", "Tailwind CSS", "WebSocket"],
    imageUrl: "https://via.placeholder.com/1200x800", // 나중에 유월님의 실제 채팅 앱 스크린샷 링크로 교체하세요!
    trouble: {
      problem: "여러 사용자가 동시에 채팅방에 입장했을 때, 이전 채팅 내역이 꼬이거나 화면 스크롤이 맨 위에 멈춰있어 최신 메시지를 바로 확인하기 불편한 UI 정보 오류가 있었습니다.",
      solved: "React의 useRef와 useEffect 훅을 조합하여 새로운 메시지가 수신될 때마다 채팅창의 스크롤 위치가 자동으로 가장 아래로 부드럽게 내려가도록(scrollIntoView) 구현했습니다.",
      result: "다중 접속 환경에서도 끊김 없는 실시간 채팅 경험을 제공했으며, 사용자 만족도를 높이는 UI 개선을 이루어냈습니다."
    }
  };

  const project = id === "1" ? project1 : project2;
  const isProject1 = id === "1";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* 뒤로가기 (상단 고정 스타일) */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link to="/" className="text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors">
            &larr; Portfolio Main
          </Link>
        </div>

        {/* 타이틀 영역 */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter">{project.title}</h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-8">{project.description}</p>
          {/* 태그 */}
          <div className="flex justify-center gap-2 mb-12">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white border border-gray-100 text-xs font-medium rounded-full text-gray-500">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 핵심: 프로젝트 메인 이미지 (와닿게!) */}
        <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-white border border-gray-100 shadow-xl mb-24 max-w-7xl mx-auto">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* 핵심: 트러블 슈팅 섹션 (심플 블록) */}
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className={`text-2xl font-bold tracking-tight text-center ${isProject1 ? 'text-purple-600' : 'text-blue-600'}`}>
            CORE TROUBLE SHOOTING
          </h2>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            
            {/* 문제 블록 */}
            <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100 group">
              <div className="text-3xl mb-4 text-red-500 font-black">1.</div>
              <h3 className="text-lg font-bold text-red-900 mb-3 tracking-tight">🚨 직면한 문제 (Problem)</h3>
              <p className="text-gray-700 font-light leading-relaxed text-base">{project.trouble.problem}</p>
            </div>

            {/* 해결 블록 */}
            <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
              <div className="text-3xl mb-4 text-green-500 font-black">2.</div>
              <h3 className="text-lg font-bold text-green-900 mb-3 tracking-tight">💡 해결 방안 (Solved)</h3>
              <p className="text-gray-700 font-light leading-relaxed text-base">{project.trouble.solved}</p>
            </div>

            {/* 결과 블록 */}
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <div className="text-3xl mb-4 text-blue-500 font-black">3.</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3 tracking-tight">✨ 결과 및 성과 (Result)</h3>
              <p className="text-gray-700 font-light leading-relaxed text-base">{project.trouble.result}</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 3. 전체 앱 라우터 설정 및 내보내기
// ==========================================
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}