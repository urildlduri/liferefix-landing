import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '개인회생 변호사 비딩 | Liferefix',
  description: '검증된 개인회생 전문 변호사들이 착수금·승인율·전략을 직접 제안합니다. 채무자가 직접 비교하고 선택하는 역경매 시스템.',
  alternates: { canonical: 'https://liferefix.com/lawyers' },
}

export const dynamic = 'force-static'

const BENEFITS = [
  { icon: '🏆', title: '검증된 변호사', desc: '관리자 심사를 통과한 파트너 변호사만 참여합니다. 등록번호·소속·경력을 확인할 수 있습니다.' },
  { icon: '💰', title: '경쟁 제안 시스템', desc: '여러 변호사가 착수금·할부·성공보수·승인율을 직접 제안합니다. 비교하고 유리한 조건을 선택하세요.' },
  { icon: '🔒', title: '연락처 보호', desc: '변호사 선택 전까지 이름과 전화번호는 마스킹 처리됩니다. 선택한 변호사에게만 공개됩니다.' },
  { icon: '📋', title: '이력서 공개', desc: '변호사의 학력·경력·처리 사례·자기소개를 미리 확인할 수 있습니다.' },
]

const PROCESS = [
  { step: '01', title: '사건 익명 등록', desc: '채무 유형, 금액, 지역 정보를 입력합니다. 이름과 연락처는 선택 사항입니다.' },
  { step: '02', title: '변호사 제안 수신', desc: '파트너 변호사들이 착수금·승인율을 직접 제안합니다. 평균 3일 이내.' },
  { step: '03', title: '이력서 확인', desc: '제안한 변호사의 학력·경력·자기소개를 확인합니다.' },
  { step: '04', title: '조건 비교 후 선택', desc: '가장 유리한 조건의 변호사를 선택합니다. 이후 연락처가 공개됩니다.' },
]

export default function LawyersPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 0 60px' }}>
      <div style={{ background: 'linear-gradient(145deg,#6A3DE8,#4A1DB8)', padding: '36px 24px', color: '#fff' }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none' }}>← 홈으로</Link>
        <h1 style={{ fontSize: 26, fontWeight: 900, margin: '12px 0 8px', lineHeight: 1.3 }}>
          개인회생 변호사 비딩
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.7 }}>
          채무자가 직접 비교하고 선택하는 역경매 시스템
        </p>
      </div>

      <div style={{ padding: '32px 24px' }}>
        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 8 }}>왜 비딩 시스템인가요?</h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: '#3A4F65', marginBottom: 32 }}>
          기존에는 변호사를 먼저 찾아가서 상담을 받고 수임료를 결정했습니다.
          Liferefix는 반대로, 채무자의 사건 정보를 바탕으로 변호사들이 경쟁 제안을 합니다.
          채무자는 여러 변호사의 조건을 비교한 뒤 직접 선택할 수 있습니다.
          이를 통해 평균적으로 30~50% 낮은 착수금으로 개인회생을 진행할 수 있습니다.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 16 }}>서비스 특징</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
          {BENEFITS.map(b => (
            <div key={b.title} style={{ background: '#F5F3FF', borderRadius: 16, padding: '16px 18px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{b.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#0D1B2A', marginBottom: 4 }}>{b.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.65, color: '#5A6E85' }}>{b.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 16 }}>진행 과정</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {PROCESS.map((p, i) => (
            <div key={p.step} style={{ display: 'flex', gap: 16, paddingBottom: i < PROCESS.length - 1 ? 24 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#6A3DE8', color: '#fff', fontSize: 12, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.step}</div>
                {i < PROCESS.length - 1 && <div style={{ width: 2, flex: 1, background: '#E2DAFF', margin: '4px 0' }} />}
              </div>
              <div style={{ paddingTop: 6, paddingBottom: i < PROCESS.length - 1 ? 16 : 0 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#0D1B2A', marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.65, color: '#5A6E85' }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a href="https://app.liferefix.com" style={{ display: 'inline-block', background: '#6A3DE8', color: '#fff', borderRadius: 14, padding: '14px 32px', fontSize: 15, fontWeight: 800, textDecoration: 'none' }}>
            변호사 제안 받아보기 →
          </a>
        </div>
      </div>
    </main>
  )
}
