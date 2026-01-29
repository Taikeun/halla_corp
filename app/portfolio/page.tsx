'use client';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Image from "next/image";
import { portfolioProjects } from "../data/portfolioData";

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <section className="bg-halla-navy py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/halla_corp/images/pattern_grid.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">Portfolio</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up animation-delay-200">
                        (주)한라의 기술력이 담긴 주요 프로젝트를 소개합니다.<br />
                        최고의 품질과 정밀 타공으로 완성도 높은 건축물을 만들어갑니다.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[...portfolioProjects]
                        .sort((a, b) => {
                            const getEndDate = (period: string) => {
                                const parts = period.split('~');
                                return parts.length > 1 ? parts[1].trim() : parts[0].trim();
                            };
                            return getEndDate(b.details.period).localeCompare(getEndDate(a.details.period));
                        })
                        .map((project, idx) => (
                            <div key={idx} className="group border border-slate-200 hover:border-laser-orange hover:shadow-xl transition-all duration-300 bg-white overflow-hidden flex flex-col">
                                {/* Image Section */}
                                <div className="relative h-64 w-full bg-slate-100 group-hover:bg-slate-50 transition-colors">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="mb-6">
                                        <span className="text-laser-orange font-bold text-sm tracking-widest uppercase mb-2 block">{project.subtitle}</span>
                                        <h3 className="text-xl font-bold text-halla-navy leading-tight group-hover:text-laser-orange transition-colors">{project.title}</h3>
                                    </div>

                                    <div className="space-y-3 mt-auto">
                                        <div className="flex border-b border-slate-100 pb-2">
                                            <span className="w-24 text-slate-400 font-medium text-sm">발주처</span>
                                            <span className="text-slate-700 font-bold text-sm truncate">{project.details.client}</span>
                                        </div>
                                        <div className="flex border-b border-slate-100 pb-2">
                                            <span className="w-24 text-slate-400 font-medium text-sm">시공사</span>
                                            <span className="text-slate-700 text-sm truncate">{project.details.builder}</span>
                                        </div>
                                        <div className="flex border-b border-slate-100 pb-2">
                                            <span className="w-24 text-slate-400 font-medium text-sm">적용제품</span>
                                            <span className="text-slate-700 text-sm truncate">{project.details.product}</span>
                                        </div>
                                        <div className="flex border-b border-slate-100 pb-2">
                                            <span className="w-24 text-slate-400 font-medium text-sm">공사 위치</span>
                                            <span className="text-slate-700 text-sm truncate">{project.details.location}</span>
                                        </div>
                                        <div className="flex pt-1">
                                            <span className="w-24 text-slate-400 font-medium text-sm">공사 기간</span>
                                            <span className="text-slate-700 text-sm font-mono">{project.details.period}</span>
                                        </div>
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
