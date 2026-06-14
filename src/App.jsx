import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal-slice");
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        
        // 상단과 하단 모두 화면 경계선 안에 들어와 있는지 정밀 체크 (양방향 감지)
        const isVisible = rect.top < window.innerHeight - 60 && rect.bottom > 60;
        
        if (isVisible) {
          el.classList.add("is-visible");
        } else {
          el.classList.remove("is-visible");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f5] font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* 양방향 슬라이스 및 호버 서사 카드용 스타일 */}
      <style>{`
        .reveal-slice {
          opacity: 0;
          -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
          clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
          transform: translateY(30px);
          /* 올리고 내릴 때 모두 부드럽게 반응하도록 이징(Easing) 최적화 */
          transition: opacity 0.5s ease, -webkit-clip-path 0.7s cubic-bezier(0.33, 1, 0.68, 1), clip-path 0.7s cubic-bezier(0.33, 1, 0.68, 1), transform 0.7s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .reveal-slice.is-visible {
          opacity: 1;
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          transform: translateY(0);
        }
      `}</style>

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
          
          <div className="reveal-slice flex flex-col justify-between">
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

          <div className="reveal-slice flex flex-col justify-end">
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
              당장 눈에 보이는 화려함보다, 어떤 환경에서도 흔들리지 않는 프론트엔드의 기본기와 구조적인 코드 작성을 가장 중요하게 생각합니다. 끊임없이 고민하며 사용자에게 확실한 가치를 전달하는 주니어 개발자입니다.
            </p>
          </div>
        </div>

        {/* 3. 프로젝트 섹션 */}
        <div>
          <h2 className="reveal-slice text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase">
            Projects.
          </h2>
          
          <div className="space-y-8">
            
            {/* 프로젝트 1: Monthly */}
            <div className="reveal-slice group border border-white/20 hover:border-white p-8 md:p-12 flex flex-col md:flex-row gap-10 bg-[#111111] relative overflow-hidden transition-all duration-300">
              
              {/* 🔥 마우스 호버 시 스르륵 올라오는 개발 서사 오버레이 패널 */}
              <div className="absolute inset-0 bg-white text-black p-8 md:p-12 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-30">
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Behind the Scenes</span>
                <h4 className="text-2xl font-black mb-4">Monthly 개발 서사</h4>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium break-keep">
                  원래는 대규모 3D 공간 시뮬레이터를 기획했으나, 브라우저 환경의 렌더링 한계와 현재 리소스상의 스펙을 냉정하게 판단하여 과감히 프로젝트를 피벗(Pivot)했습니다. 화려한 겉모습 대신 실생활의 가계 경제 불편함을 해결하는 '본질'에 집중했습니다. JavaScript의 날짜 연산 메커니즘을 짚어보며 정밀한 할부 회차 계산기 기능을 완성했고, 데이터 정제를 통해 주니어로서 구현할 수 있는 가장 탄탄하고 완성도 높은 핀테크 서비스를 도출해 냈습니다.
                </p>
                <p className="text-xs text-gray-400 mt-6 font-bold">💡 마우스를 치우면 기본 정보가 다시 나타납니다.</p>
              </div>

              <div className="w-full md:w-1/3 relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Monthly</h3>
                <p className="text-gray-400 mb-8 font-medium">나만의 고정지출 관리기</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">React</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">JS Date</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">FinTech UI</span>
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
              <div className="w-full md:w-2/3 flex flex-col justify-center relative z-10">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed break-keep font-light">
                  넷플릭스 구독료, 통신비, 가전제품 할부 등 매달 나가는 고정 지출을 한눈에 파악할 수 있는 핀테크 대시보드입니다. JavaScript의 Date 객체와 배열 메서드를 활용하여 실시간 할부 진행률 및 당월 총 청구 금액을 자동 계산합니다.
                </p>
              </div>
            </div>

            {/* 프로젝트 2: TaskFlow */}
            <div className="reveal-slice group border border-white/20 hover:border-white p-8 md:p-12 flex flex-col md:flex-row gap-10 bg-[#111111] relative overflow-hidden transition-all duration-300">
              
              {/* 🔥 마우스 호버 시 스르륵 올라오는 개발 서사 오버레이 패널 */}
              <div className="absolute inset-0 bg-white text-black p-8 md:p-12 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-30">
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Behind the Scenes</span>
                <h4 className="text-2xl font-black mb-4">TaskFlow 개발 서사</h4>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium break-keep">
                  리액트의 상태 구조와 데이터의 흐름, 컴포넌트 생명주기를 완벽하게 다져보기 위해 기획한 첫 칸반보드 프로젝트입니다. 외부 라이브러리에 의존하지 않고 HTML5 순정 Drag & Drop API를 직접 제어하는 과정에서 브라우저별 좌표 드롭 오작동 버그를 마주했고, 이벤트 커스텀 핸들러를 구축해 이를 극복했습니다. LocalStorage 연동을 통해 새로고침 후에도 일정이 유지되는 데이터 지속성까지 고려하며, 프론트엔드가 갖춰야 할 웹의 핵심 기본기를 꽉 채워 구현했습니다.
                </p>
                <p className="text-xs text-gray-400 mt-6 font-bold">💡 마우스를 치우면 기본 정보가 다시 나타납니다.</p>
              </div>

              <div className="w-full md:w-1/3 relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">TaskFlow</h3>
                <p className="text-gray-400 mb-8 font-medium">칸반보드 일정 관리 앱</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">React</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">Drag & Drop</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">LocalStorage</span>
                </div>
                <div className="flex gap