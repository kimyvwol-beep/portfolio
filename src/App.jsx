import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-32 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">김유월</h1>
        <p className="text-xl text-gray-300">
          프론트엔드 개발자 | 사용자 경험을 중요하게 생각합니다
        </p>
      </header>

      {/* About Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 inline-block pb-2">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          문제 해결을 즐기며 성장하는 프론트엔드 개발자 김유월입니다.<br />
          사용자 중심의 UI/UX를 고민하며, 깔끔하고 유지보수 가능한 코드를 작성하는 것을 목표로 합니다.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "GitHub"].map((skill) => (
            <span key={skill} className="px-6 py-3 bg-gray-100 rounded-full text-lg font-medium shadow-sm hover:bg-gray-200 transition">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">쇼핑몰 웹사이트</h3>
            <p className="text-gray-600 mb-4">React와 상태관리를 활용한 상품 리스트 및 장바구니 구현</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>상품 목록 조회 및 필터링</li>
              <li>장바구니 추가 및 삭제 기능</li>
              <li>반응형 UI 적용 (Tailwind)</li>
            </ul>
            <div className="flex gap-4">
              <Link to="/project/1" className="text-blue-600 hover:underline font-medium">상세 보기 &rarr;</Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">실시간 채팅 앱</h3>
            <p className="text-gray-600 mb-4">WebSocket을 활용한 실시간 통신 웹 애플리케이션</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>다중 사용자 채팅방 구현</li>
              <li>메시지 실시간 송수신</li>
              <li>로그인 및 닉네임 설정 기능</li>
            </ul>
            <div className="flex gap-4">
              <Link to="/project/2" className="text-blue-600 hover:underline font-medium">상세 보기 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-2 text-gray-300">Email: your@email.com</p>
        <p className="mb-6 text-gray-300">GitHub: https://github.com/yourname</p>
        <p className="text-sm text-gray-500">© 2026 김유월. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ProjectDetail() {
  // 상세 페이지 컴포넌트 (김유월 님의 진짜 프로젝트 경험 채우기)
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();

  // 1번 쇼핑몰 프로젝트 데이터
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

  // 2번 채팅 앱 프로젝트 데이터
  const project2 = {
    title: "WebSocket 실시간 멀티 채팅 애플리케이션",
    description: "웹소켓 양방향 통신을 활용하여 사용자들이 별도의 새로고침 없이 실시간으로 메시지를 주고받을 수 있는 채팅 서비스입니다.",
    tags: ["React", "Tailwind CSS", "WebSocket"],
    trouble: {
      problem: "여러 사용자가 동시에 채팅방에 입장했을 때, 이전 채팅 내역이 꼬이거나 화면 스롤이 맨 위에 멈춰있어 최신 메시지를 바로 확인하기 불편한 UI 정보 오류가 있었습니다.",
      solved: "React의 useRef와 useEffect 훅을 조합하여 새로운 메시지가 수신될 때마다 채팅창의 스크롤 위치가 자동으로 가장 아래로 부드럽게 내려가도록(scrollIntoView) 구현했습니다.",
      result: "다중 접속 환경에서도 끊김 없는 실시간 채팅 경험을 제공했으며, 사용자 만족도를 높이는 UI 개선을 이루어냈습니다."
    }
  };

  // 어떤 프로젝트인지 판별
  const project = id === "1" ? project1 : project2;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        {/* 뒤로가기 버튼 */}
        <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-8 font-medium">
          &larr; 포트폴리오 메인으로 돌아가기
        </Link>

        {/* 프로젝트 타이틀 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        
        {/* 기술 태그 */}
        <div className="flex gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-sm font-medium rounded-md text-gray-600">
              {tag}
            </span>
          ))}
        </div>

        {/* 프로젝트 설명 */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10 pb-8 border-b border-gray-100">
          {project.description}
        </p>

        {/* 핵심: 트러블 슈팅 섹션 */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">
            핵심 문제 해결 경험 (Trouble Shooting)
          </h2>

          <div className="bg-red-50 rounded-xl p-6 border border-red-100">
            <h3 className="text-lg font-bold text-red-800 mb-2">🚨 직면한 문제 (Problem)</h3>
            <p className="text-gray-700 leading-relaxed">{project.trouble.problem}</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <h3 className="text-lg font-bold text-green-800 mb-2">💡 해결 방안 (Solved)</h3>
            <p className="text-gray-700 leading-relaxed">{project.trouble.solved}</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-lg font-bold text-blue-800 mb-2">✨ 결과 및 성과 (Result)</h3>
            <p className="text-gray-700 leading-relaxed">{project.trouble.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
}

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