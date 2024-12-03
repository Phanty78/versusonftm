import Image from 'next/image'
import Link from 'next/link'

export default function Mint() {
  return (
    <section className="py-20 bg-gray-100">
      <div className=" mx-auto flex flex-col items-center justify-center">
        <Image
          src="/mint-banner.webp"
          width={1280}
          height={248}
          alt="Mint"
          layout="responsive"
        />
        <h2 className="text-3xl font-bold mb-4 text-center">
          MINT YOUR VERSUS! ACCESS PASS NOW!
        </h2>
        <p className="text-lg mb-8 text-center">
          FTM Versus! Access passes are your key to all things $VERSUS! Holders
          will enjoy free entry to all of our tournaments, access to airdrops,
          and more! Burn one of each color to unlock the Black Access Pass.
          Black level benefits include all above, along with additional airdrops
          of $FTM based gaming tokens!{' '}
        </p>
        <Link
          href="https://ftmversus.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 font-bold py-8 px-24 rounded-full hover:bg-blue-100 transition duration-300 text-2xl"
        >
          Mint
        </Link>
      </div>
    </section>
  )
}
