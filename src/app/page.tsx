import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Mint from '@/components/Mint'
import Sponsors from '@/components/Sponsors'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Mint />
      <Sponsors />
      <Footer />
    </main>
  )
}
