import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Liferefix 소개 | AI 개인회생 분석 플랫폼',
  description: 'Liferefix는 실제 판례 기반 AI 채무 진단과 변호사 견적 비교 플랫폼을 제공하는 법률 테크 서비스입니다.',
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
          실제 판례 통계를 분석하여 개인별 탕감률·월변제금을 예측하고,
          검증된 파트너 변호사들이 독립적으로 견적을 제출하면 채무자가 직접 비교·선택할 수 있도록 연결합니다.
          이를 통해 정보 비대칭 없이 합리적인 비용으로 개인회생을 진행할 수 있습니다.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>핵심 가치</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          <div style={{ background: '#F5F3FF', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#0D1B2A', marginBottom: 4 }}>📊 데이터 기반 진단</div>
            <div style={{ fontSize: 13, color: '#5A6E85', lineHeight: 1.65 }}>실제 판례 통계를 학습한 AI 모델로 객관적 진단 결과를 제공합니다.</div>
          </div>
          <div style={{ background: '#F5F3FF', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#0D1B2A', marginBottom: 4 }}>🔒 정보 보호</div>
            <div style={{ fontSize: 13, color: '#5A6E85', lineHeight: 1.65 }}>채무자의 연락처는 본인이 변호사를 선택한 후에만 공개됩니다.</div>
          </div>
          <div style={{ background: '#F5F3FF', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#0D1B2A', marginBottom: 4 }}>⚖️ 채무자 선택권</div>
            <div style={{ fontSize: 13, color: '#5A6E85', lineHeight: 1.65 }}>플랫폼은 특정 변호사를 추천하지 않으며, 모든 선택은 채무자가 직접 합니다.</div>
          </div>
        </div>

        <div style={{ background: '#F0FDF9', borderRadius: 16, padding: '20px', marginBottom: 32, border: '1px solid #B2DFDB' }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 12, color: '#005945' }}>⚖️ 법적 안내</h3>
          <p style={{ fontSize: 13, lineHeight: 1.75, color: '#2D6A5A', margin: 0 }}>
            본 서비스는 정보 제공 목적이며 법률 자문이나 변호사 알선 서비스를 제공하지 않습니다.
            AI 분석 결과는 참고용이며 법적 효력이 없으며, 실제 법원 결정과 다를 수 있습니다.
            채무자와 변호사는 Liferefix를 통해 연결되며, 수임 계약은 당사자 간에 직접 체결됩니다.
            본 플랫폼의 변호사 구독료는 정액 SaaS 이용료이며 사건 소개비와 무관하므로
            <b> 변호사법 제34조의 알선 수수료 규정과 무관합니다.</b>
          </p>
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>문의</h2>
        <p style={{ fontSize: 14, color: '#3A4F65', marginBottom: 4 }}>
          이메일: <a href="mailto:contact@liferefix.com" style={{ color: '#6A3DE8', fontWeight: 600 }}>contact@liferefix.com</a>
        </p>
        <p style={{ fontSize: 14, color: '#3A4F65' }}>사업자 등록: 준비중</p>
      </div>
    </main>
  )
}
