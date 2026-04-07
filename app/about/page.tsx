import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Liferefix 소개 | AI 개인회생 분석 플랫폼',
  description: 'Liferefix는 판결문 97건 기반 AI 채무 진단과 변호사 비딩 매칭 서비스를 제공하는 법률 테크 스타트업입니다.',
  alternates: { canonical: 'https://liferefix.com/about' },
}

export const dynamic = 'force-static'

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 0 60px' }}>
      <div style={{ background: 'linear-gradient(145deg,#6A3DE8,#4A1DB8)', padding: '36px 24px', color: '#fff' }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none' }}>← 홈으로</Link>
        <h1 style={{ fontSize: 26, fontWeight: 900, margin: '12px 0 8px' }}>Liferefix 소개</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0 }}>AI 기반 채무 해결 플랫폼</p>
      </div>

      <div style={{ padding: '32px 24px' }}>
        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>서비스 소개</h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: '#3A4F65', marginBottom: 16 }}>
          Liferefix(라이프리픽스)는 채무 문제를 겪고 있는 개인이 개인회생 절차를 보다 쉽고 합리적으로
          진행할 수 있도록 돕는 AI 기반 법률 테크 플랫폼입니다.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: '#3A4F65', marginBottom: 32 }}>
          실제 판결문 97건을 분석하여 개인별 탕감률·월변제금을 예측하고,
          검증된 파트너 변호사들이 경쟁 제안을 통해 합리적인 수임료로 수임할 수 있도록 연결합니다.
        </p>

        <div style={{ background: '#F5F3FF', borderRadius: 16, padding: '20px', marginBottom: 32 }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 12, color: '#0D1B2A' }}>법적 안내</h3>
          <p style={{ fontSize: 13, lineHeight: 1.75, color: '#5A6E85', margin: 0 }}>
            본 서비스는 정보 제공 목적이며 법률 서비스를 직접 제공하지 않습니다.
            AI 분석 결과는 참고용이며 실제 법원 결정과 다를 수 있습니다.
            채무자와 변호사는 Liferefix를 통해 연결되며, 수임 계약은 당사자 간에 체결됩니다.
          </p>
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>문의</h2>
        <p style={{ fontSize: 14, color: '#3A4F65' }}>이메일: admin@liferefix.com</p>
        <p style={{ fontSize: 14, color: '#3A4F65' }}>사업자 등록: 준비중</p>
      </div>
    </main>
  )
}
