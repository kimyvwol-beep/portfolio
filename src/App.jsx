import { useEffect } from "react";

export default function App() {
  // 부드러운 스크롤 이동을 위한 함수
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans break-keep">
      
      {/* 고정 네비게이션 바 */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-black text-gray-800 tracking-tight cursor-pointer" onClick={() => scrollToSection('hero')}>
            KYW's Portfolio
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-gray-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#f4623a] transition-colors">About me</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-[#f4623a] transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-[#f4623a] transition-colors">Projects</button>
          </div>
        </div>
      </nav>

      {/* 1. Hero 섹션 (다크한 배경과 오렌지 포인트) */}
      <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/70 px-4 pt-16">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter drop-shadow-lg">
          - 김유월 -<br />프론트엔드 개발자 포트폴리오
        </h2>
        <div className="w-16 h-1 bg-[#f4623a] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-gray-200 font-light mb-12 leading-relaxed drop-shadow-md">
          안녕하세요.<br />
          본질에 집중하고 기본기를 중요하게 생각하는<br />
          프론트엔드 개발자 김유월입니다.
        </p>
        <button 
          onClick={() => scrollToSection('about')}
          className="bg-[#f4623a] text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg hover:-translate-y-1 transform duration-200"
        >
          더 알아보기 ↓
        </button>
      </section>

      {/* 2. About Me 섹션 (흰색 배경, 3열 격자 배치) */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-20 flex items-center justify-center gap-3 tracking-tighter">
            <span className="text-gray-400">🔗</span> ABOUT ME
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
            <div className="flex gap-5 items-start justify-center md:justify-start">
              <span className="text-4xl drop-shadow-sm">👤</span>
              <div>
                <h3 className="font-extrabold text-lg mb-1 text-gray-800">이름</h3>
                <p className="text-gray-600 font-medium">김유월</p>
              </div>
            </div>

            <div className="flex gap-5 items-start justify-center md:justify-start">
              <span className="text-4xl drop-shadow-sm">✉️</span>
              <div>
                <h3 className="font-extrabold text-lg mb-1 text-gray-800">이메일</h3>
                <p className="text-gray-600 font-medium hover:text-[#f4623a] cursor-pointer">kimyvwol@naver.com</p>
              </div>
            </div>

            <div className="flex gap-5 items-start justify-center md:justify-start">
              <span className="text-4xl drop-shadow-sm">💻</span>
              <div>
                <h3 className="font-extrabold text-lg mb-1 text-gray-800">GitHub</h3>
                <a href="https://github.com/kimyvwol-beep" target="_blank" rel="noreferrer" className="text-gray-600 font-medium hover:text-[#f4623a] underline underline-offset-4 decoration-gray-300">
                  github.com/kimyvwol-beep
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start justify-center md:justify-start">
              <span className="text-4xl drop-shadow-sm">📍</span>
              <div>
                <h3 className="font-extrabold text-lg mb-1 text-gray-800">위치</h3>
                <p className="text-gray-600 font-medium">대한민국</p>
              </div>
            </div>

            <div className="flex gap-5 items-start justify-center md:justify-start">
              <span className="text-4xl drop-shadow-sm">🎯</span>
              <div>
                <h3 className="font-extrabold text-lg mb-1 text-gray-800">포지션</h3>
                <p className="text-gray-600 font-medium">프론트엔드 (Front-end)</p>
              </div>
            </div>

            <div className="flex gap-5 items-start justify-center md:justify-start">
              <span className="text-4xl drop-shadow-sm">🎓</span>
              <div>
                <h3 className="font-extrabold text-lg mb-1 text-gray-800">학력/교육</h3>
                <p className="text-gray-600 font-medium">프론트엔드 프로젝트 완주</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Skills 섹션 (노란색 배경, 뱃지 스타일) */}
      <section id="skills" className="py-24 bg-[#facc15]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 flex items-center justify-center gap-3 tracking-tighter text-gray-900">
            <span className="text-gray-800">🔗</span> SKILLS
          </h2>
          
          <div className="bg-[#fffdf7] rounded-[2rem] p-8 md:p-14 shadow-sm border border-yellow-200/50">
            
            {/* 언어 및 프론트엔드 */}
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-gray-200 pb-10 mb-10">
              <div className="w-48 font-black text-xl flex items-center gap-2 text-gray-800">
                <span className="text-blue-500 text-2xl">💻</span> Frontend
              </div>
              <div className="flex flex-wrap gap-3 flex-1">
                <span className="bg-[#f7df1e] text-black px-4 py-2.5 rounded-xl font-bold shadow-sm">JavaScript</span>
                <span className="bg-[#61dafb] text-black px-4 py-2.5 rounded-xl font-bold shadow-sm">React</span>
                <span className="bg-[#38bdf8] text-white px-4 py-2.5 rounded-xl font-bold shadow-sm">Tailwind CSS</span>
                <span className="bg-[#e34f26] text-white px-4 py-2.5 rounded-xl font-bold shadow-sm">HTML / CSS</span>
              </div>
            </div>

            {/* 도구 및 배포 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-48 font-black text-xl flex items-center gap-2 text-gray-800">
                <span className="text-gray-600 text-2xl">🛠</span> Tools & Deploy
              </div>
              <div className="flex flex-wrap gap-3 flex-1">
                <span className="bg-gray-800 text-white px-4 py-2.5 rounded-xl font-bold shadow-sm">Git & GitHub</span>
                <span className="bg-[#646cff] text-white px-4 py-2.5 rounded-xl font-bold shadow-sm">Vite</span>
                <span className="bg-black text-white px-4 py-2.5 rounded-xl font-bold shadow-sm">Vercel</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Projects 섹션 (깔끔한 카드 리스트) */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 flex items-center justify-center gap-3 tracking-tighter text-gray-900">
            <span className="text-gray-400">🔗</span> PROJECTS
          </h2>

          <div className="space-y-12">
            {/* Monthly 프로젝트 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10 hover:shadow-lg transition-shadow">
              <div className="w-full md:w-5/12 aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#f2f4f6] to-[#e5e8eb] flex items-center justify-center border border-gray-200">
                <span className="text-[#3182f6] font-black text-4xl tracking-tight">Monthly</span>
              </div>
              
              <div className="w-full md:w-7/12 flex flex-col justify-center">
                <h3 className="text-3xl font-black mb-4 text-gray-900">나만의 고정지출 관리기</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  넷플릭스 구독료, 통신비, 가전제품 할부 등 매달 나가는 고정 지출을 한눈에 파악할 수 있는 핀테크 대시보드입니다. 
                  JavaScript의 Date 객체와 배열 메서드를 활용하여 실시간 할부 진행률 및 당월 총 청구 금액을 자동 계산합니다.
                </p>
                <div className="flex gap-3 mb-8 flex-wrap">
                  <span className="px-3 py-1.5 bg-gray-100 text-sm font-bold rounded-lg text-gray-700">React</span>
                  <span className="px-3 py-1.5 bg-gray-100 text-sm font-bold rounded-lg text-gray-700">Tailwind</span>
                  <span className="px-3 py-1.5 bg-blue-50 text-sm font-bold rounded-lg text-blue-600">UI/UX 최적화</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://monthly-tracker-lyart.vercel.app/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-[#3182f6] text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-colors">
                    Live Site 🚀
                  </a>
                  <a href="https://github.com/kimyvwol-beep/monthly-tracker" target="_blank" rel="noreferrer" className="px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-black transition-colors">
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>

            {/* TaskFlow 프로젝트 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10 hover:shadow-lg transition-shadow">
              <div className="w-full md:w-5/12 aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <span className="text-white font-black text-3xl tracking-widest drop-shadow-md">TaskFlow</span>
              </div>
              
              <div className="w-full md:w-7/12 flex flex-col justify-center">
                <h3 className="text-3xl font-black mb-4 text-gray-900">칸반보드 일정 관리 앱</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  할 일, 진행 중, 완료 상태로 일정을 나누어 직관적으로 관리할 수 있는 애플리케이션입니다. 
                  드래그 앤 드롭 API를 활용해 사용자 경험을 높이고, 브라우저 스토리지에 데이터를 안전하게 저장하여 데이터의 지속성을 보장합니다.
                </p>
                <div className="flex gap-3 mb-8 flex-wrap">
                  <span className="px-3 py-1.5 bg-gray-100 text-sm font-bold rounded-lg text-gray-700">React</span>
                  <span className="px-3 py-1.5 bg-gray-100 text-sm font-bold rounded-lg text-gray-700">Local Storage</span>
                  <span className="px-3 py-1.5 bg-gray-100 text-sm font-bold rounded-lg text-gray-700">Drag & Drop</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://taskflow-inky-beta.vercel.app/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-teal-500 text-white text-sm font-bold rounded-xl hover:bg-teal-600 transition-colors">
                    Live Site 🚀
                  </a>
                  <a href="https://github.com/kimyvwol-beep/taskflow" target="_blank" rel="noreferrer" className="px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-black transition-colors">
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 py-12 text-center border-t border-gray-800">
        <p className="text-gray-400 font-medium">© 2026 KYW's Portfolio. All rights reserved.</p>
      </footer>

    </div>
  );
}