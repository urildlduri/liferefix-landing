import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Liferefix | AI 개인회생 분석 및 수임료 견적 비교',
  description: 'AI 기반 개인회생 가능성 분석, 탕감률 예측, 수임료 견적 비교 서비스. 실제 판례 기반 무료 진단.',
  keywords: '개인회생, 개인회생변호사, 채무탕감, 회생신청, AI회생분석, 개인회생신청방법, 탕감률, 수임료비교',
  verification: {
    google: 'Po23qTv3LggXEt-9tra8Pp5cWJNppU9OfI_3pja8Hjc',
    other: {
      'naver-site-verification': '3e38bccf6d26d5fb4090e44dd220ebbb1e6b38ba',
    },
  },
  openGraph: {
    title: 'AI 개인회생 분석 Liferefix',
    description: '무료로 회생 가능성을 진단하고 수임료 견적을 비교해보세요',
    type: 'website',
    url: 'https://liferefix.com',
    siteName: 'Liferefix',
    locale: 'ko_KR',
    images: [{ url: 'https://liferefix.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liferefix | AI 개인회생 분석',
    description: '실제 판례 기반 AI 탕감률 무료 진단. 변호사 수임료 견적 비교.',
    images: ['https://liferefix.com/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://liferefix.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0, fontFamily: "'Pretendard', -apple-system, sans-serif", background: '#F5F3FF', color: '#0D1B2A' }}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
