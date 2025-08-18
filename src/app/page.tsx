'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PaymentMethods from '@/components/PaymentMethods'
import Features from '@/components/Features'
import Integration from '@/components/Integration'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PaymentMethods />
      <Features />
      <Integration />
      <Footer />
    </main>
  )
}