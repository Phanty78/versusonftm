import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative flex min-h-screen flex-col items-center justify-between p-8 md:p-16 lg:p-24 pt-24">
        <div
          className="absolute inset-0 bg-repeat opacity-40"
          style={{ backgroundImage: "url('/background-light.webp')" }}
        ></div>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <h1 className="text-4xl font-bold text-center mb-8">
            About FTM Versus!
          </h1>

          <div className="mb-12">
            <Image
              src="/logo.webp"
              alt="FTM Versus Logo"
              width={575}
              height={434}
              className="mx-auto rounded-full"
            />
          </div>

          <section className="mb-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              FTM Versus! is dedicated to revolutionizing the world of
              blockchain gaming by providing a premier tournament hosting
              platform on the Fantom Blockchain. Our mission is to support and
              grow the web3 gaming ecosystem, offering exciting competitions and
              fostering a vibrant community of gamers and developers.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Cutting-edge tournament infrastructure</li>
              <li>Integration with popular Fantom-based games</li>
              <li>Fair and transparent competition management</li>
              <li>Exciting prizes and rewards</li>
              <li>Community-driven events and initiatives</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg mb-4">
              Behind FTM Versus! is a passionate team of blockchain enthusiasts,
              game developers, and esports professionals. We combine our
              expertise to deliver the best possible experience for our users
              and push the boundaries of what&apos;s possible in web3 gaming.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
            <p className="text-lg mb-4">
              Whether you&apos;re a gamer looking for your next challenge or a
              developer interested in integrating your game with our platform,
              we invite you to join the FTM Versus! community. Together, we can
              shape the future of blockchain gaming!
            </p>
            <div className="text-center">
              <a
                href="https://t.me/FTM_Versus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
              >
                Join Our Community
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
