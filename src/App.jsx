import { useEffect } from "react";

// 면접관 피드백을 반영하여 구조화된 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: 'Monthly',
    subtitle: '1인 가구 고정지출 관리 핀테크 대시보드',
    techStack: ['React', 'JS Date API', 'Tailwind CSS'],
    summary: '넷플릭스 구독료, 가전 할부 등 파편화된 고정 지출을 한눈에 파악할 수 있는 대시보드입니다.',
    details: {
      purpose: '1인 가구의 구독/할부 지출 누수 방지 및 직관적인 자산 흐름 파악.',
      techReason: '무거운 날짜 라이브러리(Moment.js 등) 대신 순수 JS Date 객체만 활용하여 번들 사이즈 최적화 및 브라우저 네이티브 API 제어 능력 향상.',
      troubleshooting: '월별 일수가 다른 문제(28일, 31일)로 인한 정기 결제일 계산 오작동 버그를 발견하여, Date 객체의 setMonth 로직을 커스텀 함수로 분리해 크로스엣지 케이스 해결.',
      result: '초기 로딩 성능 개선 및 불필요한 외부 의존성 0% 달성, 실제 사용자 관점의 직관적인 UX 구현.'
    },
    live: 'https://monthly-tracker-lyart.vercel.app/',
    github: 'https://github.com/kimyvwol-beep/monthly-tracker'
  },
  {
    id: 2,
    title: 'TaskFlow',
    subtitle: '드래그 앤 드롭 기반 칸반보드 앱',
    techStack: ['React', 'HTML5 Drag & Drop', 'LocalStorage'],
    summary: '할 일, 진행 중, 완료 상태로 일정을 나누어 관리하고 브라우저 스토리지를 활용해 데이터를 유지하는 애플리케이션입니다.',
    details: {
      purpose: '시각적이고 직관적인 일정 관리 경험 제공 및 프론트엔드 데이터 지속성 구현.',
      techReason: 'React의 상태 구조와 데이터 흐름을 깊이 이해하기 위해 전역 상태 라이브러리(Redux 등)와 외부 Dnd 라이브러리를 배제하고 순수 생명주기와 네이티브 API만으로 구현.',
      troubleshooting: '특정 브라우저에서 Drag & Drop API의 좌표 인식 오작동 및 상태 업데이트 지연 버그 발생. 커스텀 이벤트 핸들러를 구축하고 디바운싱을 적용하여 렌더링 최적화 및 크로스 브라우징 완화.',
      result: '외부 라이브러리에 의존하지 않는 탄탄한 상태 관리 로직 구축, 새로고침 시에도 데이터가 100% 보존되는 안정성 확보.'
    },
    live: 'https://taskflow-inky-beta.vercel.app/',
    github: 'https://github.com/kimyvwol-beep/taskflow'
  }
];

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal-slice");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
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
      
      <style>{`
        .reveal-slice {
          opacity: 0;
          -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
          clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
          transform: translateY(30px);
          transition: opacity 0.5s ease, -webkit-clip-path 0.7s cubic-bezier(0.33, 1, 0.68, 1), clip-path 0.7s cubic-bezier(0.33, 1, 0.68, 1), transform 0.7s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .reveal-slice.is-visible {
          opacity: 1;
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          transform: translateY(0);
        }
      `}</style>

      {/* 헤더 유지 */}
      <div className="w-full overflow-hidden border-b border-white/20 py-5 bg-white text-black flex">
        <div className="w-max flex animate-marquee">
          <div className="flex gap-12 px-6 text-4xl md:text-5xl font-black tracking-tighter">
            <span>KIM YU WOL.</span><span>FRONTEND.</span><span>KIM YU WOL.</span><span>FRONTEND.</span>
          </div>
          <div className="flex gap-12 px-6 text-4xl md:text-5xl font-black tracking-tighter">
            <span>KIM YU WOL.</span><span>FRONTEND.</span><span>KIM YU WOL.</span><span>FRONTEND.</span>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        
        {/* 축소된 자기소개 섹션 (프로젝트로 시선을 빠르게 유도) */}
        <div className="reveal-slice flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-white/20 pb-16">
          <div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">Frontend<br/>Developer.</h1>
            <div className="flex gap-6 text-sm font-bold tracking-widest text-gray-400">
              <a href="https://github.com/kimyvwol-beep" target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase">Github ↗</a>
              <a href="#" className="hover:text-white transition-colors uppercase">Resume ↗</a>
              <span>kimyvwol@naver.com</span>
            </div>
          </div>
          <div className="max-w-md text-right">
            <p className="text-2xl font-bold leading-tight tracking-tight break-keep mb-4">
              "본질에 집중하고 프론트엔드의 기본기를 증명합니다."
            </p>
            <p className="text-gray-400 text-sm leading-relaxed break-keep font-light">
              화려한 도구보다 어떤 환경에서도 흔들리지 않는 구조적인 코드 작성과 문제 해결 능력을 가장 중요하게 생각합니다.
            </p>
          </div>
        </div>

        {/* 프로젝트 섹션 */}
        <div>
          <h2 className="reveal-slice text-3xl md:text-5xl font-black mb-12 tracking-tighter uppercase flex items-center justify-between">
            Selected Work
            <span className="text-sm font-normal text-gray-500 tracking-widest animate-pulse">Hover cards to see technical details ↷</span>
          </h2>
          
          <div className="space-y-16">
            {projects.map((project) => (
              <div key={project.id} className="reveal-slice group [perspective:1000px] w-full h-[650px] sm:h-[500px] lg:h-[450px] cursor-pointer">
                
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* [앞면] 프로젝트 기본 정보 요약 */}
                  <div className="absolute inset-0 [backface-visibility:hidden] border border-white/20 p-8 md:p-12 flex flex-col lg:flex-row gap-10 bg-[#111111] transition-colors duration-300 group-hover:border-white">
                    <div className="w-full lg:w-1/3">
                      <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">{project.title}</h3>
                      <p className="text-gray-400 mb-8 font-medium text-lg">{project.subtitle}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span key={idx} className="text-xs uppercase tracking-widest font-bold border border-white/30 px-3 py-1.5 bg-white/5">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="w-full lg:w-2/3 flex flex-col justify-center">
                      <p className="text-gray-300 text-xl leading-relaxed break-keep font-light border-l-4 border-white/30 pl-6">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  {/* [뒷면] 면접관 타겟팅: 문제 해결 및 기술 서사 (스크롤/스캔 친화적 구조) */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-white bg-white text-black p-8 md:p-12 flex flex-col justify-between overflow-y-auto shadow-2xl">
                    <div className="space-y-4 text-sm md:text-base">
                      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 border-b border-gray-200 pb-3">
                        <span className="font-black uppercase tracking-wider text-gray-900">목적</span>
                        <p className="text-gray-700 font-medium break-keep">{project.details.purpose}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 border-b border-gray-200 pb-3">
                        <span className="font-black uppercase tracking-wider text-blue-700">기술 도입 이유</span>
                        <p className="text-gray-700 font-medium break-keep">{project.details.techReason}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 border-b border-gray-200 pb-3">
                        <span className="font-black uppercase tracking-wider text-red-600">트러블슈팅</span>
                        <p className="text-gray-700 font-medium break-keep">{project.details.troubleshooting}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2">
                        <span className="font-black uppercase tracking-wider text-green-700">결과 및 성과</span>
                        <p className="text-gray-700 font-medium break-keep">{project.details.result}</p>
                      </div>
                    </div>
                    
                    {/* 링크 컴포넌트 */}
                    <div className="flex gap-4 mt-8 pt-4 border-t border-gray-200">
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 text-center text-sm font-black bg-black text-white px-6 py-4 hover:bg-gray-800 transition-colors uppercase tracking-widest">
                        Live Demo ↗
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 text-center text-sm font-black border-