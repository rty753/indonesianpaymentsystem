import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: '印尼支付系统接入指南2025 | OVO/DANA/GoPay全渠道集成方案',
  description: '专业印尼支付系统接入服务，支持OVO、GoPay、DANA等主流电子钱包，提供QRIS统一码收款、虚拟账户、便利店支付全方案。7x24技术支持，最快1天完成接入，费率低至0.1%起。',
  keywords: '印尼支付系统,OVO支付,GoPay支付,DANA支付,QRIS收款,印尼电子钱包,支付接入,印尼支付API',
  authors: [{ name: 'Indonesian Payment System' }],
  robots: 'index, follow',
  openGraph: {
    title: '印尼支付系统接入指南2025 | OVO/DANA/GoPay全渠道集成方案',
    description: '专业印尼支付系统接入服务，支持OVO、GoPay、DANA等主流电子钱包，提供QRIS统一码收款、虚拟账户、便利店支付全方案。7x24技术支持，最快1天完成接入，费率低至0.1%起。',
    url: 'https://indonesianpaymentsystem.com/',
    siteName: 'Indonesian Payment System',
    type: 'website',
    locale: 'zh_CN'
  },
  twitter: {
    card: 'summary_large_image',
    title: '印尼支付系统接入指南2025 | OVO/DANA/GoPay全渠道集成方案',
    description: '专业印尼支付系统接入服务，支持OVO、GoPay、DANA等主流电子钱包'
  },
  alternates: {
    canonical: 'https://indonesianpaymentsystem.com/'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}