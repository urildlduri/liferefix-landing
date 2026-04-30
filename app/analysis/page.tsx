import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI 개인회생 진단 방법 | Liferefix',
  description: '실제 판례 통계 기반 AI가 채무 사유·나이대·소득을 종합 분석하여 탕감률과 월 변제금을 예측합니다. 2026년 최저생계비 기준 적용.',
  alternates: { canonical: 'https://liferefix.com/analysis' },
}

export const dynamic = 'force-static'

const REASON_STATS = [
  { reason: '사업실패', rate: '71.5%' },
  { reason: '사기 피해', rate: '64.4%' },
  { reason: '병원비', rate: '66.0%' },
  { reason: '생활비 과다', rate: '65.7%' },
  { reason: '돌려막기', rate: '50.3%' },
  { reason: '생활비', rate: '59.4%' },
]

const AGE_STATS = [
  { age: '20대', rate: '57.1%' },
  { age: '30대', rate: '64.3%' },
  { age: '40대', rate: '68.1%' },
  { age: '50대', rate: '56.8%' },
]

const FACTORS = [
  { icon: '💼', title: '채무 사유', desc: '사업실패·생활비·병원비 등 사유별 평균 탕감률을 반영합니다' },
  { icon: '👤', title: '나이대', desc: '나이대별 평균 탕감률 통계를 가중치로 적용합니다' },
  { icon: '💰', title: '월 소득', desc: '2026년 최저생계비 기준 가용소득을 계산합니다' },
  { icon: '👨‍👩‍👧', title: '부양가족', desc: '가구원 수에 따른 최저생계비를 차감하여 변제금 산출' },
  { icon: '⏱️', title: '연체기간', desc: '연체기간이 길수록 탕감 가능성이 높아지는 경향 반영' },
  { icon: '🏠', title: '재산 현황', desc: '재산이 채무 30% 이상이면 변제율 보정' },
]

export default function AnalysisPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 0 60px' }}>
      <div style={{ background: 'linear-gradient(145deg,#6A3DE8,#4A1DB8)', padding: '36px 24px', color: '#fff' }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none' }}>← 홈으로</Link>
        <h1 style={{ fontSize: 26, fontWeight: 900, margin: '12px 0 8px', lineHeight: 1.3 }}>
          AI 개인회생 진단 방법
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.7 }}>
          실제 판례 통계 기반으로 탕감률을 예측합니다
        </p>
      </div>

      <div style={{ padding: '32px 24px' }}>
        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>분석 방법</h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: '#3A4F65', marginBottom: 16 }}>
          Liferefix AI는 서울회생법원, 수원지방법원, 대전지방법원 등 전국 주요 법원의
          실제 판례 통계를 분석하여 개인별 탕감률을 예측합니다.
          채무 사유, 나이대, 월소득, 부양가족 수, 연체기간, 재산 현황을 종합적으로 반영합니다.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: '#3A4F65', marginBottom: 32 }}>
          <b>2026년 최저생계비</b>(1인 154만원, 2인 252만원, 3인 322만원, 4인 390만원, 5인 이상 450만원) 기준을 적용하여
          변제기간 36개월 (미성년 자녀 2명 이상 시 24개월) 기준 월 변제금을 산출합니다.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 16 }}>분석 요소</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          {FACTORS.map(f => (
            <div key={f.title} style={{ background: '#F5F3FF', borderRadius: 12, padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>{f.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#0D1B2A', marginBottom: 2 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: '#5A6E85', lineHeight: 1.65 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 16 }}>채무 사유별 평균 탕감률</h2>
        <p style={{ fontSize: 13, color: '#5A6E85', marginBottom: 16 }}>
          실제 판례 통계 기준 (2026년 갱신)
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          {REASON_STATS.map(r => (
            <div key={r.reason} style={{ background: '#F5F3FF', borderRadius: 12, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#0D1B2A' }}>{r.reason}</span>
              <span style={{ fontSize: 18, fontWeight: 900, color: '#6A3DE8' }}>{r.rate}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 16 }}>나이대별 평균 탕감률</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 32 }}>
          {AGE_STATS.map(a => (
            <div key={a.age} style={{ background: '#fff', border: '1px solid #E2DAFF', borderRadius: 12, padding: '14px 10px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1B2A', marginBottom: 6 }}>{a.age}</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: '#6A3DE8' }}>{a.rate}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#FFF9EC', border: '1px solid #FFE082', borderRadius: 12, padding: '14px 16px', fontSize: 12, color: '#7A5500', lineHeight: 1.7, marginBottom: 16 }}>
          ⚠️ <b>본 결과는 법률 자문이 아닙니다.</b> 본 통계는 실제 판례 데이터 기반의 참고 정보이며, 개인 상황에 따라 결과가 크게 다를 수 있습니다.
          AI 진단 결과는 변호사법 제109조에 따른 법률사무 취급과 무관하며, 정확한 판단은 전문 변호사와의 상담이 필요합니다.
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a href="https://app.liferefix.com?utm_source=landing&utm_medium=cta&utm_campaign=analysis" style={{ display: 'inline-block', background: '#6A3DE8', color: '#fff', borderRadius: 14, padding: '14px 32px', fontSize: 15, fontWeight: 800, textDecoration: 'none' }}>
            내 탕감률 무료 진단하기 →
          </a>
        </div>
      </div>
    </main>
  )
}
