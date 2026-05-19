import Link from 'next/link'

const N = '#0D1B2A'
const P = '#6A3DE8'
const EMAIL    = 'liferefix@naver.com'
const BLOG_URL = 'https://blog.naver.com/liferefix'

export default function Footer() {
  return (
    <footer style={{ background: N, color: 'rgba(255,255,255,0.45)', fontSize: 12, padding: '32px 20px 28px', lineHeight: 1.7 }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* 링크 행 */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18, paddingBottom: 18, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: 12, fontWeight: 600 }}>
            개인정보처리방침
          </Link>
          <Link href="/terms" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: 12, fontWeight: 600 }}>
            이용약관
          </Link>
          <a href={`mailto:${EMAIL}`} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: 12, fontWeight: 600 }}>
            문의하기
          </a>
          <a href={BLOG_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: 12, fontWeight: 600 }}>
            📝 블로그
          </a>
        </div>
        {/* 사업자 정보 */}
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <p style={{ margin: '4px 0' }}>
            <strong style={{ color: 'rgba(255,255,255,0.75)' }}>Liferefix</strong>
            {' | '}대표: <span style={{ color: 'rgba(255,255,255,0.4)' }}>준비 중</span>
          </p>
          <p style={{ margin: '4px 0' }}>
            사업자등록번호: <span style={{ color: 'rgba(255,255,255,0.4)' }}>준비 중</span>
            {' | '}통신판매업: 신고 예정
          </p>
          <p style={{ margin: '4px 0' }}>주소: <span style={{ color: 'rgba(255,255,255,0.4)' }}>준비 중</span></p>
          <p style={{ margin: '4px 0' }}>
            개인정보보호책임자: <span style={{ color: 'rgba(255,255,255,0.4)' }}>준비 중</span>
            {' '}<a href={`mailto:${EMAIL}`} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>({EMAIL})</a>
          </p>
          <p style={{ margin: '4px 0' }}>호스팅 제공: Vercel Inc.</p>
        </div>
        {/* 면책 */}
        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 14 }}>
          <p style={{ margin: '4px 0' }}>
            본 서비스는 정보 제공 목적이며 법률 서비스가 아닙니다.<br />
            AI 분석 결과는 참고용이며 법적 효력이 없습니다. 최종 판단은 반드시 전문 변호사 상담을 통해 결정하십시오.
          </p>
          <p style={{ margin: '8px 0 4px', fontSize: 11 }}>
            © 2026 Liferefix. All rights reserved. Beta v1.8
          </p>
        </div>
      </div>
      {/* 호버 스타일 */}
      <style>{`
        footer a:hover { color: #fff !important; }
      `}</style>
    </footer>
  )
}
