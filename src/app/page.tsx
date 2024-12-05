import About from '@/components/About'
import Hero from '@/components/Hero'
import Mint from '@/components/Mint'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Mint />
    </main>
  )
}
