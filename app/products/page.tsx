import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { products } from "../data/productsData";

export default function Products() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Compact */}
      <section className="bg-halla-navy py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            (주)한라가 만드는 최고의 스틸 제품군을 소개합니다.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, idx) => (
            <div key={idx} className="group border border-slate-200 hover:border-laser-orange hover:shadow-xl transition-all duration-300 bg-white overflow-hidden flex flex-col rounded-lg">

              {/* Image Section */}
              <div className="relative h-64 w-full bg-slate-100 group-hover:bg-slate-50 transition-colors border-b border-slate-100">
                {product.images.length === 2 ? (
                  // Split View for exactly 2 images (Washers)
                  <div className="flex h-full w-full">
                    <div className="relative w-1/2 h-full border-r border-white/50">
                      <Image
                        src={product.images[0]}
                        alt={`${product.title} 1`}
                        fill
                        className={`object-${product.imageFit || 'cover'} group-hover:scale-105 transition-transform duration-500`}
                      />
                    </div>
                    <div className="relative w-1/2 h-full">
                      <Image
                        src={product.images[1]}
                        alt={`${product.title} 2`}
                        fill
                        className={`object-${product.imageFit || 'cover'} group-hover:scale-105 transition-transform duration-500`}
                      />
                    </div>
                  </div>
                ) : product.images.length > 2 ? (
                  // Carousel View for > 2 images (Reinforcement Bar)
                  <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    {product.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="w-full h-full flex-shrink-0 snap-center relative bg-slate-200 border-r border-white/20 last:border-0">
                        <Image
                          src={img}
                          alt={`${product.title} ${imgIdx + 1}`}
                          fill
                          className={`object-${product.imageFit || 'cover'}`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  // Single Image
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className={`object-${product.imageFit || 'cover'} group-hover:scale-105 transition-transform duration-500`}
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-laser-orange font-bold text-xs tracking-widest uppercase mb-2 block">
                    Product {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-bold text-halla-navy mb-3 group-hover:text-laser-orange transition-colors">{product.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.desc}
                  </p>
                </div>

                <div className="space-y-2 mt-auto border-t border-slate-100 pt-4">
                  {product.features.slice(0, 3).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-laser-orange rounded-full flex-shrink-0"></div>
                      <span className="text-slate-500 text-xs font-bold truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 hidden">
                  <button className="flex items-center gap-2 text-halla-navy font-bold text-sm hover:text-laser-orange transition-colors">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Catalog Download CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-halla-navy mb-6">궁금한 점이 있으신가요?</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            상세 사양이나 견적 문의가 필요하시면 언제든 연락해 주세요. 빠르고 친절하게 답변해 드리겠습니다.
          </p>
          <a href="/contact" className="inline-block bg-halla-navy text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
            Inquire Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
