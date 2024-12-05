import GameSection from '@/components/GameSection'
import Link from 'next/link'

export default function GameLibrary() {
  return (
    <>
      <main className="flex min-h-screen flex-col pt-12">
        <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
            <h1 className="text-4xl font-bold text-center mb-8">
              Welcome to Web3 Gaming on Fantom
            </h1>
            <p className="text-xl text-center mb-12">
              Check out some of the awesome games being built on the
              World&apos;s fastest chain!
            </p>

            <GameSection
              title="SKY TRAILS"
              description="Take flight as some of your favorite $FTM characters, collect rings, and avoid obstacles while shooting for a top score!"
              price="0.1 $fTails per game"
              videoSrc="/videos/SkyTrails.mp4"
              playLink="http://playskytrails.com"
            />

            <GameSection
              title="Relic Survive"
              description="Play the role of Sir Hopper and defend Fantom from the rugs and scams of old! Power up with Fantom Lords, Ascended Lords, and Arcane Relic NFTS!"
              videoSrc="/videos/RelicSurvive.mp4"
              playLink="https://fantomlords.com/"
            />

            <GameSection
              title="Fknuckles Casino"
              description="Partake in some Roulette or try your luck in the lottery! When the market is dry, no reason you have to stop degening on-chain!"
              videoSrc="/videos/FknucklesRoulette.mp4"
              playLink="https://knucklesftm.xyz/games/"
            />

            <GameSection
              title="Moonbay Bay Bay Bubble Pop"
              description="Aim and shoot to match three or more bubbles of the same type in this web3 bubble pop game!"
              price="0.1 $FTM per game"
              videoSrc="/videos/MoonBayBayBay.mp4"
              playLink="https://www.moonbay.space/signin?callbackUrl=https%3A%2F%2Fwww.moonbay.space%2Fgames%2Fbaybay"
            />

            <GameSection
              title="ESTFOR KINGDOM"
              description="Create a hero, gain exp. and fight to become stronger and find loot! Items can be traded on the marketplace for $BRUSH. Join a clan to further your experience!"
              imageSrc="/estforkingdom.webp"
              playLink="https://estfor.com/home"
            />

            <div className="mt-12 text-center">
              <Link
                href="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
