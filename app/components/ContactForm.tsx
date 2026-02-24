'use client';

import { useState, FormEvent } from 'react';

interface FormData {
    name: string;
    company: string;
    email: string;
    subject: string;
    message: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<SubmitStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `[한라 홈페이지 문의] ${formData.subject}`,
                    from_name: formData.name,
                    name: formData.name,
                    company: formData.company,
                    email: formData.email,
                    message: formData.message,
                    botcheck: '',
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', company: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(result.message || '전송에 실패했습니다. 다시 시도해 주세요.');
            }
        } catch {
            setStatus('error');
            setErrorMessage('네트워크 오류가 발생했습니다. 다시 시도해 주세요.');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 shadow-lg">
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h4 className="text-xl font-bold text-halla-navy mb-2">문의가 접수되었습니다</h4>
                    <p className="text-slate-600 mb-6">빠른 시일 내에 답변 드리겠습니다.</p>
                    <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="text-laser-orange font-bold hover:underline"
                    >
                        새 문의 작성하기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 shadow-lg">
            <h3 className="text-xl font-bold text-halla-navy mb-6">Online Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 focus:border-halla-navy focus:outline-none transition-colors"
                            placeholder="홍길동"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 focus:border-halla-navy focus:outline-none transition-colors"
                            placeholder="(주)회사명"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 focus:border-halla-navy focus:outline-none transition-colors"
                        placeholder="example@email.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 focus:border-halla-navy focus:outline-none transition-colors"
                        placeholder="문의 제목을 입력해주세요"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 focus:border-halla-navy focus:outline-none transition-colors h-32 resize-none"
                        placeholder="문의 내용을 입력해주세요"
                    />
                </div>

                {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                        {errorMessage}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-halla-navy text-white font-bold py-4 uppercase tracking-widest hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? '전송 중...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
