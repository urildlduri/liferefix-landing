import type { Metadata } from 'next'

const P = '#6A3DE8'
const N = '#0D1B2A'

export const metadata: Metadata = {
  title: '개인정보처리방침 | Liferefix',
  description: 'Liferefix 개인정보처리방침. 수집 항목, 이용 목적, 보유 기간, 제3자 제공, 정보주체의 권리 안내.',
  alternates: { canonical: 'https://liferefix.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      {/* 헤더 */}
      <section style={{ background: `linear-gradient(145deg,${P},#4A1DB8)`, padding: '40px 24px 32px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: 26, fontWeight: 900, margin: 0 }}>개인정보처리방침</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 8, marginBottom: 0 }}>
          시행일: 2026년 4월 30일
        </p>
      </section>

      {/* 본문 */}
      <section style={{ padding: '32px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: '#3A4F65', marginBottom: 28 }}>
            Liferefix(이하 &lsquo;회사&rsquo;)는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하며,
            적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게
            개인정보의 처리 목적, 항목, 기간 및 권리 행사 방법 등을 안내드리기 위해 본 처리방침을 수립·공개합니다.
          </p>

          {/* 1. 수집 항목 */}
          <Section title="1. 수집하는 개인정보 항목">
            <p>회사는 다음의 개인정보 항목을 수집·이용합니다.</p>
            <Box>
              <Item label="필수 항목 (AI 진단)">
                채무액, 월 소득, 부양가족 수, 채무 발생 사유
              </Item>
              <Item label="선택 항목 (변호사 견적 요청 시)">
                이름, 연락처(이메일 또는 전화번호)
              </Item>
              <Item label="자동 수집 항목">
                IP 주소, 쿠키, 접속 로그, 기기 정보, 서비스 이용 기록
              </Item>
            </Box>
            <p style={{ fontSize: 13, color: '#7A8B9F' }}>
              ※ 만 14세 미만 아동의 개인정보는 수집하지 않습니다. 본 서비스는 만 19세 이상 성인만 이용 가능합니다.
            </p>
          </Section>

          {/* 2. 이용 목적 */}
          <Section title="2. 개인정보의 처리 목적">
            <ul style={ulStyle}>
              <li>AI 기반 채무 분석 및 탕감률 예측 결과 제공</li>
              <li>파트너 변호사 매칭 및 견적 전달</li>
              <li>서비스 이용 통계 분석 및 품질 개선</li>
              <li>고객 문의 응대 및 분쟁 처리</li>
              <li>관계 법령 준수 및 부정 이용 방지</li>
            </ul>
          </Section>

          {/* 3. 민감정보 */}
          <Section title="3. 민감정보의 처리에 관한 사항">
            <p>
              채무 정보는 정보주체의 명시적 동의 하에 수집되며, AI 분석 및 변호사 매칭 목적으로만 활용됩니다.
              제3자(변호사) 제공 시에는 별도의 동의 절차를 거치며, 정보주체가 직접 선택한 변호사에게만 제공됩니다.
            </p>
          </Section>

          {/* 4. 보유 기간 */}
          <Section title="4. 개인정보의 보유 및 이용 기간">
            <ul style={ulStyle}>
              <li>회원 탈퇴 또는 서비스 이용 목적 달성 시까지 보유 후 즉시 파기</li>
              <li>관계 법령(전자상거래법, 통신비밀보호법 등)에 따라 보존이 필요한 경우 해당 기간 동안 보관</li>
              <li>전자상거래법: 계약·청약철회·대금결제 기록 5년, 소비자 불만·분쟁 기록 3년</li>
              <li>통신비밀보호법: 접속 로그 3개월</li>
            </ul>
          </Section>

          {/* 5. 제3자 제공 */}
          <Section title="5. 개인정보의 제3자 제공">
            <p>
              회사는 정보주체의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만 다음의 경우 예외로 합니다.
            </p>
            <ul style={ulStyle}>
              <li>정보주체가 직접 선택한 변호사에게 매칭을 위한 정보 제공 (별도 동의 후 진행)</li>
              <li>법령에 따른 수사기관 등의 요청이 있는 경우</li>
            </ul>
          </Section>

          {/* 6. 처리 위탁 */}
          <Section title="6. 개인정보 처리 위탁">
            <p>회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁할 수 있습니다.</p>
            <Box>
              <Item label="Google Firebase / Firestore">
                회원 인증, 데이터 저장 및 관리
              </Item>
              <Item label="Vercel Inc.">
                웹 호스팅 및 서비스 인프라
              </Item>
            </Box>
          </Section>

          {/* 7. 정보주체 권리 */}
          <Section title="7. 정보주체의 권리·의무 및 행사 방법">
            <p>정보주체는 회사에 대해 언제든지 다음 권리를 행사할 수 있습니다.</p>
            <ul style={ulStyle}>
              <li>개인정보 열람 요구</li>
              <li>오류 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리 정지 요구</li>
            </ul>
            <p>
              권리 행사는 서면, 이메일(<a href="mailto:contact@liferefix.com" style={linkStyle}>contact@liferefix.com</a>)을 통해
              하실 수 있으며, 회사는 이에 대해 지체 없이 조치합니다.
            </p>
          </Section>

          {/* 8. 안전성 확보 조치 */}
          <Section title="8. 개인정보의 안전성 확보 조치">
            <ul style={ulStyle}>
              <li>관리적 조치: 내부 관리계획 수립·시행, 정기 직원 교육</li>
              <li>기술적 조치: 접근 권한 관리, 암호화, 침입 차단 시스템</li>
              <li>물리적 조치: 서버 접근 통제 (Google Cloud / Vercel 이용)</li>
            </ul>
          </Section>

          {/* 9. 쿠키 */}
          <Section title="9. 쿠키 운용 및 거부 방법">
            <p>
              회사는 이용자에게 맞춤형 서비스를 제공하기 위해 쿠키를 사용할 수 있습니다.
              이용자는 브라우저 옵션 설정을 통해 쿠키 저장을 거부할 수 있으나, 일부 서비스 이용에 어려움이 있을 수 있습니다.
            </p>
          </Section>

          {/* 10. 개인정보 보호책임자 */}
          <Section title="10. 개인정보 보호책임자">
            <Box>
              <Item label="개인정보 보호책임자">[이름]</Item>
              <Item label="연락처">
                <a href="mailto:contact@liferefix.com" style={linkStyle}>contact@liferefix.com</a>
              </Item>
            </Box>
            <p style={{ fontSize: 13, color: '#7A8B9F' }}>
              개인정보 침해로 인한 피해 구제, 상담은 아래 기관에 문의하실 수 있습니다.
            </p>
            <ul style={ulStyle}>
              <li>개인정보분쟁조정위원회 (<a href="https://www.kopico.go.kr" style={linkStyle} target="_blank" rel="noopener noreferrer">kopico.go.kr</a> / 1833-6972)</li>
              <li>개인정보침해신고센터 (<a href="https://privacy.kisa.or.kr" style={linkStyle} target="_blank" rel="noopener noreferrer">privacy.kisa.or.kr</a> / 118)</li>
              <li>대검찰청 사이버수사과 (<a href="https://www.spo.go.kr" style={linkStyle} target="_blank" rel="noopener noreferrer">spo.go.kr</a> / 1301)</li>
              <li>경찰청 사이버안전국 (<a href="https://ecrm.cyber.go.kr" style={linkStyle} target="_blank" rel="noopener noreferrer">ecrm.cyber.go.kr</a> / 182)</li>
            </ul>
          </Section>

          {/* 11. 변경 안내 */}
          <Section title="11. 개인정보 처리방침 변경">
            <p>
              본 개인정보 처리방침은 시행일로부터 적용되며, 법령 또는 정책 변경에 따라 내용이 변경될 경우
              변경사항의 시행 7일 전부터 본 페이지를 통해 안내합니다.
            </p>
            <p style={{ marginTop: 12, fontSize: 13, color: '#7A8B9F' }}>
              · 시행일: 2026년 4월 30일<br />
              · 최종 수정일: 2026년 4월 30일
            </p>
          </Section>
        </div>
      </section>
    </main>
  )
}

// 컴포넌트
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: P, marginBottom: 12, paddingBottom: 8, borderBottom: `2px solid #F0ECFF` }}>
        {title}
      </h2>
      <div style={{ fontSize: 14, lineHeight: 1.85, color: '#3A4F65' }}>
        {children}
      </div>
    </div>
  )
}

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#F5F3FF', borderRadius: 12, padding: '14px 16px', margin: '12px 0' }}>
      {children}
    </div>
  )
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 12, padding: '6px 0', alignItems: 'flex-start' }}>
      <strong style={{ fontSize: 13, color: N, minWidth: 130, flexShrink: 0 }}>{label}</strong>
      <span style={{ fontSize: 13, color: '#3A4F65' }}>{children}</span>
    </div>
  )
}

const ulStyle: React.CSSProperties = {
  paddingLeft: 20,
  margin: '8px 0',
}

const linkStyle: React.CSSProperties = {
  color: P,
  fontWeight: 600,
  textDecoration: 'underline',
}
