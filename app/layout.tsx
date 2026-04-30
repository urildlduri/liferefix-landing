import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://liferefix.com'),
  title: 'Liferefix | AI 개인회생 분석 및 수임료 견적 비교',
  description: 'AI 기반 개인회생 가능성 분석, 탕감률 예측, 수임료 견적 비교 서비스. 실제 판례 기반 무료 진단.',
  keywords: '개인회생, 개인회생변호사, 채무탕감, 회생신청, AI회생분석, 개인회생신청방법, 탕감률, 수임료비교, 개인회생계산기, 변제계획',
  authors: [{ name: 'Liferefix' }],
  creator: 'Liferefix',
  publisher: 'Liferefix',
  verification: {
    google: 'Po23qTv3LggXEt-9tra8Pp5cWJNppU9OfI_3pja8Hjc',
    other: {
      'naver-site-verification': '7f1694a22b3795dfa87e6f9ec0fdd2f6271a418e',
    },
  },
  openGraph: {
    title: 'AI 개인회생 분석 Liferefix',
    description: '무료로 회생 가능성을 진단하고 수임료 견적을 비교해보세요',
    type: 'website',
    url: 'https://liferefix.com',
    siteName: 'Liferefix',
    locale: 'ko_KR',
    images: [{ url: 'https://liferefix.com/og-image.png', width: 1200, height: 630, alt: 'Liferefix - AI 개인회생 분석' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liferefix | AI 개인회생 분석',
    description: '실제 판례 기반 AI 탕감률 무료 진단. 변호사 수임료 견적 비교.',
    images: ['https://liferefix.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: 'https://liferefix.com' },
  category: 'finance',
}

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Liferefix',
  url: 'https://liferefix.com',
  logo: 'https://liferefix.com/og-image.png',
  description: 'AI 기반 개인회생 분석 및 변호사 수임료 견적 비교 플랫폼',
}

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Liferefix',
  url: 'https://liferefix.com',
  inLanguage: 'ko-KR',
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: '개인회생 AI 분석 및 변호사 수임료 견적 비교',
  provider: {
    '@type': 'Organization',
    name: 'Liferefix',
    url: 'https://liferefix.com',
  },
  areaServed: { '@type': 'Country', name: '대한민국' },
  description: 'AI 기반 채무 분석으로 개인회생 탕감률을 예측하고, 검증된 변호사의 수임료 견적을 비교할 수 있는 서비스입니다.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
    description: 'AI 진단 및 변호사 견적 수신 무료',
  },
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '개인회생 신청 자격이 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '소득이 있거나 소득 발생 가능성이 있는 개인이라면 신청 가능합니다. AI 진단으로 2분 안에 가능성을 확인하세요.',
      },
    },
    {
      '@type': 'Question',
      name: '탕감률은 얼마나 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '실제 판례 분석 결과 평균 72% 탕감이 인정됐습니다. 사유·나이·부양가족에 따라 다릅니다.',
      },
    },
    {
      '@type': 'Question',
      name: '변호사 선택은 제가 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 채무자가 직접 변호사를 선택합니다. Liferefix는 연결만 하며 특정 변호사를 추천하지 않습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '비용이 드나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI 진단과 변호사 견적 수신은 완전 무료입니다. 변호사 선택 후 수임 계약은 당사자 간에 진행됩니다.',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      </head>
      <body style={{ margin: 0, fontFamily: "'Pretendard', -apple-system, sans-serif", background: '#F5F3FF', color: '#0D1B2A' }}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
