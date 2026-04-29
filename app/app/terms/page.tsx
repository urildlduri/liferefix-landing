import type { Metadata } from 'next'

const P = '#6A3DE8'
const N = '#0D1B2A'

export const metadata: Metadata = {
  title: '이용약관 | Liferefix',
  description: 'Liferefix 서비스 이용약관. 서비스 내용, 회원의 권리·의무, 책임 제한 등을 안내합니다.',
  alternates: { canonical: 'https://liferefix.com/terms' },
}

export default function TermsPage() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      <section style={{ background: `linear-gradient(145deg,${P},#4A1DB8)`, padding: '40px 24px 32px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: 26, fontWeight: 900, margin: 0 }}>이용약관</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 8, marginBottom: 0 }}>
          시행일: 2026년 4월 30일
        </p>
      </section>

      <section style={{ padding: '32px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>

          <Section title="제1조 (목적)">
            <p>
              본 약관은 Liferefix(이하 &lsquo;회사&rsquo;)가 제공하는 AI 기반 채무 분석 및 변호사 견적 매칭 서비스(이하 &lsquo;서비스&rsquo;)의
              이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </Section>

          <Section title="제2조 (정의)">
            <ul style={ulStyle}>
              <li><strong>이용자</strong>: 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자</li>
              <li><strong>회원</strong>: 회사에 개인정보를 제공하여 회원등록을 한 자로, 서비스를 지속적으로 이용할 수 있는 자</li>
              <li><strong>파트너 변호사</strong>: 회사와 입점 계약을 체결하고 변호사 포털을 이용하는 변호사</li>
              <li><strong>AI 진단</strong>: 이용자의 입력 정보를 기반으로 한 채무 분석 결과 제공 서비스</li>
            </ul>
          </Section>

          <Section title="제3조 (서비스의 내용)">
            <p>회사는 다음과 같은 서비스를 제공합니다.</p>
            <ul style={ulStyle}>
              <li>AI 기반 개인회생 탕감률 및 변제계획 예측 분석</li>
              <li>파트너 변호사의 수임료 견적 수신 및 비교</li>
              <li>관련 법률 정보 및 가이드 제공</li>
              <li>기타 회사가 정하는 서비스</li>
            </ul>
          </Section>

          <Section title="제4조 (서비스의 성격 및 면책)">
            <Box>
              <p style={{ margin: 0, fontWeight: 700, color: N }}>
                ⚠️ 본 서비스는 법률 자문 또는 변호사 알선 서비스가 아닙니다.
              </p>
            </Box>
            <ul style={ulStyle}>
              <li>회사는 일반적인 정보 제공 및 변호사와 의뢰인의 자율적 연결을 위한 플랫폼만 제공합니다.</li>
              <li>AI 분석 결과는 참고용이며 법적 효력이 없습니다.</li>
              <li>변호사 선택 및 수임 계약은 이용자의 자율적 판단에 따라 변호사와 직접 체결합니다.</li>
              <li>회사는 변호사의 업무 수행, 계약 이행, 결과에 대해 어떠한 책임도 부담하지 않습니다.</li>
              <li>회사는 변호사법 제34조의 알선 수수료를 받지 않으며, 정액 구독료 기반의 SaaS 플랫폼으로 운영됩니다.</li>
            </ul>
          </Section>

          <Section title="제5조 (회원가입 및 이용계약)">
            <ul style={ulStyle}>
              <li>회원가입은 이용자가 약관에 동의하고 회사가 정한 가입 양식을 작성하여 신청함으로써 성립합니다.</li>
              <li>회사는 다음 각 호에 해당하는 신청을 승낙하지 않을 수 있습니다.
                <ul style={{ ...ulStyle, marginTop: 6 }}>
                  <li>타인의 명의를 이용하거나 허위 정보를 기재한 경우</li>
                  <li>만 19세 미만인 경우</li>
                  <li>이전에 회원자격을 상실한 적이 있는 경우</li>
                </ul>
              </li>
            </ul>
          </Section>

          <Section title="제6조 (이용자의 의무)">
            <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
            <ul style={ulStyle}>
              <li>타인의 정보 도용</li>
              <li>회사가 게시한 정보의 변경</li>
              <li>허위 사실 입력으로 인한 진단 결과 왜곡</li>
              <li>회사 및 제3자의 저작권, 지식재산권 침해</li>
              <li>회사 및 다른 이용자의 명예 훼손, 업무 방해</li>
              <li>음란성, 폭력성 등 미풍양속에 반하는 정보 공개</li>
            </ul>
          </Section>

          <Section title="제7조 (서비스 이용료)">
            <ul style={ulStyle}>
              <li>이용자(채무자)에 대한 AI 진단 및 변호사 견적 수신 서비스는 무료로 제공됩니다.</li>
              <li>파트너 변호사는 회사가 정한 정액 구독료(Basic 50만원/월, Premium 80만원/월)를 납부하여 서비스를 이용합니다.</li>
              <li>변호사 선택 후 변호사와의 수임 계약 비용은 당사자 간에 결정되며, 회사는 관여하지 않습니다.</li>
            </ul>
          </Section>

          <Section title="제8조 (서비스 변경 및 중단)">
            <p>
              회사는 서비스의 안정적 운영을 위해 사전 공지 후 서비스 내용을 변경하거나 일시 중단할 수 있으며,
              천재지변·시스템 장애 등 불가피한 사유 발생 시 사전 공지 없이 중단할 수 있습니다.
            </p>
          </Section>

          <Section title="제9조 (책임의 제한)">
            <ul style={ulStyle}>
              <li>회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력으로 인한 손해에 대해 책임지지 않습니다.</li>
              <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임지지 않습니다.</li>
              <li>회사는 이용자가 서비스를 이용하여 기대하는 결과(탕감률, 변제 결정 등)를 보장하지 않습니다.</li>
              <li>변호사와 이용자 간 분쟁은 당사자 간에 해결하며, 회사는 중재 의무가 없습니다.</li>
            </ul>
          </Section>

          <Section title="제10조 (지식재산권)">
            <p>
              서비스에 관한 저작권 및 기타 지식재산권은 회사에 귀속됩니다. 이용자는 회사의 사전 동의 없이
              서비스의 정보를 영리 목적으로 이용·재배포할 수 없습니다.
            </p>
          </Section>

          <Section title="제11조 (분쟁 해결)">
            <ul style={ulStyle}>
              <li>본 약관에 관한 분쟁은 대한민국 법령에 따라 해결합니다.</li>
              <li>서비스 이용 관련 분쟁이 발생할 경우 회사와 이용자는 상호 협의하여 해결하도록 노력합니다.</li>
              <li>협의가 이루어지지 않을 경우 관할 법원은 민사소송법에 따른 법원으로 합니다.</li>
            </ul>
          </Section>

          <Section title="제12조 (약관의 변경)">
            <p>
              회사는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 변경 시 시행일 7일 전부터 공지합니다.
              변경에 동의하지 않는 이용자는 회원 탈퇴를 할 수 있습니다.
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
    <div style={{ background: '#FFF8E0', borderLeft: `4px solid #FFB800`, borderRadius: 8, padding: '14px 16px', margin: '12px 0' }}>
      {children}
    </div>
  )
}

const ulStyle: React.CSSProperties = {
  paddingLeft: 20,
  margin: '8px 0',
}
