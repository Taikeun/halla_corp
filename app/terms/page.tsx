import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-3xl font-bold text-halla-navy mb-8">이용약관 (Terms of Service)</h1>

                <div className="space-y-8 text-slate-600 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-halla-navy mb-4">제1조 (목적)</h2>
                        <p>
                            본 약관은 (주)한라(이하 "회사")가 운영하는 웹사이트에서 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어
                            회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-halla-navy mb-4">제2조 (정의)</h2>
                        <p>
                            "이용자"란 회사 웹사이트에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 받는 등 사이트가 제공하는 서비스를 이용하는 자를 말합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-halla-navy mb-4">제3조 (약관의 효력 및 변경)</h2>
                        <p>
                            회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 사이트 초기 화면에 게시합니다.
                            회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 변경된 약관은 공지사항을 통해 공지합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-halla-navy mb-4">제4조 (서비스의 제공 및 변경)</h2>
                        <p>
                            회사는 다음과 같은 업무를 수행합니다:
                            1. 회사 소개 및 제품, 설비 정보 제공
                            2. 견적 문의 및 고객 상담 지원
                            3. 기타 회사가 정하는 업무
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-halla-navy mb-4">제5조 (저작권의 귀속 및 이용제한)</h2>
                        <p>
                            회사가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 회사에 귀속됩니다.
                            이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
