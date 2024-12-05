import Image from 'next/image'
import Link from 'next/link'

export default function Mint() {
  return (
    <section className=" bg-gray-100">
      <div className=" mx-auto flex flex-col items-center justify-center bg-gray-800 text-white">
        <Image
          src="/mint-banner.webp"
          width={1280}
          height={248}
          alt="Mint"
          layout="responsive"
          loading="lazy"
        />
        <h2 className="text-3xl font-bold mb-4 text-center mt-4">
          MINT YOUR VERSUS! ACCESS PASS NOW!
        </h2>
        <p className="text-lg mb-8 text-center p-4">
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
          className="bg-white mb-6  text-blue-600 text-2xl font-bold py-6 px-12  rounded-full hover:bg-gray-400 transition duration-300"
        >
          Mint
        </Link>
      </div>
    </section>
  )
}
