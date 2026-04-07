/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 정적 HTML 출력 (GitHub Pages 배포용)
  trailingSlash: true,
  images: { unoptimized: true },
}

module.exports = nextConfig
