import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Facilities() {
    const facilities = [
        {
            name: "Shearing Machine (샤링기)",
            images: ["/halla_corp/images/facilities/shearing_machine.png"],
            desc: "원자재(강판, 스테인리스 등)를 정해진 규격으로 신속하고 정확하게 단순 절단하는 초기 공정 설비입니다.",
            specs: ["AMADA Shear", "최대 절단 길이: 3000mm", "정밀 유압 제어"]
        },
        {
            name: "Press Line (프레스)",
            images: ["/halla_corp/images/facilities/press_machine.png"],
            desc: "금형을 이용한 대량 생산 및 성형 가공에 최적화된 프레스 라인입니다. 타공, 포밍 등 다양한 가공이 가능합니다.",
            specs: ["Mechanical Press 3기", "75톤 / 50톤 라인업", "고속 연속 가공"]
        },
        {
            name: "Band Saw (Small)",
            images: ["/halla_corp/images/facilities/bandsaw_small.png"],
            desc: "파이프 및 형강류 절단에 특화된 소형 밴드쏘입니다. 각도 절단이 용이하여 다양한 프레임 제작에 활용됩니다.",
            specs: ["George 260", "가공 직경: Ø225mm", "각도 절단: 0~60도"]
        },
        {
            name: "Band Saw (Medium)",
            images: ["/halla_corp/images/facilities/bandsaw_medium.jpg"],
            desc: "중형 구조물 및 자재 절단용 설비로, 안정적인 절삭 능력과 빠른 작업 속도를 자랑합니다.",
            specs: ["NC-600", "자동 이송 장치 탑재", "정밀 치수 제어"]
        },
        {
            name: "Band Saw (Large)",
            images: ["/halla_corp/images/facilities/bandsaw_large.jpg"],
            desc: "H빔, 각파이프 등 대형 구조물 및 후판 자재 절단이 가능한 대형 밴드쏘입니다. 고성능 톱날로 난삭재 가공도 가능합니다.",
            specs: ["High-speed Cutting", "대구경 파이프 절단", "강력한 모터 출력"]
        },
        {
            name: "Milling Machine (밀링기)",
            images: [
                "/halla_corp/images/facilities/milling/milling_v2_1.png",
                "/halla_corp/images/facilities/milling/milling_v2_2.jpg",
                "/halla_corp/images/facilities/milling/milling_v2_3.jpg",
                "/halla_corp/images/facilities/milling/milling_v2_4.jpg"
            ],
            desc: "다양한 형태의 부품 가공을 위한 고정밀 밀링 머신입니다. 평면 깎기, 홈 깎기 등 정교한 작업이 가능합니다.",
            specs: ["범용 밀링 / NC 밀링", "복잡한 형상 가공", "정밀 부품 제작"]
        },
        {
            name: "Laser Welder (레이저 용접기)",
            images: [
                "/halla_corp/images/facilities/laser_welder/laser_welder_1.png",
                "/halla_corp/images/facilities/laser_welder/laser_welder_2.png",
                "/halla_corp/images/facilities/laser_welder/laser_welder_3.png",
                "/halla_corp/images/facilities/laser_welder/laser_welder_4.png"
            ],
            desc: "최첨단 레이저 용접 기술을 통해 열변형을 최소화하고 깊은 용입을 실현합니다. 정밀하고 강도 높은 접합이 가능합니다.",
            specs: ["ASEA Laser 2000W", "최소 열변형", "이종 금속 용접 가능"]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <section className="bg-halla-navy py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Facilities</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        최고의 품질을 구현하기 위한 (주)한라의 첨단 생산 설비를 소개합니다.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {facilities.map((fac, idx) => (
                        <div key={idx} className="group border border-slate-200 hover:border-laser-orange hover:shadow-xl transition-all duration-300 bg-white overflow-hidden flex flex-col">
                            {/* Image Section */}
                            <div className="relative h-64 w-full bg-slate-100 group-hover:bg-slate-50 transition-colors">
                                {fac.images.length > 1 ? (
                                    <div className="flex overflow-x-auto snap-x snap-mandatory h-full scrollbar-hide">
                                        {fac.images.map((img, imgIdx) => (
                                            <div key={imgIdx} className="relative w-full h-full flex-shrink-0 snap-center border-r border-white/20 last:border-0">
                                                <Image
                                                    src={img}
                                                    alt={`${fac.name} ${imgIdx + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    fac.images[0]?.endsWith('.png') || fac.images[0]?.endsWith('.jpg') ? (
                                        <Image
                                            src={fac.images[0]}
                                            alt={fac.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200">
                                            No Image
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-halla-navy mb-3 group-hover:text-laser-orange transition-colors">{fac.name}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {fac.desc}
                                </p>
                                <div className="space-y-1 pt-4 border-t border-slate-100">
                                    {fac.specs.map((spec, sIdx) => (
                                        <p key={sIdx} className="text-xs font-bold text-slate-500 flex items-center gap-2">
                                            <span className="w-1 h-1 bg-laser-orange rounded-full"></span>
                                            {spec}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
