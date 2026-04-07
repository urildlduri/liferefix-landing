import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI 개인회생 진단 방법 | Liferefix',
  description: '판결문 97건 데이터 기반 AI가 탕감률·월변제금을 계산하는 방법을 설명합니다. 사유별·나이대별 통계 공개.',
  alternates: { canonical: 'https://liferefix.com/analysis' },
}

export const dynamic = 'force-static'

const REASON_STATS = [
  { reason: '사업실패', rate: '71.5%', count: '15건' },
  { reason: '사기 피해', rate: '64.4%', count: '8건' },
  { reason: '생활비 과다', rate: '65.7%', count: '7건' },
  { reason: '병원비', rate: '66.0%', count: '7건' },
  { reason: '돌려막기', rate: '50.3%', count: '7건' },
  { reason: '생활비', rate: '59.4%', count: '5건' },
]

const AGE_STATS = [
  { age: '20대', rate: '57.1%' },
  { age: '30대', rate: '64.3%' },
  { age: '40대', rate: '68.1%' },
  { age: '50대', rate: '56.8%' },
]

export default function AnalysisPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 0 60px' }}>
      {/* 헤더 */}
      <div style={{ background: 'linear-gradient(145deg,#6A3DE8,#4A1DB8)', padding: '36px 24px', color: '#fff' }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none' }}>← 홈으로</Link>
        <h1 style={{ fontSize: 26, fontWeight: 900, margin: '12px 0 8px', lineHeight: 1.3 }}>
          AI 개인회생 진단 방법
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.7 }}>
          판결문 97건 실제 데이터 기반으로 탕감률을 예측합니다
        </p>
      </div>

      <div style={{ padding: '32px 24px' }}>
        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>분석 방법</h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: '#3A4F65', marginBottom: 16 }}>
          Liferefix AI는 서울회생법원, 수원지방법원, 대전지방법원 등 전국 12개 법원의
          실제 판결문 97건을 분석하여 개인별 탕감률을 예측합니다.
          채무 사유, 나이대, 월소득, 부양가족 수, 연체기간, 재산 현황을 종합적으로 반영합니다.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: '#3A4F65', marginBottom: 32 }}>
          2026년 최저생계비(1인 154만원, 2인 252만원, 3인 322만원, 4인 390만원) 기준을 적용하여
          변제기간 36개월 기준 월 변제금을 산출합니다. 단, 본 진단 결과는 참고용이며
          실제 법원 결정과 다를 수 있습니다.
        </p>

        {/* 사유별 통계 */}
        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 16 }}>채무 사유별 평균 탕감률</h2>
        <p style={{ fontSize: 13, color: '#5A6E85', marginBottom: 16 }}>
          판결문 5건 이상 집계 기준 (2026년 기준)
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          {REASON_STATS.map(r => (
            <div key={r.reason} style={{ background: '#F5F3FF', borderRadius: 12, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#0D1B2A' }}>{r.reason}</span>
                <span style={{ fontSize: 11, color: '#5A6E85', marginLeft: 8 }}>({r.count})</span>
              </div>
              <span style={{ fontSize: 18, fontWeight: 900, color: '#6A3DE8' }}>{r.rate}</span>
            </div>
          ))}
        </div>

        {/* 나이대별 통계 */}
        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 16 }}>나이대별 평균 탕감률</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 32 }}>
          {AGE_STATS.map(a => (
            <div key={a.age} style={{ background: '#fff', border: '1px solid #E2DAFF', borderRadius: 12, padding: '14px 10px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1B2A', marginBottom: 6 }}>{a.age}</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: '#6A3DE8' }}>{a.rate}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#FFF9EC', border: '1px solid #FFE082', borderRadius: 12, padding: '14px 16px', fontSize: 12, color: '#7A5500', lineHeight: 1.7 }}>
          ⚠️ 본 통계는 실제 판결문 데이터 기반이나, 개인 상황에 따라 결과가 크게 다를 수 있습니다.
          정확한 판단은 전문 변호사와의 상담이 필요합니다.
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a href="https://app.liferefix.com" style={{ display: 'inline-block', background: '#6A3DE8', color: '#fff', borderRadius: 14, padding: '14px 32px', fontSize: 15, fontWeight: 800, textDecoration: 'none' }}>
            내 탕감률 무료 진단하기 →
          </a>
        </div>
      </div>
    </main>
  )
}
