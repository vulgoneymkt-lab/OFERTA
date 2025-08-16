/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // site estático
  distDir: 'out',            // build vai pra pasta 'out'
  outputFileTracingRoot: __dirname, // garante rastreio correto
}
module.exports = nextConfig;