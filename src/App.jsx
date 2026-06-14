import { useEffect } from "react";

export default function App() {
  // 화면에 요소가 나타나고 사라질 때마다 애니메이션을 반복하는 핵심 로직
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 화면에 보일 때: 투명도 100%, 원래 위치로 복귀
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          } else {
            // 화면에서 벗어날 때: 다시 투명도 0%, 아래로 12px 이동시켜서 초기화 (무한 반복의 비밀!)
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.15 } // 요소가 화면에 15% 이상 보일 때 작동
    );

    // 'scroll-element'라는 클래스를 가진 모든 요소를 추적합니다.
    const elements = document.querySelectorAll(".scroll-element");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f5] font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
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
          
          {/* 스크롤 애니메이션 타겟 추가 (scroll-element, 초기 상태 설정) */}
          <div className="flex flex-col justify-between scroll-element opacity-0 translate-y-12 transition-all duration-1000 ease-out">
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

          {/* 스크롤 애니메이션 타겟 추가 (조금 더 늦게 나타나도록 delay-200 추가) */}
          <div className="flex flex-col justify-end scroll-element opacity-0 translate-y-12 transition-all duration-1000 delay-200 ease-out">
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
          {/* 타이틀 스크롤 애니메이션 */}
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase scroll-element opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            Projects.
          </h2>
          
          <div className="space-y-6">
            
            {/* 프로젝트 1: Monthly (스크롤 애니메이션 적용) */}
            <div className="group border border-white/20 hover:border-white transition-all duration-300 p-8 md:p-12 flex flex-col md:flex-row gap-10 scroll-element opacity-0 translate-y-12 transition-all duration-1000 ease-out">
              <div className="w-full md:w-1/3">
                <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Monthly</h3>
                <p className="text-gray-400 mb-8 font-medium">나만의 고정지출 관리기</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">React</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold border border-white/30 px-2 py-1">JS Date</span>
                  <span className="text-[10px