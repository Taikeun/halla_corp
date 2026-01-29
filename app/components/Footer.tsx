import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Brand */}
                <div>
                    <Link href="/" className="mb-6 inline-block">
                        <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8 bg-white rounded-sm overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/images/halla_logo.jpg"
                                    alt="(주)한라"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tighter uppercase">
                                (주) 한라
                            </span>
                        </div>
                    </Link>
                    <p className="max-w-xs leading-relaxed mb-6">
                        고객의 가치를 실현하는 정밀 판금 및 레이저 용접 전문 기업.
                        최고의 품질과 기술력으로 보답하겠습니다.
                    </p>
                    <p className="text-xs text-slate-500">
                        사업자 등록번호: 695-87-02132
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        {[
                            { name: '회사소개', href: '/about' },
                            { name: '서비스소개', href: '/services' },
                            { name: '보유설비', href: '/facilities' },
                            { name: '생산품목', href: '/products' },
                            { name: '포트폴리오', href: '/portfolio' },
                            { name: '문의하기', href: '/contact' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="hover:text-laser-orange transition-colors text-sm">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="shrink-0 text-laser-orange" />
                            <span className="text-sm">경기도 김포시 대곶북로 422</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={20} className="shrink-0 text-laser-orange" />
                            <span className="text-sm">031-983-8177</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} className="shrink-0 text-laser-orange" />
                            <span className="text-sm">halla2708@naver.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 text-xs text-slate-600 flex justify-between items-center">
                <p>© 2026 Halla Corp. All rights reserved.</p>
                <div className="flex gap-4">
                    <span className="font-bold text-slate-500">이메일 및 회사정보 무단 수집 거부</span>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
