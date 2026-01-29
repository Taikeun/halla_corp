import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { CheckCircle2, Award, Users } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section - Compact */}
            <section className="bg-halla-navy py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        정밀함과 신뢰로 쌓아온 (주)한라의 역사와 비전을 소개합니다.
                    </p>
                </div>
            </section>

            {/* Introduction / CEO Message */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-laser-orange font-bold text-sm tracking-widest uppercase mb-4 block">Company Overview</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-halla-navy mb-8 leading-tight">
                        "고객의 신뢰를 바탕으로<br />기술과 품질로 보답하겠습니다."
                    </h2>
                    <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-left bg-slate-50 p-8 md:p-12 rounded-sm border border-slate-100 shadow-sm">
                        <p>
                            주식회사 한라는 2021년 <b>(주)케이엔에스피</b> 창립 이후, H/W 제작 전문업체로서 쌓아온 풍부한 경험과 기술 노하우를 바탕으로 성장해 왔습니다.
                        </p>
                        <p>
                            특히 <b>P.C Anchor</b> 및 <b>ST’L Bracket</b> 제품 제작, <b>ST’L Curtain Wall</b> 임가공 분야에서 독보적인 전문성을 구축하며 고객사의 성공적인 프로젝트 수행에 기여해 왔습니다.
                        </p>
                        <p>
                            우리는 단순한 제작을 넘어, 끊임없는 기술 개발과 효율적인 공정 관리를 통해 고객 만족 경영을 극대화하는 것을 최우선 목표로 삼고 있습니다. 앞으로도 사전·사후 서비스에 만전을 기하여, 고객 여러분이 언제나 믿고 찾을 수 있는 든든한 파트너가 될 것을 약속드립니다.
                        </p>
                        <p className="font-medium text-halla-navy">
                            열과 성을 다하여 여러분과 함께 성장하는 (주)한라가 되겠습니다.
                        </p>
                        <p>
                            감사합니다.
                        </p>
                        <div className="mt-8 font-bold text-halla-navy text-xl text-right">
                            대표이사 올림
                        </div>
                    </div>
                </div>
            </section>

            {/* Company History */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-laser-orange font-bold text-sm tracking-widest uppercase mb-2 block">Our Journey</span>
                        <h2 className="text-3xl font-bold text-halla-navy">Company History</h2>
                    </div>

                    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-1/2 space-y-12 pl-8 md:pl-0">
                        {/* 2025 */}
                        <div className="relative md:flex items-start group">
                            <div className="hidden md:block w-1/2 pr-12 text-right">
                                <h3 className="text-2xl font-bold text-halla-navy group-hover:text-laser-orange transition-colors">2025</h3>
                            </div>
                            <div className="absolute left-[-39px] md:left-1/2 md:-ml-2 top-1 w-5 h-5 bg-white border-4 border-slate-300 rounded-full group-hover:border-laser-orange transition-colors z-10"></div>
                            <div className="md:w-1/2 md:pl-12">
                                <h3 className="md:hidden text-2xl font-bold text-halla-navy mb-2 group-hover:text-laser-orange transition-colors">2025</h3>
                                <ul className="space-y-4 text-slate-600">
                                    <li className="flex gap-4">
                                        <span className="font-bold text-slate-400 w-12 shrink-0">09</span>
                                        <span>ISO 인증</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-slate-400 w-12 shrink-0">08</span>
                                        <span>설비확장</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-slate-400 w-12 shrink-0">04</span>
                                        <span>특허등록</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 2024 */}
                        <div className="relative md:flex items-start group">
                            <div className="hidden md:block w-1/2 pr-12 text-right">
                                <h3 className="text-2xl font-bold text-halla-navy group-hover:text-laser-orange transition-colors">2024</h3>
                            </div>
                            <div className="absolute left-[-39px] md:left-1/2 md:-ml-2 top-1 w-5 h-5 bg-white border-4 border-slate-300 rounded-full group-hover:border-laser-orange transition-colors z-10"></div>
                            <div className="md:w-1/2 md:pl-12">
                                <h3 className="md:hidden text-2xl font-bold text-halla-navy mb-2 group-hover:text-laser-orange transition-colors">2024</h3>
                                <ul className="space-y-4 text-slate-600">
                                    <li className="flex gap-4">
                                        <span className="font-bold text-slate-400 w-12 shrink-0">06</span>
                                        <span>설비확장</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-slate-400 w-12 shrink-0">04</span>
                                        <span>현 부지로 확장 이전</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 2023 */}
                        <div className="relative md:flex items-start group">
                            <div className="hidden md:block w-1/2 pr-12 text-right">
                                <h3 className="text-2xl font-bold text-halla-navy group-hover:text-laser-orange transition-colors">2023</h3>
                            </div>
                            <div className="absolute left-[-39px] md:left-1/2 md:-ml-2 top-1 w-5 h-5 bg-white border-4 border-slate-300 rounded-full group-hover:border-laser-orange transition-colors z-10"></div>
                            <div className="md:w-1/2 md:pl-12">
                                <h3 className="md:hidden text-2xl font-bold text-halla-navy mb-2 group-hover:text-laser-orange transition-colors">2023</h3>
                                <ul className="space-y-4 text-slate-600">
                                    <li className="flex gap-4">
                                        <span className="font-bold text-slate-400 w-12 shrink-0">07</span>
                                        <div>
                                            <p>연구전담부서 개설</p>
                                            <p>특허 출원 10-2023-0094060</p>
                                            <p>벤처기업 등록</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-slate-400 w-12 shrink-0">05</span>
                                        <span>'(주)한라' 로 법인명 변경</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-slate-400 w-12 shrink-0">03</span>
                                        <span>사업장 확장 이전</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 2022 */}
                        <div className="relative md:flex items-start group">
                            <div className="hidden md:block w-1/2 pr-12 text-right">
                                <h3 className="text-2xl font-bold text-halla-navy group-hover:text-laser-orange transition-colors">2022</h3>
                            </div>
                            <div className="absolute left-[-39px] md:left-1/2 md:-ml-2 top-1 w-5 h-5 bg-white border-4 border-slate-300 rounded-full group-hover:border-laser-orange transition-colors z-10"></div>
                            <div className="md:w-1/2 md:pl-12">
                                <h3 className="md:hidden text-2xl font-bold text-halla-navy mb-2 group-hover:text-laser-orange transition-colors">2022</h3>
                                <ul className="space-y-4 text-slate-600">
                                    <li className="flex gap-4">
                                        <span className="font-bold text-slate-400 w-12 shrink-0">03</span>
                                        <div>
                                            <p>(주)한라체육으로 법인명 변경</p>
                                            <p>종목 추가 / 체육시설물 제작</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 2021 */}
                        <div className="relative md:flex items-start group">
                            <div className="hidden md:block w-1/2 pr-12 text-right">
                                <h3 className="text-2xl font-bold text-halla-navy group-hover:text-laser-orange transition-colors">2021</h3>
                            </div>
                            <div className="absolute left-[-39px] md:left-1/2 md:-ml-2 top-1 w-5 h-5 bg-white border-4 border-slate-300 rounded-full group-hover:border-laser-orange transition-colors z-10"></div>
                            <div className="md:w-1/2 md:pl-12">
                                <h3 className="md:hidden text-2xl font-bold text-halla-navy mb-2 group-hover:text-laser-orange transition-colors">2021</h3>
                                <ul className="space-y-4 text-slate-600">
                                    <li className="flex gap-4">
                                        <span className="font-bold text-slate-400 w-12 shrink-0">04</span>
                                        <span>(주)케이엔에스피 설립 / 조형물 제작</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-laser-orange font-bold text-sm tracking-widest uppercase mb-2 block">Our Value</span>
                        <h2 className="text-3xl font-bold text-halla-navy">Core Mission</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: CheckCircle2, title: "Quality First", desc: "엄격한 품질 관리 시스템을 통한 무결점 제품 생산" },
                            { icon: Award, title: "Advanced Tech", desc: "최신 레이저 설비와 독자적 가공 기술 보유" },
                            { icon: Users, title: "Partnership", desc: "고객과의 소통을 통한 최적의 솔루션 제공" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <item.icon className="w-10 h-10 text-laser-orange mb-4" />
                                <h3 className="text-xl font-bold text-halla-navy mb-3">{item.title}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Patents */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-laser-orange font-bold text-sm tracking-widest uppercase mb-2 block">Proven Quality</span>
                        <h2 className="text-3xl font-bold text-halla-navy">Certifications & Patents</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            (주)한라는 공인된 기술력과 품질 경영 시스템을 바탕으로 신뢰받는 기업이 되기 위해 노력하고 있습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { title: "중소기업 확인서", image: "/images/certifications/sme_confirmation.jpg", desc: "중소벤처기업부 인증 강소기업" },
                            { title: "공장등록증명서", image: "/images/certifications/factory_registration.jpg", desc: "체계적인 생산 설비 및 공장 등록 승인" },
                            { title: "벤처기업 확인서", image: "/images/certifications/venture_cert.jpg", desc: "혁신성장유형 벤처기업 인증" },
                            { title: "품질경영시스템", image: "/images/certifications/iso_9001.jpg", desc: "ISO 9001:2015 국제 품질 경영 인증" },
                            { title: "환경경영시스템", image: "/images/certifications/iso_14001.jpg", desc: "ISO 14001:2015 국제 환경 경영 인증" },
                            { title: "특허증", image: "/images/certifications/patent.png", desc: "가변지지구조를 갖는 계단용 핸드레일 제조장치" },
                            { title: "연구개발전담부서 인정서", image: "/images/certifications/rnd_cert.jpg", desc: "과학기술정보통신부 인정 기업부설연구소" }
                        ].map((item, idx) => (
                            <div key={idx} className="group">
                                <div className="relative aspect-[1/1.4] bg-slate-100 border border-slate-200 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                                            <Award size={48} className="mb-2 opacity-50" />
                                            <span className="text-sm font-bold">인증서 준비중</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-bold text-halla-navy mb-1">{item.title}</h3>
                                    <p className="text-sm text-slate-500 break-keep px-2">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
