# Liferefix Landing (SEO)

Next.js 14 SSG 기반 SEO 랜딩 페이지

## 구조

```
liferefix.com          → 이 프로젝트 (SEO 랜딩)
app.liferefix.com      → 기존 HTML 앱 (실제 기능)
```

## 페이지

- `/` — 메인 랜딩
- `/analysis` — AI 진단 방법
- `/lawyers` — 변호사 비딩 소개
- `/about` — 서비스 소개

## 배포 (Vercel 추천)

```bash
npm install
npm run build
```

Vercel에 연결하면 자동 배포됩니다.

## GitHub Pages로 배포 시

```bash
npm run build
# out/ 폴더를 gh-pages 브랜치에 업로드
```

## 환경 설정

`app.liferefix.com` 또는 현재 앱 URL을 `page.tsx`의 href에서 수정하세요.
