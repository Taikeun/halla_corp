import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <section className="bg-halla-navy py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        (주)한라에 궁금한 점이 있으시거나 견적 문의가 필요하시면 언제든 연락해 주세요.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-halla-navy mb-8">Get In Touch</h2>
                        <p className="text-slate-600 mb-12 leading-relaxed">
                            프로젝트 관련 문의나 파트너십 제안은 아래 연락처나 양식을 통해 접수해 주십시오.
                            담당자가 확인 후 신속하게 회신 드리겠습니다.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center shrink-0 text-laser-orange">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-halla-navy mb-1 uppercase tracking-wider text-sm">Address</h3>
                                    <p className="text-slate-600">경기도 김포시 대곶북로 422</p>
                                    <p className="text-slate-500 text-sm mt-1">(주)한라 본사 및 공장</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center shrink-0 text-laser-orange">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-halla-navy mb-1 uppercase tracking-wider text-sm">Phone</h3>
                                    <p className="text-slate-600">Tel: 031-983-8177</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center shrink-0 text-laser-orange">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-halla-navy mb-1 uppercase tracking-wider text-sm">Email</h3>
                                    <p className="text-slate-600">halla2708@naver.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center shrink-0 text-laser-orange">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-halla-navy mb-1 uppercase tracking-wider text-sm">Office Hours</h3>
                                    <p className="text-slate-600">Mon - Fri: 09:00 - 18:00</p>
                                    <p className="text-slate-600">Sat, Sun, Holidays: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Map (Relocated) */}
                        <div className="mt-12 h-64 w-full bg-slate-200 relative rounded-sm overflow-hidden shadow-md">
                            <iframe
                                width="100%"
                                height="100%"
                                title="Halla Corp Location"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=경기도 김포시 대곶북로 422&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="border-0 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 shadow-lg">
                        <h3 className="text-xl font-bold text-halla-navy mb-6">Online Inquiry</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 border border-slate-300 focus:border-halla-navy focus:outline-none transition-colors" placeholder="홍길동" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                                    <input type="text" className="w-full px-4 py-3 border border-slate-300 focus:border-halla-navy focus:outline-none transition-colors" placeholder="(주)회사명" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 border border-slate-300 focus:border-halla-navy focus:outline-none transition-colors" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                                <input type="text" className="w-full px-4 py-3 border border-slate-300 focus:border-halla-navy focus:outline-none transition-colors" placeholder="문의 제목을 입력해주세요" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                <textarea className="w-full px-4 py-3 border border-slate-300 focus:border-halla-navy focus:outline-none transition-colors h-32 resize-none" placeholder="문의 내용을 입력해주세요"></textarea>
                            </div>
                            <button type="button" className="w-full bg-halla-navy text-white font-bold py-4 uppercase tracking-widest hover:bg-slate-800 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>


            <Footer />
        </div>
    );
}
