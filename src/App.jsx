import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// ==========================================
// 1. 메인 홈 화면 컴포넌트 (트렌디 다크/네온 디자인)
// ==========================================
function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* Hero Section */}
      <header className="relative py-40 text-center px-4 overflow-hidden border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        {/* 은은한 배경 네온 빛 조명 효과 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          안녕하세요, <br className="md:hidden" />
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            김유월
          </span> 입니다.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          단순한 구현을 넘어 사용자 경험의 가치를 깊게 고민하고,<br />
          깔끔하고 유지보수 가능한 코드를 지향하는 프론트엔드 개발자입니다.
        </p>
      </header>

      {/* About Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 p-8 md:p-12 rounded-3xl relative">
          <div className="absolute -top-3 left-8 px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-xs font-semibold tracking-wider uppercase text-white shadow-lg shadow-purple-500/20">
            About Me
          </div>
          <p className="text-lg leading-relaxed text-slate-300 font-light">
            문제 해결을 즐기며 성장하는 프론트엔드 개발자 김유월입니다. <br className="hidden md:inline" />
            사용자 중심의 UI/UX를 끊임없이 고민하며, 복잡한 상태를 직관적인 구조로 설계하는 과정에서 큰 성취감을 느낍니다. 팀과 함께 성장하고 소통하는 것을 즐깁니다.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10 text-slate-300 tracking-wider">TECH STACKS</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Git", "GitHub"].map((skill) => (
            <span key={skill} className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-2xl text-base font-medium text-slate-300 shadow-inner hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-center text-slate-300 tracking-wider">FEATURED PROJECTS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <div className="group bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 hover:border-purple-500/40 hover:bg-slate-900/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                  오픈마켓 쇼핑몰 웹사이트
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md">
                  Web
                </span>
              </div>
              <p className="text-slate-400 font-light mb-6 leading-relaxed">
                React와 상태 관리를 활용하여 대량의 데이터 필터링 및 유연한 장바구니 로직을 구현한 이커머스 서비스입니다.
              </p>
              <ul className="space-y-2 text-slate-300 font-light mb-8 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> 상품 목록 조회 및 카테고리 필터링</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> 전역 상태관리를 이용한 장바구니 CRUD</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Tailwind 기반 완벽한 반응형 레이아웃</li>
              </ul>
            </div>
            <Link to="/project/1" className="inline-flex items-center justify-center w-full py-3.5 bg-slate-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-violet-600 border border-slate-800 rounded-xl text-sm font-medium text-slate-200 transition-all duration-300 group-hover:border-transparent">
              프로젝트 상세보기 &rarr;
            </Link>
          </div>

          {/* Project 2 */}
          <div className="group bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 hover:border-blue-500/40 hover:bg-slate-900/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                  WebSocket 실시간 채팅 앱
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md">
                  Web드
                </span>
              </div>
              <p className="text-slate-400 font-light mb-6 leading-relaxed">
                웹소켓의 양방향 실시간 통신 메커니즘을 기반으로 설계하여 딜레이 없는 다중 사용자 채팅 환경을 제공합니다.
              </p>
              <ul className="space-y-2 text-slate-300 font-light mb-8 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> 다중 사용자 실시간 채팅방 개설</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> 새로고침 없는 양방향 메시지 송수신</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> 실시간 접속 유저 리스트 감지</li>
              </ul>
            </div>
            <Link to="/project/2" className="inline-flex items-center justify-center w-full py-3.5 bg-slate-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 border border-slate-800 rounded-xl text-sm font-medium text-slate-200 transition-all duration-300 group-hover:border-transparent">
              프로젝트 상세보기 &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 text-center px-4 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
        <h2 className="text-2xl font-bold mb-6 text-slate-200 tracking-wider">CONTACT ME</h2>
        <div className="space-y-2 text-slate-400 font-light mb-8">
          <p>Email : <span className="text-slate-200 font-mono">kimyvwol@naver.com</span></p>
          <p>
            GitHub : <a href="https://github.com/kimyvwol-beep" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 hover:underline font-mono">https://github.com/kimyvwol-beep</a>
          </p>
        </div>
        <p className="text-xs text-slate-600">© 2026 김유월. All rights reserved.</p>
      </footer>
    </div>
  );
}

// ==========================================
// 2. 프로젝트 상세 화면 컴포넌트 (매칭 다크 테마)
// ==========================================
function ProjectDetail() {
  const { id } = useParams();

  const project1 = {
    title: "리액트 기반 오픈마켓 쇼핑몰",
    description: "React와 상태 관리를 활용하여 대량의 상품 데이터를 효율적으로 렌더링하고 장바구니 기능을 구현한 웹 서비스입니다.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
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
    trouble: {
      problem: "여러 사용자가 동시에 채팅방에 입장했을 때, 이전 채팅 내역이 꼬이거나 화면 스크롤이 맨 위에 멈춰있어 최신 메시지를 바로 확인하기 불편한 UI 정보 오류가 있었습니다.",
      solved: "React의 useRef와 useEffect 훅을 조합하여 새로운 메시지가 수신될 때마다 채팅창의 스크롤 위치가 자동으로 가장 아래로 부드럽게 내려가도록(scrollIntoView) 구현했습니다.",
      result: "다중 접속 환경에서도 끊김 없는 실시간 채팅 경험을 제공했으며, 사용자 만족도를 높이는 UI 개선을 이루어냈습니다."
    }
  };

  const project = id === "1" ? project1 : project2;
  const isProject1 = id === "1";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans py-16 px-4">
      <div className="max-w-3xl mx-auto bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800/80 p-8 md:p-12">
        
        {/* 뒤로가기 */}
        <Link to="/" className="inline-flex items-center text-sm text-slate-400 hover:text-purple-400 transition-colors mb-8 font-light">
          &larr; 포트폴리오 메인으로 돌아가기
        </Link>

        {/* 타이틀 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{project.title}</h1>
        
        {/* 태그 */}
        <div className="flex gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-900 border border-slate-800 text-xs font-medium rounded-md text-slate-400">
              {tag}
            </span>
          ))}
        </div>

        {/* 설명 */}
        <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed mb-12 pb-8 border-b border-slate-900">
          {project.description}
        </p>

        {/* 트러블 슈팅 */}
        <div className="space-y-8">
          <h2 className={`text-xl font-bold border-l-4 pl-3 tracking-wide ${isProject1 ? 'border-purple-500 text-purple-400' : 'border-blue-500 text-blue-400'}`}>
            TROUBLE SHOOTING
          </h2>

          <div className="bg-slate-900/60 rounded-2xl p-6 border border-red-950/40">
            <h3 className="text-sm font-bold text-red-400 mb-3 uppercase tracking-wider">🚨 직면한 문제 (Problem)</h3>
            <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">{project.trouble.problem}</p>
          </div>

          <div className="bg-slate-900/60 rounded-2xl p-6 border border-green-950/40">
            <h3 className="text-sm font-bold text-green-400 mb-3 uppercase tracking-wider">💡 해결 방안 (Solved)</h3>
            <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">{project.trouble.solved}</p>
          </div>

          <div className="bg-slate-900/60 rounded-2xl p-6 border border-blue-950/40">
            <h3 className="text-sm font-bold text-blue-400 mb-3 uppercase tracking-wider">✨ 결과 및 성과 (Result)</h3>
            <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">{project.trouble.result}</p>
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