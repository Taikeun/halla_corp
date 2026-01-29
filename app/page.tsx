import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Hammer, PencilRuler, Scissors, ArrowDownToLine, Disc } from "lucide-react";
import { portfolioProjects } from "./data/portfolioData";
import { products } from "./data/productsData";

export default function Home() {
  const latestProjects = [...portfolioProjects]
    .sort((a, b) => {
      const getEndDate = (period: string) => {
        const parts = period.split('~');
        return parts.length > 1 ? parts[1].trim() : parts[0].trim();
      };
      return getEndDate(b.details.period).localeCompare(getEndDate(a.details.period));
    })
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/halla_corp/images/hero_bg_minimal.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* Background Overlay (Texture) */}
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            STEEL CURTAIN WALL <br />
            & LASER WELDING
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            첨단 레이저 용접 기술과 정밀 가공으로 <br className="md:hidden" />
            건축의 미래를 짓는 <span className="text-white font-semibold">(주)한라</span>입니다.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-laser-orange text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              Our Products
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="group border-b border-slate-100 pb-8 hover:border-laser-orange transition-colors">
              <Zap className="w-12 h-12 text-halla-navy mb-6 group-hover:text-laser-orange transition-colors" />
              <h3 className="text-xl font-bold text-halla-navy mb-4">Precision Laser Welding</h3>
              <p className="text-slate-600 leading-relaxed">
                최신 레이저 커팅 및 용접 설비를 도입하여 오차 없는 정밀한 제품을 생산합니다.
              </p>
            </div>

            <div className="group border-b border-slate-100 pb-8 hover:border-laser-orange transition-colors">
              <Hammer className="w-12 h-12 text-halla-navy mb-6 group-hover:text-laser-orange transition-colors" />
              <h3 className="text-xl font-bold text-halla-navy mb-4">Custom Metal Fabrication</h3>
              <p className="text-slate-600 leading-relaxed">
                고객의 요구사항에 맞춘 맞춤형 스틸 커튼월과 구조물을 설계부터 제작까지 제공합니다.
              </p>
            </div>

            <div className="group border-b border-slate-100 pb-8 hover:border-laser-orange transition-colors">
              <PencilRuler className="w-12 h-12 text-halla-navy mb-6 group-hover:text-laser-orange transition-colors" />
              <h3 className="text-xl font-bold text-halla-navy mb-4">Design & Engineering</h3>
              <p className="text-slate-600 leading-relaxed">
                다수의 대형 건설 프로젝트 참여 경험을 바탕으로 신뢰할 수 있는 파트너가 되겠습니다.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Facilities Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-laser-orange font-bold text-sm tracking-widest uppercase mb-2 block">Our Facilities</span>
            <h2 className="text-4xl font-bold text-halla-navy mb-6">
              Advanced Technology <br /> for Better Quality
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              (주)한라는 최고의 품질을 위해 끊임없이 설비에 투자합니다.
              레이저 용접기, 절곡기, 가공 설비 등 최신 자동화 라인을 구축하여
              생산성을 극대화하고 있습니다.
            </p>
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 text-halla-navy font-bold border-b-2 border-halla-navy pb-1 hover:text-laser-orange hover:border-laser-orange transition-colors"
            >
              View Equipment
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 2x2 Icon Grid */}
          <div className="w-full grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center gap-3 hover:border-laser-orange transition-colors group h-40">
              <Zap className="w-10 h-10 text-halla-navy group-hover:text-laser-orange transition-colors duration-300" strokeWidth={1.5} />
              <span className="text-sm font-bold text-slate-700">Laser Welder</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center gap-3 hover:border-laser-orange transition-colors group h-40">
              <Scissors className="w-10 h-10 text-halla-navy group-hover:text-laser-orange transition-colors duration-300" strokeWidth={1.5} />
              <span className="text-sm font-bold text-slate-700">Shearing Machine</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center gap-3 hover:border-laser-orange transition-colors group h-40">
              <ArrowDownToLine className="w-10 h-10 text-halla-navy group-hover:text-laser-orange transition-colors duration-300" strokeWidth={1.5} />
              <span className="text-sm font-bold text-slate-700">Press Machine</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center gap-3 hover:border-laser-orange transition-colors group h-40">
              <Disc className="w-10 h-10 text-halla-navy group-hover:text-laser-orange transition-colors duration-300" strokeWidth={1.5} />
              <span className="text-sm font-bold text-slate-700">Bandsaw</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Teaser - Random 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-laser-orange font-bold text-sm tracking-widest uppercase mb-2 block">Our Products</span>
              <h2 className="text-4xl font-bold text-halla-navy mb-4">High Quality & Precision</h2>
              <p className="text-slate-600 leading-relaxed max-w-2xl text-sm md:text-base">
                (주)한라는 첨단 레이저 기술과 정밀 가공 노하우를 바탕으로 <br className="hidden md:block" />
                최상의 품질을 자랑하는 다양한 철강 제품을 직접 생산합니다.
              </p>
            </div>
            <Link href="/products" className="hidden md:inline-flex items-center gap-2 text-halla-navy font-bold hover:text-laser-orange transition-colors">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .sort(() => 0.5 - Math.random()) // Simple shuffle
              .slice(0, 3)
              .map((product, idx) => (
                <div key={idx} className="group border border-slate-100 hover:border-laser-orange hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden bg-white">
                  <div className="relative h-64 bg-slate-50 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className={`object-${product.imageFit || 'cover'} group-hover:scale-105 transition-transform duration-500`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-halla-navy mb-3 group-hover:text-laser-orange transition-colors line-clamp-1">{product.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {product.desc}
                    </p>
                    <Link href="/products" className="text-sm font-bold text-slate-400 group-hover:text-halla-navy flex items-center gap-1 transition-colors">
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/products" className="inline-flex items-center gap-2 text-halla-navy font-bold hover:text-laser-orange transition-colors">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-24 bg-halla-navy text-white">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-end mb-16">
          <div>
            <span className="text-laser-orange font-bold text-sm tracking-widest uppercase mb-2 block">Portfolio</span>
            <h2 className="text-4xl font-bold">Our Works</h2>
            <p className="text-slate-400 mt-4 leading-relaxed max-w-2xl">
              대형 건설사와의 파트너십을 통해 축적된 다양한 시공 사례를 소개합니다. <br className="hidden md:block" />
              (주)한라의 기술력이 입증된 현장을 확인해 보세요.
            </p>
          </div>
          <Link href="/portfolio" className="hidden md:inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestProjects.map((project, idx) => (
            <Link key={idx} href="/portfolio" className="group relative h-80 bg-slate-800 overflow-hidden cursor-pointer block rounded-sm">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-laser-orange text-xs font-bold tracking-widest uppercase mb-1 block">{project.subtitle}</span>
                <h3 className="text-xl font-bold mb-1 leading-snug">{project.title}</h3>
                <p className="text-sm text-slate-300 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">View Details <ArrowRight size={12} className="inline ml-1" /></p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
