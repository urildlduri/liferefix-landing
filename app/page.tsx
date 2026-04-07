import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Liferefix | AI 개인회생 분석 및 변호사 추천',
  description: 'AI 기반 개인회생 가능성 분석, 탕감률 예측, 변호사 매칭 서비스. 판결문 97건 데이터 기반 무료 진단.',
  alternates: { canonical: 'https://liferefix.com' },
}

// SSG - 빌드 시 정적 HTML 생성
export const dynamic = 'force-static'

const STATS = [
  { value: '72%', label: '평균 채무 감면율' },
  { value: '97건', label: '판결문 DB' },
  { value: '2분', label: 'AI 진단 시간' },
  { value: '4.8★', label: '고객 만족도' },
]

const STEPS = [
  { num: '1', title: 'AI 채무 진단', desc: '채무액·소득·부양가족 정보를 입력하면 판결문 97건 데이터 기반으로 탕감률과 월 변제금을 분석합니다.' },
  { num: '2', title: '변호사 비딩 수신', desc: '검증된 파트너 변호사들이 착수금·승인율·전략을 직접 제안합니다. 평균 3일 이내 제안 도착.' },
  { num: '3', title: '조건 비교 후 선택', desc: '여러 변호사의 조건을 한눈에 비교하고 본인이 직접 선택합니다. 연락처는 선택 후에만 공개됩니다.' },
]

const FAQS = [
  { q: '개인회생 신청 자격이 되나요?', a: '소득이 있거나 소득 발생 가능성이 있는 개인이라면 신청 가능합니다. AI 진단으로 2분 안에 가능성을 확인하세요.' },
  { q: '탕감률은 얼마나 되나요?', a: '판결문 97건 분석 결과 평균 72% 탕감이 인정됐습니다. 사유·나이·부양가족에 따라 다릅니다.' },
  { q: '변호사 선택은 제가 하나요?', a: '네, 채무자가 직접 변호사를 선택합니다. Liferefix는 연결만 하며 특정 변호사를 추천하지 않습니다.' },
  { q: '비용이 드나요?', a: 'AI 진단과 변호사 제안 수신은 완전 무료입니다. 변호사 선택 후 수임 계약은 당사자 간에 진행됩니다.' },
]

export default function HomePage() {
  return (
    <main>
      {/* 히어로 */}
      <section style={styles.hero}>
        <div style={styles.heroBadge}>🤖 AI 채무 분석 플랫폼</div>
        <h1 style={styles.heroTitle}>
          채무 해결,<br />이제 데이터로<br />정확하게
        </h1>
        <p style={styles.heroSub}>
          개인회생 가능성·변제금·탕감률을 AI가 무료 진단하고,<br />
          검증된 변호사의 경쟁 제안을 받아보세요.
        </p>
        <a href="https://app.liferefix.com" style={styles.ctaBtn}>
          ⚡ 무료 채무 진단 시작하기
        </a>
        <div style={styles.statsRow}>
          {STATS.map(s => (
            <div key={s.label} style={styles.statItem}>
              <span style={styles.statVal}>{s.value}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SEO 텍스트 본문 */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>개인회생이란?</h2>
        <p style={styles.bodyText}>
          개인회생은 소득이 있는 개인이 법원의 감독 아래 일부 채무를 변제하고 나머지를 면책받는 법적 절차입니다.
          신용대출, 카드채무, 담보대출 등 대부분의 채무가 대상이며, 판결문 실사례 기준 평균 72%의 채무가 탕감됩니다.
          변제 기간은 통상 36개월(3년)이며, 2026년 최저생계비 기준이 적용됩니다.
        </p>
        <p style={styles.bodyText}>
          Liferefix는 실제 판결문 97건을 분석하여 개인별 탕감률과 월 변제금을 예측합니다.
          사유별(사업실패·생활비·병원비 등), 나이대별, 법원별 통계를 반영한 AI 모델로
          보다 정확한 진단이 가능합니다.
        </p>
      </section>

      {/* 3단계 */}
      <section style={{ ...styles.section, background: '#fff' }}>
        <h2 style={styles.sectionTitle}>3단계로 끝나는 채무 해결</h2>
        <div style={styles.stepsGrid}>
          {STEPS.map(step => (
            <div key={step.num} style={styles.stepCard}>
              <div style={styles.stepNum}>{step.num}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 링크 섹션 */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>더 알아보기</h2>
        <div style={styles.linkGrid}>
          <Link href="/analysis" style={styles.linkCard}>
            <span style={styles.linkIcon}>📊</span>
            <span style={styles.linkTitle}>AI 진단 방법</span>
            <span style={styles.linkSub}>탕감률 계산 원리</span>
          </Link>
          <Link href="/lawyers" style={styles.linkCard}>
            <span style={styles.linkIcon}>⚖️</span>
            <span style={styles.linkTitle}>변호사 비딩</span>
            <span style={styles.linkSub}>변호사 선택 방법</span>
          </Link>
          <Link href="/about" style={styles.linkCard}>
            <span style={styles.linkIcon}>🏢</span>
            <span style={styles.linkTitle}>서비스 소개</span>
            <span style={styles.linkSub}>Liferefix란?</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...styles.section, background: '#fff' }}>
        <h2 style={styles.sectionTitle}>자주 묻는 질문</h2>
        {FAQS.map(faq => (
          <div key={faq.q} style={styles.faqItem}>
            <h3 style={styles.faqQ}>Q. {faq.q}</h3>
            <p style={styles.faqA}>{faq.a}</p>
          </div>
        ))}
      </section>

      {/* 하단 CTA */}
      <section style={styles.bottomCta}>
        <h2 style={styles.bottomCtaTitle}>지금 바로 무료 진단을 받아보세요</h2>
        <p style={styles.bottomCtaSub}>2분이면 충분합니다. 판결문 97건 기반 AI 분석.</p>
        <a href="https://app.liferefix.com" style={styles.ctaBtn}>
          무료 진단 시작하기 →
        </a>
      </section>

      {/* 법적 고지 */}
      <footer style={styles.footer}>
        <p>© 2026 Liferefix. All rights reserved. Beta v1.4</p>
        <p style={{ marginTop: 6 }}>
          본 서비스는 정보 제공 목적이며 법률 서비스가 아닙니다. AI 분석 결과는 참고용이며 법적 효력이 없습니다.
        </p>
        <p style={{ marginTop: 6 }}>문의: admin@liferefix.com</p>
      </footer>
    </main>
  )
}

const P = '#6A3DE8'
const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: 'linear-gradient(145deg,#6A3DE8,#4A1DB8)',
    padding: '48px 24px 40px',
    textAlign: 'center',
    color: '#fff',
  },
  heroBadge: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    padding: '5px 14px',
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 900,
    lineHeight: 1.25,
    margin: '0 0 14px',
  },
  heroSub: {
    fontSize: 14,
    lineHeight: 1.7,
    color: 'rgba(255,255,255,0.8)',
    margin: '0 0 24px',
  },
  ctaBtn: {
    display: 'inline-block',
    background: '#fff',
    color: P,
    borderRadius: 14,
    padding: '14px 28px',
    fontSize: 15,
    fontWeight: 800,
    textDecoration: 'none',
    boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 0,
    marginTop: 28,
    borderTop: '1px solid rgba(255,255,255,0.15)',
    paddingTop: 20,
  },
  statItem: {
    flex: 1,
    textAlign: 'center',
    borderRight: '1px solid rgba(255,255,255,0.15)',
    padding: '0 8px',
  },
  statVal: {
    display: 'block',
    fontSize: 20,
    fontWeight: 900,
    color: '#fff',
  },
  statLabel: {
    display: 'block',
    fontSize: 10,
    color: 'rgba(255,255,255,0.65)',
    marginTop: 3,
  },
  section: {
    padding: '40px 24px',
    maxWidth: 720,
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 900,
    marginBottom: 16,
    color: '#0D1B2A',
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 1.85,
    color: '#3A4F65',
    marginBottom: 16,
  },
  stepsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  stepCard: {
    background: '#F5F3FF',
    borderRadius: 16,
    padding: '18px 20px',
    borderLeft: `4px solid ${P}`,
  },
  stepNum: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    background: P,
    color: '#fff',
    fontSize: 13,
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: 800,
    marginBottom: 6,
    color: '#0D1B2A',
  },
  stepDesc: {
    fontSize: 13,
    lineHeight: 1.7,
    color: '#5A6E85',
    margin: 0,
  },
  linkGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 12,
  },
  linkCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 12px',
    background: '#fff',
    borderRadius: 16,
    border: '1px solid #E2DAFF',
    textDecoration: 'none',
    gap: 6,
  },
  linkIcon: { fontSize: 24 },
  linkTitle: { fontSize: 13, fontWeight: 800, color: '#0D1B2A' },
  linkSub: { fontSize: 11, color: '#5A6E85' },
  faqItem: {
    borderBottom: '1px solid #F0ECFF',
    paddingBottom: 16,
    marginBottom: 16,
  },
  faqQ: { fontSize: 14, fontWeight: 700, color: '#0D1B2A', marginBottom: 6 },
  faqA: { fontSize: 13, lineHeight: 1.7, color: '#5A6E85', margin: 0 },
  bottomCta: {
    background: 'linear-gradient(135deg,#6A3DE8,#4A1DB8)',
    padding: '48px 24px',
    textAlign: 'center',
    color: '#fff',
  },
  bottomCtaTitle: { fontSize: 20, fontWeight: 900, marginBottom: 8 },
  bottomCtaSub: { fontSize: 13, color: 'rgba(255,255,255,0.75)', marginBottom: 24 },
  footer: {
    background: '#0D1B2A',
    color: 'rgba(255,255,255,0.45)',
    fontSize: 12,
    textAlign: 'center',
    padding: '24px 20px',
    lineHeight: 1.7,
  },
}
