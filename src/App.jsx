import { useEffect } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f5] font-sans selection:bg-[#ccff00] selection:text-black">
      
      {/* 1. 무한 텍스트 흐름 (Marquee) 헤더 - 네온 배경 & 외곽선 디자인 추가 */}
      <div className="w-full overflow-hidden border-b border-white/10 py-4 bg-[#ccff00] text-black flex">
        <div className="w-max flex animate-marquee items-center">
          <div className="flex gap-12 px-6 text-4xl md:text-5xl font-black tracking-tighter uppercase">
            <span>Kim Yu Wol.</span>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px black' }}>Frontend.</span>
            <span>Kim Yu Wol.</span>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px black' }}>Frontend.</span>
            <span>Kim Yu Wol.</span>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px black' }}>Frontend.</span>
          </div>
          <div className="flex gap-12 px-6 text-4xl md:text-5xl font-black tracking-tighter uppercase">
            <span>Kim Yu Wol.</span>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px black' }}>Frontend.</span>
            <span>Kim Yu Wol.</span>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px black' }}>Frontend.</span>
            <span>Kim Yu Wol.</span>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px black' }}>Frontend.</span>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-24 relative">
        
        {/* 은은한 네온 배경 글로우 (장식용) */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#ccff00] rounded-full mix-blend-overlay filter blur-[150px] opacity-20 pointer-events-none"></div>

        {/* 2. 자기소개 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 border-b border-white/10 pb-32 relative z-10">
          
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter hover:text-[#ccff00] transition-colors duration-500 cursor-default">
                Developer.
              </h1>
              <div className="space-y-2 text-lg md:text-xl font-medium text-gray-400 tracking-wide">
                <p className="text-white font-bold">김유월</p>
                <p className="hover:text-[#ccff00] transition-colors cursor-pointer">kimyvwol@naver.com</p>
                <div className="flex gap-6 pt-6 text-sm font-bold tracking-widest">
                  <a href="https://github.com/kimyvwol-beep" target="_blank" rel="noreferrer" className="underline underline-offset-8 hover:text-[#ccff00] transition-colors uppercase decoration-[#ccff00]/50">Github</a>
                  <a href="#" className="underline underline-offset-8 hover:text-[#ccff00] transition-colors uppercase decoration-[#ccff00]/50">Resume</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex flex-wrap gap-3 mb-10 text-xs md:text-sm font-bold tracking-widest uppercase">
              <span className="border border-white/20 px-4 py-2 rounded-full hover:border-[#ccff00] hover:text-[#ccff00] transition-colors cursor-default">Frontend</span>
              <span className="border border-white/20 px-4 py-2 rounded-full hover:border-[#ccff00] hover:text-[#ccff00] transition-colors cursor-default">React</span>
              <span className="border border-white/20 px-4 py-2 rounded-full hover:border-[#ccff00] hover:text-[#ccff00] transition-colors cursor-default">Javascript</span>
            </div>
            <p className="text-3xl md:text-4xl font-bold leading-tight tracking-tight break-keep mb-6">
              "본질에 집중하고 <span className="text-[#ccff00]">기본기</span>를 중요하게 생각합니다."
            </p>
            <p className="text-gray-400 text-lg leading-relaxed break-keep font-light">
              당장 눈에 보이는 화려함보다, 어떤 환경에서도 흔들리지 않는 프론트엔드의 기본기와 구조적인 코드 작성을 가장 중요하게 생각합니다.
            </p>
          </div>
        </div>

        {/* 3. 프로젝트 섹션 */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase flex items-center gap-6">
            Projects <span className="h-[1px] bg-white/10 flex-1"></span>
          </h2>
          
          <div className="space-y-12">
            
            {/* 프로젝트 1: Monthly */}
            {/* 🔥 카드 호버 시 네온 그림자와 함께 위로 떠오르는 역동적인 애니메이션 */}
            <div className="group border border-white/20 bg-[#111111] hover:-translate-y-2 hover:shadow-[8px_8px_0px_#ccff00] hover:border-[#ccff00] transition-all duration-300 p-8 md:p-12 flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/3">
                <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight group-hover:text-[#ccff00] transition-colors">Monthly</h3>
                <p className="text-gray-400 mb-8 font-medium">나만의 고정지출 관리기</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold bg-white/10 text-white px-3 py-1.5 rounded-sm">React</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold bg-white/10 text-white px-3 py-1.5 rounded-sm">JS Date</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://monthly-tracker-lyart.vercel.app/" target="_blank" rel="noreferrer" className="text-sm font-bold bg-white text-black px-6 py-3 hover:bg-[#ccff00] transition-colors uppercase tracking-wider flex items-center gap-2">
                    Live Site <span className="text-lg">↗</span>
                  </a>
                  <a href="https://github.com/kimyvwol-beep/monthly-tracker" target="_blank" rel="noreferrer" className="text-sm font-bold border border-white px-6 py-3 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors uppercase tracking-wider">
                    GitHub
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
            <div className="group border border-white/20 bg-[#111111] hover:-translate-y-2 hover:shadow-[8px_8px_0px_#ccff00] hover:border-[#ccff00] transition-all duration-300 p-8 md:p-12 flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/3">
                <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight group-hover:text-[#ccff00] transition-colors">TaskFlow</h3>
                <p className="text-gray-400 mb-8 font-medium">칸반보드 일정 관리 앱</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold bg-white/10 text-white px-3 py-1.5 rounded-sm">React</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold bg-white/10 text-white px-3 py-1.5 rounded-sm">Drag & Drop</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://taskflow-inky-beta.vercel.app/" target="_blank" rel="noreferrer" className="text-sm font-bold bg-white text-black px-6 py-3 hover:bg-[#ccff00] transition-colors uppercase tracking-wider flex items-center gap-2">
                    Live Site <span className="text-lg">↗</span>
                  </a>
                  <a href="https://github.com/kimyvwol-beep/taskflow" target="_blank" rel="noreferrer" className="text-sm font-bold border border-white px-6 py-3 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors uppercase tracking-wider">
                    GitHub
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
      
      <footer className="border-t border-white/10 py-12 text-center text-gray-500 text-xs font-bold tracking-widest uppercase mt-20">
        Designed & Developed by KIM YU WOL
      </footer>
    </div>
  );
}