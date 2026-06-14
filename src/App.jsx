import { useEffect } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f5] font-sans selection:bg-white selection:text-black">
      
      {/* 1. 무한 텍스트 흐름 (Marquee) 헤더 */}
      <div className="w-full overflow-hidden border-b border-white/20 py-5 bg-white text-black flex">
        <div className="w-max flex animate-marquee">
          <div className="flex gap-12 px-6 text-4xl md:text-5xl font-black tracking-tighter">
            <span>KIM YU WOL.</span>
            <span>FRONTEND.</span>
            <span>KIM YU WOL.</span>
            <span>FRONTEND.</span>
            <span>KIM YU WOL.</span>
            <span>FRONTEND.</span>
          </div>
          <div className="flex gap-12 px-6 text-4xl md:text-5xl font-black tracking-tighter">
            <span>KIM YU WOL.</span>
            <span>FRONTEND.</span>
            <span>KIM YU WOL.</span>
            <span>FRONTEND.</span>
            <span>KIM YU WOL.</span>
            <span>FRONTEND.</span>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-24">
        
        {/* 2. 자기소개 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 border-b border-white/20 pb-32">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">Developer.</h1>
              <div className="space-y-2 text-lg md:text-xl font-medium text-gray-400 tracking-wide">
                <p className="text-white font-bold">김유월</p>
                <p className="hover:text-white transition-colors cursor-pointer">kimyvwol@naver.com</p>
                <div className="flex gap-6 pt-6 text-sm font-bold tracking-widest">
                  <a href="https://github.com/kimyvwol-beep" target="_blank" rel="noreferrer" className="underline underline-offset-8 hover:text-white transition-colors uppercase">Github</a>
                  <a href="#" className="underline underline-offset-8 hover:text-white transition-colors uppercase">Resume</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex flex-wrap gap-2 mb-10 text-xs md:text-sm font-bold tracking-widest uppercase">
              <span className="border border-white/30 px-4 py-2 rounded-full">Frontend</span>
              <span className="border border-white/30 px-4 py-2 rounded-full">React</span>
              <span className="border border-white/30 px-4 py-2 rounded-full">Javascript</span>
              <span className="border border-white/30 px-4 py-2 rounded-full">HTML/CSS</span>
              <span className="border border-white/30 px-4 py-2 rounded-full">Tailwind</span>
            </div>
            <p className="text-3xl md:text-4xl font-bold leading-tight tracking-tight break-keep mb-6">
              "본질에 집중하고 기본기를 중요하게 생각합니다."
            </p>
            <p className="text-gray-400 text-lg leading-relaxed break-keep font-light">
              당장 눈에 보이는 화려함보다, 어떤 환경에서도 흔들리지 않는 프론트엔드의 기본기와 구조적인 코드 작성을 가장 중요하게 생각합니다.
            </p>
          </div>
        </div>

        {/* 3. 프로젝트 섹션 */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase">Projects.</h2>
          
          <div className="space-y-6">
            
            {/* 프로젝트 1: Monthly */}
            <div className="group border border-white/20 hover:border-white transition-all duration-300 p-8 md:p-12 flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/3">
                <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Monthly</h3>
                <p className="text-gray-400 mb-8 font-medium">나만의 고정지출 관리기</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">React</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">JS Date</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://monthly-tracker-lyart.vercel.app/" target="_blank" rel="noreferrer" className="text-sm font-bold bg-white text-black px-6 py-3 hover:bg-gray-300 transition-colors uppercase tracking-wider">
                    Live Site ↗
                  </a>
                  <a href="https://github.com/kimyvwol-beep/monthly-tracker" target="_blank" rel="noreferrer" className="text-sm font-bold border border-white px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-wider">
                    GitHub ↗
                  </a>
                </div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed break-keep font-light mb-6">
                  넷플릭스 구독료, 통신비, 가전제품 할부 등 매달 나가는 고정 지출을 한눈에 파악할 수 있는 핀테크 대시보드입니다. JavaScript의 Date 객체를 활용하여 실시간 할부 진행률을 연산합니다.
                </p>
              </div>
            </div>

            {/* 프로젝트 2: TaskFlow */}
            <div className="group border border-white/20 hover:border-white transition-all duration-300 p-8 md:p-12 flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/3">
                <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">TaskFlow</h3>
                <p className="text-gray-400 mb-8 font-medium">칸반보드 일정 관리 앱</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">React</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">Drag & Drop</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://taskflow-inky-beta.vercel.app/" target="_blank" rel="noreferrer" className="text-sm font-bold bg-white text-black px-6 py-3 hover:bg-gray-300 transition-colors uppercase tracking-wider">
                    Live Site ↗
                  </a>
                  <a href="https://github.com/kimyvwol-beep/taskflow" target="_blank" rel="noreferrer" className="text-sm font-bold border border-white px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-wider">
                    GitHub ↗
                  </a>
                </div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed break-keep font-light mb-6">
                  할 일, 진행 중, 완료 상태로 일정을 나누어 관리할 수 있는 애플리케이션입니다. 드래그 앤 드롭 API를 활용해 사용자 경험을 높이고, 브라우저 스토리지에 데이터를 안전하게 저장합니다.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <footer className="border-t border-white/20 py-12 text-center text-gray-600 text-xs font-bold tracking-widest uppercase mt-20">
        Designed & Developed by KIM YU WOL
      </footer>
    </div>
  );
}