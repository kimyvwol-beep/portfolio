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
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">프로젝트 상세 페이지</h1>
      <p className="text-lg text-gray-600 mb-8">여기에 "문제 &rarr; 해결 &rarr; 결과"를 작성하게 됩니다.</p>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        &larr; 홈으로 돌아가기
      </Link>
    </div>
  );
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