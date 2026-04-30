# 🔍 Liferefix SEO 진단 및 해결 가이드

## ❌ 현재 상황 (확인됨)
- 구글에서 `liferefix.com` 검색 → **0건**
- "liferefix 개인회생" 검색 → **liferefix.com 노출 X**
- **원인**: sitemap.xml + robots.txt 없음, Search Console 미제출, 구조화 데이터 부족

---

## ✅ 이번에 추가된 것

### 1. `app/sitemap.ts` (신규)
- Next.js 13+ 표준 동적 사이트맵
- 자동으로 `liferefix.com/sitemap.xml` 생성
- 메인/privacy/terms 3개 페이지 등록

### 2. `app/robots.ts` (신규)
- Next.js 13+ 표준 robots.txt
- 자동으로 `liferefix.com/robots.txt` 생성
- 모든 봇 허용 + sitemap 위치 명시

### 3. `app/layout.tsx` (강화)
- **JSON-LD 구조화 데이터 4종 추가**
  - Organization (회사 정보)
  - WebSite (웹사이트)
  - Service (서비스 카테고리)
  - FAQPage (FAQ → 검색 결과 풍부 표시)
- robots 메타데이터 강화 (max-image-preview 등)
- metadataBase 추가 (URL 자동 절대화)
- keywords 확장

---

## 🚀 GitHub Push 후 즉시 할 일

### Step 1: Vercel 배포 확인 (1~2분)

push → Vercel 자동 빌드 → 다음 URL 직접 확인:

```
https://liferefix.com/sitemap.xml    ← XML 형식으로 떠야 함
https://liferefix.com/robots.txt     ← 텍스트로 떠야 함
```

**둘 다 떠야 진짜 적용된 거.**

### Step 2: Google Search Console에 사이트맵 제출 ⭐ (가장 중요)

1. https://search.google.com/search-console 접속
2. liferefix.com 속성 선택 (이미 인증된 상태)
3. 좌측 메뉴 → **Sitemaps**
4. "새 사이트맵 추가" → `sitemap.xml` 입력 → **제출**
5. 상태가 "성공"으로 뜨면 완료

### Step 3: 색인 요청 (즉시 노출용)

1. Search Console 상단 검색창에 `https://liferefix.com` 입력
2. **"색인 생성 요청"** 클릭
3. `https://liferefix.com/privacy`, `/terms`도 동일하게 처리

→ 이거 하면 **24~48시간 내 색인** 가능
→ 안 하면 자연 발견까지 **2~4주** 걸림

### Step 4: 네이버 서치어드바이저 (한국 검색 필수) 

이미 검증 토큰 있음 (`3e38bccf6d26d5fb4090e44dd220ebbb1e6b38ba`).

1. https://searchadvisor.naver.com 접속
2. liferefix.com 선택
3. **요청 → 사이트맵 제출** → `sitemap.xml` 입력
4. **요청 → 웹페이지 수집** → 메인 URL 입력

---

## 📊 추가 SEO 체크 (선택)

### A. og-image.png 실제 존재 확인
- `https://liferefix.com/og-image.png` 접속해서 떠야 함
- 안 뜨면 `public/og-image.png` 1200×630 이미지 추가 필요
- 카카오톡/페이스북 공유 시 미리보기에 사용됨

### B. favicon.ico 확인
- `https://liferefix.com/favicon.ico` 접속 확인
- 없으면 `public/favicon.ico` 추가

### C. 빌드 후 확인
```bash
npm run build
```
- `.next/static/*` 정상 생성 확인
- 에러 없으면 배포 OK

---

## 🎯 예상 효과 (반영 후)

| 시점 | 예상 결과 |
|------|----------|
| **D+0 (배포 직후)** | sitemap.xml, robots.txt 즉시 접근 가능 |
| **D+1~2 (색인 요청)** | "site:liferefix.com" 1~3건 노출 |
| **D+7~14** | "liferefix" 직접 검색 시 1위 노출 |
| **D+30~60** | "개인회생 AI", "탕감률 계산" 롱테일 키워드 노출 시작 |
| **D+90+** | "개인회생 변호사" 등 메인 키워드 경쟁 진입 |

---

## ⚠️ 빠른 체크리스트

push 전:
- [ ] `app/sitemap.ts` 추가됨
- [ ] `app/robots.ts` 추가됨
- [ ] `app/layout.tsx` 교체됨 (JSON-LD 포함)

push 후:
- [ ] `liferefix.com/sitemap.xml` 접근 OK
- [ ] `liferefix.com/robots.txt` 접근 OK
- [ ] Search Console에 sitemap 제출
- [ ] 색인 생성 요청 (메인/privacy/terms)
- [ ] 네이버 서치어드바이저에도 sitemap 제출

---

## 🔧 현재 폴더 구조 (zip 안)

```
liferefix-landing-v1.7/
├── app/
│   ├── layout.tsx           ← JSON-LD 강화
│   ├── page.tsx             ← 메인 (이전 버전 유지)
│   ├── sitemap.ts           ← 🆕 신규
│   ├── robots.ts            ← 🆕 신규
│   ├── privacy/
│   │   └── page.tsx
│   └── terms/
│       └── page.tsx
└── components/
    └── Footer.tsx
```
