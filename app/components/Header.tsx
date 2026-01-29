'use client';

import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: '회사소개', href: '/about' },
        { name: '서비스소개', href: '/services' },
        { name: '보유설비', href: '/facilities' },
        { name: '생산품목', href: '/products' },
        { name: '포트폴리오', href: '/portfolio' },
        { name: '문의하기', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-halla-navy text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 bg-white rounded-sm overflow-hidden flex items-center justify-center">
                        <Image
                            src="/images/halla_logo.jpg"
                            alt="(주)한라"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tighter uppercase group-hover:text-laser-orange transition-colors">
                        (주) 한라
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item, idx) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors tracking-wide ${idx === navItems.length - 1
                                ? 'bg-laser-orange px-5 py-2 text-white font-bold uppercase tracking-widest hover:bg-orange-600 rounded-sm'
                                : 'hover:text-laser-orange'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-laser-orange transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-halla-navy text-white text-center py-6 space-y-4 shadow-inner border-t border-slate-700">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block hover:text-laser-orange transition-colors py-2 text-lg font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
