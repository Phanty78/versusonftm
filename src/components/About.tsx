import Image from 'next/image'

export default function About() {
  const cards = [
    {
      title: 'Community',
      description:
        'Join our community of web3 gamers sharing our passion of crypto and gaming. Versus! offers tournaments for all our favorite games.',
    },
    {
      title: 'Innovation',
      description:
        'Pushing the boundaries of Web3 gaming marketing with bold new strategies, like our Access Pass and Game Token Faucet.',
    },
    {
      title: 'Rewards',
      description:
        'Get rewarded for holding! Airdrops, giveaways, and tournament prizes are all available to our holders.',
    },
  ]

  return (
    <section className="py-6 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          About FTM Versus!
        </h2>
        <div className="my-4 flex justify-center items-center">
          <Image
            src="/fantasia-moon.webp"
            alt="FTM Versus Logo"
            width={512}
            height={512}
            loading="lazy"
          />
        </div>
        <p className="text-xl text-center mb-12">
          FTM Versus! is home to all things competitive on the Fantom
          blockchain. Our goal is to help support the growing web3 gaming
          ecosystem on Fantom by bringing awareness through competition!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="my-4 flex justify-center items-center">
          <Image
            src="/fantasia-money.webp"
            alt="FTM Versus Logo"
            width={512}
            height={512}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
