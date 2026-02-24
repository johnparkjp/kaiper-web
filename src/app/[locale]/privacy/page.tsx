import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Breadcrumb from '@/components/ui/Breadcrumb';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === 'ko';

  return {
    title: isKo ? '개인정보처리방침' : 'Privacy Policy',
    description: isKo
      ? 'Kaiper 개인정보처리방침'
      : 'Kaiper Privacy Policy',
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isKo = locale === 'ko';

  return (
    <>
    <Breadcrumb items={[
      { label: isKo ? '홈' : 'Home', href: '/' },
      { label: isKo ? '개인정보처리방침' : 'Privacy Policy' },
    ]} />
    <section className="min-h-screen bg-kaiper-black text-cool-gray-20 px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">
          {isKo ? '개인정보처리방침' : 'Privacy Policy'}
        </h1>
        <p className="text-sm text-cool-gray-40 mb-12">
          {isKo ? '최종 업데이트: 2026년 2월 18일' : 'Last updated: February 18, 2026'}
        </p>

        <div className="space-y-8 text-cool-gray-30 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-cool-gray-10 mb-3">
              {isKo ? '1. 수집하는 정보' : '1. Information We Collect'}
            </h2>
            <p>
              {isKo
                ? 'Kaiper는 서비스 제공을 위해 다음 정보를 수집할 수 있습니다: Threads 사용자 프로필 정보(사용자명, 프로필 사진), Threads 게시물 검색 결과(공개 게시물 텍스트, 미디어). 이 정보는 키워드 분석 및 트렌드 모니터링 목적으로만 사용됩니다.'
                : 'Kaiper may collect the following information to provide our services: Threads user profile information (username, profile picture), Threads post search results (public post text, media). This information is used solely for keyword analysis and trend monitoring purposes.'}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cool-gray-10 mb-3">
              {isKo ? '2. 정보 사용 목적' : '2. How We Use Information'}
            </h2>
            <p>
              {isKo
                ? '수집된 정보는 다음 목적으로 사용됩니다: 소셜 미디어 트렌드 분석, 키워드 기반 콘텐츠 검색, 비즈니스 인사이트 생성. 수집된 정보를 제3자에게 판매하거나 광고 목적으로 사용하지 않습니다.'
                : 'Collected information is used for the following purposes: social media trend analysis, keyword-based content search, and business insight generation. We do not sell collected information to third parties or use it for advertising purposes.'}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cool-gray-10 mb-3">
              {isKo ? '3. 정보 보관 및 삭제' : '3. Data Retention and Deletion'}
            </h2>
            <p>
              {isKo
                ? '검색 결과 데이터는 분석 완료 후 자동으로 삭제됩니다. 사용자는 언제든지 자신의 데이터 삭제를 요청할 수 있으며, 요청 시 30일 이내에 관련 데이터를 삭제합니다.'
                : 'Search result data is automatically deleted after analysis is complete. Users may request deletion of their data at any time, and we will delete related data within 30 days of the request.'}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cool-gray-10 mb-3">
              {isKo ? '4. 데이터 삭제 요청' : '4. Data Deletion Requests'}
            </h2>
            <p>
              {isKo
                ? '데이터 삭제를 요청하려면 kaiper.automation@gmail.com으로 이메일을 보내주세요. Meta 플랫폼을 통해 연결된 데이터의 삭제는 자동으로 처리됩니다.'
                : 'To request data deletion, please email kaiper.automation@gmail.com. Deletion of data connected through Meta platforms is handled automatically.'}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cool-gray-10 mb-3">
              {isKo ? '5. 문의' : '5. Contact'}
            </h2>
            <p>
              {isKo
                ? '개인정보 관련 문의사항은 kaiper.automation@gmail.com으로 연락해주세요.'
                : 'For privacy-related inquiries, please contact kaiper.automation@gmail.com.'}
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
