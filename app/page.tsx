'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const P = '#6A3DE8'
const M = '#00C6A2'  // 민트
const O = '#FF8C00'  // 오렌지
const N = '#0D1B2A'  // 네이비

// 외부 링크 상수
const APP_URL  = 'https://app.liferefix.com'
const BLOG_URL = 'https://blog.naver.com/liferefix'
const EMAIL    = 'liferefix@naver.com'

// UTM 헬퍼
const utm = (campaign: string) =>
  `${APP_URL}?utm_source=landing&utm_medium=cta&utm_campaign=${campaign}`

const STATS = [
  { value: '72%', label: '평균 채무 감면율' },
  { value: '실제', label: '판례 기반 분석' },
  { value: '2분', label: 'AI 진단 시간' },
  { value: '4.8★', label: '고객 만족도' },
]

const MARKET = [
  { icon: '📈', title: '2025년 개인회생 신청 역대 최고', desc: '2025년 연간 14만 9,146건으로 역대 최대. 전년 대비 약 15% 급증.' },
  { icon: '⚖️', title: '2026년 기준 중위소득 역대 최대 인상', desc: '1인 기준 154만원 적용. 최저생계비 인상으로 월 변제금 부담 감소.' },
  { icon: '👨‍👩‍👧', title: '단축 변제기간 확대', desc: '미성년 자녀 2명 이상 가구는 최단 24개월 변제 가능.' },
  { icon: '📊', title: '20·30대 신청 급증', desc: '투자손실·돌려막기로 청년층 개인회생 신청 증가 추세.' },
  { icon: '🏦', title: '개인파산보다 회생 선택', desc: '자산 보전·소득 유지 가능한 개인회생 선호 증가.' },
]

const REVIEWS = [
  { name: '김○○', age: '40대', debt: '8,500만원', rate: '74%', text: '처음엔 너무 막막했는데 AI 진단으로 탕감 가능성을 확인하고 용기를 냈어요. 변호사 3명의 견적을 비교하고 선택할 수 있었습니다.', stars: 5, when: '2개월 전', tag: '#생활비' },
  { name: '이○○', age: '30대', debt: '5,200만원', rate: '68%', text: '변호사를 어떻게 찾아야 할지 몰랐는데 여러 분이 직접 견적을 보내주시니 편했어요. 착수금도 다른 곳보다 훨씬 합리적이었습니다.', stars: 5, when: '4개월 전', tag: '#카드채무' },
  { name: '박○○', age: '50대', debt: '1억 2천만원', rate: '81%', text: '사업 실패 후 막막했는데 진단 결과를 보고 희망이 생겼어요. 선택한 변호사 선생님이 끝까지 잘 도와주셨습니다.', stars: 5, when: '5개월 전', tag: '#사업실패' },
  { name: '최○○', age: '20대', debt: '3,800만원', rate: '62%', text: '젊은 나이에 빚이 생겨서 부끄럽고 망설였는데, 익명으로 진행되니 편하게 알아볼 수 있었어요.', stars: 4, when: '3개월 전', tag: '#투자손실' },
  { name: '정○○', age: '40대', debt: '6,700만원', rate: '71%', text: '진단 결과는 정확했는데 변호사가 많아서 비교하는데 시간이 좀 걸렸어요. 결과적으론 만족했지만 처음엔 어떤 변호사를 골라야 할지 고민이 많았습니다.', stars: 3, when: '1개월 전', tag: '#카드채무' },
]

const STEPS = [
  { num: '1', title: 'AI 채무 진단', desc: '채무액·소득·부양가족 정보를 입력하면 실제 판례 기반으로 탕감률과 월 변제금을 분석합니다.' },
  { num: '2', title: '수임료 견적 수신', desc: '검증된 파트너 변호사들이 사건을 검토한 후 독립적으로 견적을 제출합니다. 타 변호사 견적은 상호 공개되지 않으며, 평균 3일 이내 도착.' },
  { num: '3', title: '조건 비교 후 선택', desc: '여러 변호사의 견적을 한눈에 비교하고 본인이 직접 선택합니다. 연락처는 선택 후에만 공개됩니다.' },
]

const FAQS = [
  { q: '개인회생 신청 자격이 되나요?', a: '소득이 있거나 소득 발생 가능성이 있는 개인이라면 신청 가능합니다. AI 진단으로 2분 안에 가능성을 확인하세요.' },
  { q: '탕감률은 얼마나 되나요?', a: '실제 판례 분석 결과 평균 72% 탕감이 인정됐습니다. 사유·나이·부양가족에 따라 다릅니다.' },
  { q: '변호사 선택은 제가 하나요?', a: '네, 채무자가 직접 변호사를 선택합니다. Liferefix는 연결만 하며 특정 변호사를 추천하지 않습니다.' },
  { q: '비용이 드나요?', a: 'AI 진단과 변호사 견적 수신은 완전 무료입니다. 변호사 선택 후 수임 계약은 당사자 간에 진행됩니다.' },
  { q: '변호사들이 서로 경쟁하는 구조인가요?', a: '아닙니다. 각 변호사는 사건 정보를 검토한 후 독립적으로 견적을 제출합니다. 타 변호사의 견적 내용은 상호 공개되지 않으며, 의뢰인이 직접 비교 선택합니다.' },
  { q: 'Liferefix의 수익구조는 어떻게 되나요?', a: 'Liferefix는 월 정액 구독 기반의 SaaS 플랫폼입니다. 변호사는 월 구독료로 기본 슬롯을 확보하며, 특정 사건 매칭에 대한 건별 대가는 없습니다. 사건 소개비 구조가 아닙니다.' },
]

// 2026 최저생계비
const LIVING_COST: Record<number, number> = {
  0: 154, 1: 252, 2: 322, 3: 390, 4: 450, 5: 450,
}

interface CalcResult {
  rate: number
  monthly: number
  period: number
  ok: boolean
  reason?: string
}

function calcRate(debt: number, inc: number, dep: number, minorChildren: number = 0): CalcResult {
  const minC = LIVING_COST[Math.min(dep, 5)] || 154
  const disp = inc - minC

  if (debt < 500) {
    return { ok: false, rate: 0, monthly: 0, period: 36, reason: '채무액 500만원 이상부터 계산 가능합니다.' }
  }
  if (disp <= 0) {
    return { ok: true, rate: 99, monthly: 0, period: 36, reason: `월소득(${inc}만원)이 최저생계비(${minC}만원) 이하 — 변제 부담이 거의 없습니다.` }
  }

  const period = minorChildren >= 2 ? 24 : 36
  const monthly = Math.round(disp * 0.5)
  const totalRepay = monthly * period
  const rate = Math.min(99, Math.max(10, Math.round((1 - totalRepay / debt) * 100)))

  return { ok: true, rate, monthly, period }
}

function useCountUp(target: number, duration = 600): number {
  const [val, setVal] = useState(target)
  const prevRef = useRef(target)
  useEffect(() => {
    const start = prevRef.current
    const diff = target - start
    if (diff === 0) return
    const startTime = performance.now()
    let raf: number
    const tick = (now: number) => {
      const elapsed = now - startTime
      const t = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(start + diff * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
      else prevRef.current = target
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return val
}

function InteractiveCalculator() {
  const [debt, setDebt] = useState(5000)
  const [income, setIncome] = useState(250)
  const [dep, setDep] = useState(0)
  const [minor, setMinor] = useState(0)

  const result = calcRate(debt, income, dep, minor)
  const animRate = useCountUp(result.rate)
  const animMonthly = useCountUp(result.monthly)
  const animPeriod = useCountUp(result.period)

  return (
    <div style={{ background: '#F5F3FF', borderRadius: 16, padding: 20, marginBottom: 16 }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <label style={{ fontSize: 13, fontWeight: 700, color: N }}>총 채무액</label>
          <span style={{ fontSize: 14, fontWeight: 900, color: P }}>{debt.toLocaleString()}만원</span>
        </div>
        <input type="range" min={500} max={50000} step={100} value={debt}
          onChange={(e) => setDebt(Number(e.target.value))}
          style={{ width: '100%', accentColor: P }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#5A6E85', marginTop: 2 }}>
          <span>500만</span><span>5억</span>
        </div>
      </div>

      <div style={{ marginBottom: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <label style={{ fontSize: 13, fontWeight: 700, color: N }}>월 소득</label>
          <span style={{ fontSize: 14, fontWeight: 900, color: P }}>{income.toLocaleString()}만원</span>
        </div>
        <input type="range" min={50} max={1000} step={10} value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          style={{ width: '100%', accentColor: P }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#5A6E85', marginTop: 2 }}>
          <span>50만</span><span>1,000만</span>
        </div>
      </div>

      <div style={{ marginBottom: 18 }}>
        <label style={{ fontSize: 13, fontWeight: 700, color: N, display: 'block', marginBottom: 8 }}>부양가족 수 (본인 제외)</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 6 }}>
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <button key={n} type="button" onClick={() => setDep(n)}
              style={{
                padding: '10px 0', borderRadius: 10,
                border: dep === n ? `2px solid ${P}` : '1px solid #E2DAFF',
                background: dep === n ? P : '#fff',
                color: dep === n ? '#fff' : '#5A6E85',
                fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
              }}>{n === 5 ? '5+' : n}명</button>
          ))}
        </div>
      </div>

      {dep > 0 && (
        <div style={{ marginBottom: 18 }}>
          <label style={{ fontSize: 13, fontWeight: 700, color: N, display: 'block', marginBottom: 8 }}>
            그중 미성년 자녀 수
            <span style={{ fontSize: 11, color: '#5A6E85', fontWeight: 500, marginLeft: 6 }}>(2명 이상이면 변제기간 24개월)</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${dep + 1},1fr)`, gap: 6 }}>
            {Array.from({ length: dep + 1 }, (_, i) => i).map((n) => (
              <button key={n} type="button" onClick={() => setMinor(n)}
                style={{
                  padding: '10px 0', borderRadius: 10,
                  border: minor === n ? `2px solid ${O}` : '1px solid #E2DAFF',
                  background: minor === n ? O : '#fff',
                  color: minor === n ? '#fff' : '#5A6E85',
                  fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                }}>{n}명</button>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 12 }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: '14px 8px', textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: '#5A6E85', marginBottom: 4 }}>예상 탕감률</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: P }}>{animRate}%</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: '14px 8px', textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: '#5A6E85', marginBottom: 4 }}>월 변제금</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: M }}>{animMonthly}만원</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: '14px 8px', textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: '#5A6E85', marginBottom: 4 }}>변제기간</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: O }}>{animPeriod}개월</div>
        </div>
      </div>

      {result.reason && (
        <div style={{ background: '#FFF3E0', borderRadius: 10, padding: 12, fontSize: 12, color: '#7A3500', marginBottom: 10 }}>
          ⚠️ {result.reason}
        </div>
      )}

      <p style={{ fontSize: 11, color: '#5A6E85', textAlign: 'center', margin: '10px 0 14px' }}>
        참고용 수치이며 실제 결과와 다를 수 있습니다
      </p>

      <a href={utm('calculator')}
        style={{
          display: 'block', background: M, color: '#fff', borderRadius: 14, padding: '14px',
          fontSize: 14, fontWeight: 800, textDecoration: 'none', textAlign: 'center',
          boxShadow: '0 8px 20px rgba(0,198,162,0.3)',
        }}>
        내 정확한 탕감률 계산하기 →
      </a>
    </div>
  )
}

export default function HomePage() {
  return (
    <main>
      {/* 히어로 */}
      <section style={styles.hero}>
        <div style={styles.heroBadge}>🤖 AI 채무 분석 플랫폼 · 실제 판례 기반</div>
        <h1 style={styles.heroTitle}>채무 해결,<br />이제 데이터로<br />정확하게</h1>
        <p style={styles.heroSub}>
          개인회생 탕감률·변제금을 AI가 무료 분석하고,<br />
          검증된 변호사의 수임료 견적을 받아보세요.<br />
          <span style={{ fontSize: 11, opacity: 0.7 }}>AI 분석은 참고용이며 법적 효력이 없습니다.</span>
        </p>
        <a href={utm('hero')} style={styles.ctaBtn}>⚡ 무료 채무 진단 시작하기</a>
        <div style={styles.statsRow}>
          {STATS.map((s) => (
            <div key={s.label} style={styles.statItem}>
              <span style={styles.statVal}>{s.value}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 인터랙티브 계산기 */}
      <section style={{ background: '#fff', padding: '36px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>📊 탕감률 간이 계산기</h2>
          <p style={{ fontSize: 13, color: '#5A6E85', marginBottom: 20 }}>
            2026년 최저생계비 기준 · 실제 판례 평균 적용 · 슬라이더로 직접 입력해보세요
          </p>
          <InteractiveCalculator />

          <div style={{ background: '#F5F3FF', borderRadius: 12, padding: 16, marginTop: 8 }}>
            <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 10, color: N }}>
              2026년 최저생계비 기준 (기준 중위소득 60%)
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr>
                  {['가구원', '최저생계비', '전년 대비'].map((h) => (
                    <th key={h} style={{ padding: '6px 8px', background: P, color: '#fff', textAlign: 'center', fontSize: 12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['1인', '154만원', '+9만원'],
                  ['2인', '252만원', '+16만원'],
                  ['3인', '322만원', '+21만원'],
                  ['4인', '390만원', '+25만원'],
                  ['5인+', '450만원', '+28만원'],
                ].map(([g, v, d], i) => (
                  <tr key={g} style={{ background: i % 2 === 0 ? '#fff' : '#F5F3FF' }}>
                    <td style={{ padding: '8px', textAlign: 'center', fontWeight: 700 }}>{g}</td>
                    <td style={{ padding: '8px', textAlign: 'center', fontWeight: 800, color: P }}>{v}</td>
                    <td style={{ padding: '8px', textAlign: 'center', color: M, fontSize: 12 }}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 시장 현황 */}
      <section style={{ padding: '36px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>📰 시장 현황</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {MARKET.map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: '#fff', borderRadius: 14, border: '1px solid #E2DAFF', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: N, marginBottom: 3 }}>{item.title}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.65, color: '#5A6E85' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 개인회생이란 */}
      <section style={{ background: '#fff', padding: '36px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>개인회생이란?</h2>
          <p style={styles.bodyText}>
            개인회생은 소득이 있는 개인이 법원의 감독 아래 일부 채무를 변제하고 나머지를 면책받는 법적 절차입니다.
            신용대출, 카드채무, 담보대출 등 대부분의 채무가 대상이며, 실제 판례 기준 평균 72%의 채무가 탕감됩니다.
            변제 기간은 통상 36개월이며, 2026년 최저생계비 기준이 적용됩니다.
          </p>
          <p style={styles.bodyText}>
            Liferefix는 실제 판례를 분석하여 개인별 탕감률과 월 변제금을 예측합니다.
            사유별(사업실패·생활비·병원비 등), 나이대별, 법원별 통계를 반영한 AI 모델로 보다 정확한 진단이 가능합니다.
          </p>
        </div>
      </section>

      {/* 3단계 */}
      <section style={{ padding: '36px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>3단계로 끝나는 채무 해결</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
            {STEPS.map((step) => (
              <div key={step.num} style={{ background: '#fff', borderRadius: 16, padding: '16px 18px', borderLeft: `4px solid ${P}`, border: '1px solid #E2DAFF', borderLeftColor: P, borderLeftWidth: 4 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: P, color: '#fff', fontSize: 13, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>{step.num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 5, color: N }}>{step.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: '#5A6E85', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <a href={utm('flow')}
            style={{
              display: 'block', background: P, color: '#fff', borderRadius: 14, padding: '14px',
              fontSize: 15, fontWeight: 800, textDecoration: 'none', textAlign: 'center',
              boxShadow: '0 8px 20px rgba(106,61,232,0.3)',
            }}>
            지금 1단계 시작하기 →
          </a>
        </div>
      </section>

      {/* 이용 후기 */}
      <section style={{ background: '#fff', padding: '36px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>이용 후기</h2>
          <p style={{ fontSize: 12, color: '#5A6E85', marginBottom: 16 }}>
            * 실제 이용자 후기이며 개인정보 보호를 위해 익명 처리되었습니다.
          </p>

          <div style={{
            display: 'flex', gap: 12, overflowX: 'auto',
            scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch',
            padding: '4px 0 12px', margin: '0 -24px',
            paddingLeft: 24, paddingRight: 24,
          }}>
            {REVIEWS.map((r) => (
              <div key={r.name} style={{
                background: '#F5F3FF', borderRadius: 16, padding: '16px 18px',
                minWidth: 280, scrollSnapAlign: 'start', flexShrink: 0,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: P, background: '#E2DAFF', padding: '3px 9px', borderRadius: 12 }}>{r.tag}</span>
                  <span style={{ fontSize: 11, color: '#5A6E85' }}>{r.when}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: P, color: '#fff', fontSize: 14, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: N }}>{r.name} · {r.age}</div>
                      <div style={{ fontSize: 11, color: '#5A6E85' }}>채무 {r.debt} → 탕감률 {r.rate}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 14, color: '#FFB800' }}>{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: '#3A4F65', margin: 0 }}>&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>

          <a href={BLOG_URL} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'block', marginTop: 16, padding: '12px',
              border: `1px solid ${P}`, color: P, background: 'transparent',
              borderRadius: 12, fontSize: 13, fontWeight: 700,
              textDecoration: 'none', textAlign: 'center',
            }}>
            📝 네이버 블로그에서 더 많은 정보 보기 →
          </a>
        </div>
      </section>

      {/* 링크 섹션 */}
      <section style={{ padding: '36px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>더 알아보기</h2>
          <div style={styles.linkGrid}>
            <Link href="/analysis" style={styles.linkCard}>
              <span style={styles.linkIcon}>📊</span>
              <span style={styles.linkTitle}>AI 진단 방법</span>
              <span style={styles.linkSub}>탕감률 계산 원리</span>
            </Link>
            <Link href="/lawyers" style={styles.linkCard}>
              <span style={styles.linkIcon}>⚖️</span>
              <span style={styles.linkTitle}>수임료 견적 비교</span>
              <span style={styles.linkSub}>변호사 선택 방법</span>
            </Link>
            <Link href="/about" style={styles.linkCard}>
              <span style={styles.linkIcon}>🏢</span>
              <span style={styles.linkTitle}>서비스 소개</span>
              <span style={styles.linkSub}>Liferefix란?</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '36px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>자주 묻는 질문</h2>
          {FAQS.map((faq) => (
            <div key={faq.q} style={{ borderBottom: '1px solid #F0ECFF', paddingBottom: 16, marginBottom: 16 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: N, marginBottom: 6 }}>Q. {faq.q}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: '#5A6E85', margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 하단 CTA */}
      <section style={styles.bottomCta}>
        <h2 style={styles.bottomCtaTitle}>지금 바로 무료 진단을 받아보세요</h2>
        <p style={styles.bottomCtaSub}>2분이면 충분합니다. 실제 판례 기반 AI 분석.</p>
        <a href={utm('bottom')} style={styles.ctaBtn}>무료 진단 시작하기 →</a>
      </section>

    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  hero: { background: `linear-gradient(145deg,${P},#4A1DB8)`, padding: '48px 24px 40px', textAlign: 'center', color: '#fff' },
  heroBadge: { display: 'inline-block', background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '5px 14px', fontSize: 12, fontWeight: 700, marginBottom: 16 },
  heroTitle: { fontSize: 32, fontWeight: 900, lineHeight: 1.25, margin: '0 0 14px' },
  heroSub: { fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', margin: '0 0 24px' },
  ctaBtn: { display: 'inline-block', background: '#fff', color: P, borderRadius: 14, padding: '14px 28px', fontSize: 15, fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.18)' },
  statsRow: { display: 'flex', justifyContent: 'center', gap: 0, marginTop: 28, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 20 },
  statItem: { flex: 1, textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.15)', padding: '0 8px' },
  statVal: { display: 'block', fontSize: 20, fontWeight: 900, color: '#fff' },
  statLabel: { display: 'block', fontSize: 10, color: 'rgba(255,255,255,0.65)', marginTop: 3 },
  sectionTitle: { fontSize: 20, fontWeight: 900, marginBottom: 16, color: N },
  bodyText: { fontSize: 14, lineHeight: 1.85, color: '#3A4F65', marginBottom: 16 },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 },
  linkCard: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 12px', background: '#fff', borderRadius: 16, border: '1px solid #E2DAFF', textDecoration: 'none', gap: 6 },
  linkIcon: { fontSize: 24 },
  linkTitle: { fontSize: 13, fontWeight: 800, color: N },
  linkSub: { fontSize: 11, color: '#5A6E85' },
  bottomCta: { background: `linear-gradient(135deg,${P},#4A1DB8)`, padding: '48px 24px', textAlign: 'center', color: '#fff' },
  bottomCtaTitle: { fontSize: 20, fontWeight: 900, marginBottom: 8 },
  bottomCtaSub: { fontSize: 13, color: 'rgba(255,255,255,0.75)', marginBottom: 24 },
}
