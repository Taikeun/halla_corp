import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Check, Zap, Hammer, PencilRuler } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Precision Laser Welding",
            icon: Zap,
            desc: "최첨단 레이저 용접 기술을 통해 열변형을 최소화하고 깊은 용입을 실현합니다. 스테인리스, 알루미늄, 구리 등 난접합 소재도 완벽하게 접합합니다.",
            details: ["최소한의 열변형 보장", "이종 금속 용접 가능", "후가공이 필요 없는 미려한 용접 비드"]
        },
        {
            title: "Custom Metal Fabrication",
            icon: Hammer,
            desc: "고객의 요구사항에 맞는 다양한 금속 구조물을 제작합니다. 단순 절곡부터 복잡한 입체 형상까지 정밀하게 구현합니다.",
            details: ["NCT 및 레이저 복합 가공", "고정밀 절곡 (Bending)", "V-Cutting을 이용한 날카로운 모서리 구현"]
        },
        {
            title: "Design & Engineering",
            icon: PencilRuler,
            desc: "단순 제작을 넘어 설계 단계부터 참여하여 최적의 가공 방식과 구조 해석을 제안합니다. 원가 절감과 품질 향상을 위한 엔지니어링 서비스를 제공합니다.",
            details: ["3D 모델링 및 전개 도면 작성", "구조 해석 및 공정 최적화", "프로토타입 제작 지원"]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-halla-navy py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        (주)한라만의 차별화된 기술력으로 제공하는 핵심 서비스를 소개합니다.
                    </p>
                </div>
            </section>

            {/* Service List */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <div key={idx} className="group border border-slate-200 hover:border-laser-orange hover:shadow-xl transition-all duration-300 bg-white overflow-hidden flex flex-col">
                                <div className="h-32 w-full bg-slate-50 flex items-center justify-center border-b border-slate-100 group-hover:bg-white transition-colors">
                                    <Icon className="w-12 h-12 text-slate-300 group-hover:text-laser-orange transition-colors duration-500" strokeWidth={1.2} />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-halla-navy mb-4">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                        {service.desc}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.details.map((detail, dIdx) => (
                                            <li key={dIdx} className="flex items-center gap-2 text-sm text-slate-500">
                                                <div className="w-1.5 h-1.5 bg-laser-orange rounded-full"></div>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Process Section - Vertical Timeline */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-laser-orange font-bold text-sm tracking-widest uppercase mb-2 block">Work Process</span>
                        <h2 className="text-3xl font-bold text-halla-navy">Total Production System</h2>
                        <p className="text-slate-600 mt-4">
                            영업 수주부터 최종 출고까지, 체계적인 원스톱 생산 시스템을 운영합니다.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Central Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 hidden md:block"></div>

                        {/* Step 1: Sales */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
                            <div className="md:w-5/12 order-2 md:order-1 text-center md:text-right p-6 bg-white border border-slate-100 shadow-sm rounded-lg z-10">
                                <h3 className="text-lg font-bold text-halla-navy mb-2">01. 영업·수주</h3>
                                <p className="text-slate-600 text-sm">고객사와의 상담을 통해 요구사항을 파악하고 견적을 산출하여 수주를 확정합니다.</p>
                            </div>
                            <div className="w-12 h-12 shrink-0 bg-halla-navy rounded-full border-2 border-slate-50 flex items-center justify-center z-20 order-1 md:order-2 mb-4 md:mb-0">
                                <span className="text-white font-bold text-sm">01</span>
                            </div>
                            <div className="md:w-5/12 order-3 md:order-3"></div>
                        </div>

                        {/* Step 2: Design */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
                            <div className="md:w-5/12 order-3 md:order-1"></div>
                            <div className="w-12 h-12 shrink-0 bg-white border-2 border-halla-navy rounded-full flex items-center justify-center z-20 order-1 md:order-2 mb-4 md:mb-0">
                                <span className="text-halla-navy font-bold text-sm">02</span>
                            </div>
                            <div className="md:w-5/12 order-2 md:order-3 text-center md:text-left p-6 bg-white border border-slate-100 shadow-sm rounded-lg z-10">
                                <h3 className="text-lg font-bold text-halla-navy mb-2">02. 구조설계</h3>
                                <p className="text-slate-600 text-sm">제공받은 초안 도면을 바탕으로 구조 안전성을 검토하고 효율적인 작업 계획을 수립합니다.</p>
                            </div>
                        </div>

                        {/* Step 3: CAD */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
                            <div className="md:w-5/12 order-2 md:order-1 text-center md:text-right p-6 bg-white border border-slate-100 shadow-sm rounded-lg z-10">
                                <h3 className="text-lg font-bold text-halla-navy mb-2">03. CAD 작업 (도면)</h3>
                                <p className="text-slate-600 text-sm">상세 도면화 작업을 통해 제품의 규격, 공차, 소요 자재를 정밀하게 재확인합니다.</p>
                            </div>
                            <div className="w-12 h-12 shrink-0 bg-white border-2 border-halla-navy rounded-full flex items-center justify-center z-20 order-1 md:order-2 mb-4 md:mb-0">
                                <span className="text-halla-navy font-bold text-sm">03</span>
                            </div>
                            <div className="md:w-5/12 order-3 md:order-3"></div>
                        </div>

                        {/* Step 4: Material */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
                            <div className="md:w-5/12 order-3 md:order-1"></div>
                            <div className="w-12 h-12 shrink-0 bg-white border-2 border-halla-navy rounded-full flex items-center justify-center z-20 order-1 md:order-2 mb-4 md:mb-0">
                                <span className="text-halla-navy font-bold text-sm">04</span>
                            </div>
                            <div className="md:w-5/12 order-2 md:order-3 text-center md:text-left p-6 bg-white border border-slate-100 shadow-sm rounded-lg z-10">
                                <h3 className="text-lg font-bold text-halla-navy mb-2">04. 자재 발주</h3>
                                <p className="text-slate-600 text-sm">설계 사양에 적합한 최상급 원자재(Steel, STS, AL 등)를 산출하여 매입합니다.</p>
                            </div>
                        </div>

                        {/* Step 5: Cutting */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
                            <div className="md:w-5/12 order-2 md:order-1 text-center md:text-right p-6 bg-white border border-slate-100 shadow-sm rounded-lg z-10">
                                <h3 className="text-lg font-bold text-halla-navy mb-2">05. 재단 및 가공</h3>
                                <p className="text-slate-600 text-sm">레이저 커팅기 및 NCT 설비를 사용하여 도면 치수에 오차 없이 정밀하게 재단합니다.</p>
                            </div>
                            <div className="w-12 h-12 shrink-0 bg-white border-2 border-halla-navy rounded-full flex items-center justify-center z-20 order-1 md:order-2 mb-4 md:mb-0">
                                <span className="text-halla-navy font-bold text-sm">05</span>
                            </div>
                            <div className="md:w-5/12 order-3 md:order-3"></div>
                        </div>

                        {/* Step 6: Welding */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
                            <div className="md:w-5/12 order-3 md:order-1"></div>
                            <div className="w-12 h-12 shrink-0 bg-halla-navy rounded-full border-2 border-slate-50 flex items-center justify-center z-20 order-1 md:order-2 mb-4 md:mb-0">
                                <span className="text-white font-bold text-sm">06</span>
                            </div>
                            <div className="md:w-5/12 order-2 md:order-3 text-center md:text-left p-6 bg-white border-2 border-laser-orange shadow-lg rounded-lg z-10 scale-105">
                                <h3 className="text-lg font-bold text-halla-navy mb-2">06. 제작 (용접)</h3>
                                <p className="text-slate-600 text-sm">숙련된 용접 기술과 자동화 로봇 용접을 병행하여 견고하고 미려한 제품을 제작합니다.</p>
                            </div>
                        </div>

                        {/* Step 7: Coating */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
                            <div className="md:w-5/12 order-2 md:order-1 text-center md:text-right p-6 bg-white border border-slate-100 shadow-sm rounded-lg z-10">
                                <h3 className="text-lg font-bold text-halla-navy mb-2">07. 도장 및 도금</h3>
                                <p className="text-slate-600 text-sm">제품의 내식성과 미관을 위해 자재 특성에 맞는 분체 도장, 불소 도장, 혹은 도금 처리를 진행합니다.</p>
                            </div>
                            <div className="w-12 h-12 shrink-0 bg-white border-2 border-halla-navy rounded-full flex items-center justify-center z-20 order-1 md:order-2 mb-4 md:mb-0">
                                <span className="text-halla-navy font-bold text-sm">07</span>
                            </div>
                            <div className="md:w-5/12 order-3 md:order-3"></div>
                        </div>

                        {/* Step 8: Assembly */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
                            <div className="md:w-5/12 order-3 md:order-1"></div>
                            <div className="w-12 h-12 shrink-0 bg-white border-2 border-halla-navy rounded-full flex items-center justify-center z-20 order-1 md:order-2 mb-4 md:mb-0">
                                <span className="text-halla-navy font-bold text-sm">08</span>
                            </div>
                            <div className="md:w-5/12 order-2 md:order-3 text-center md:text-left p-6 bg-white border border-slate-100 shadow-sm rounded-lg z-10">
                                <h3 className="text-lg font-bold text-halla-navy mb-2">08. 조립</h3>
                                <p className="text-slate-600 text-sm">가공된 각 부품을 최종 형태로 조립하며, 작동 부위의 유격과 체결 상태를 확인합니다.</p>
                            </div>
                        </div>

                        {/* Step 9: Inspection */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
                            <div className="md:w-5/12 order-2 md:order-1 text-center md:text-right p-6 bg-white border border-slate-100 shadow-sm rounded-lg z-10">
                                <h3 className="text-lg font-bold text-halla-navy mb-2">09. 검사</h3>
                                <p className="text-slate-600 text-sm">출고 전 엄격한 품질 검사(QA)를 통해 치수, 외관, 기능상 결함을 최종 점검합니다.</p>
                            </div>
                            <div className="w-12 h-12 shrink-0 bg-white border-2 border-halla-navy rounded-full flex items-center justify-center z-20 order-1 md:order-2 mb-4 md:mb-0">
                                <span className="text-halla-navy font-bold text-sm">09</span>
                            </div>
                            <div className="md:w-5/12 order-3 md:order-3"></div>
                        </div>

                        {/* Step 10: Delivery */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-5/12 order-3 md:order-1"></div>
                            <div className="w-12 h-12 shrink-0 bg-laser-orange rounded-full flex items-center justify-center z-20 order-1 md:order-2 mb-4 md:mb-0 shadow-lg">
                                <Check className="text-white" size={24} />
                            </div>
                            <div className="md:w-5/12 order-2 md:order-3 text-center md:text-left p-6 bg-halla-navy bg-slate-900 border border-slate-900 shadow-lg rounded-lg z-10">
                                <h3 className="text-lg font-bold text-white mb-2">10. 출고</h3>
                                <p className="text-slate-300 text-sm">포장 후 안전하게 목적지까지 납품하며, 고객의 납품 조건을 준수하여 인도합니다.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
