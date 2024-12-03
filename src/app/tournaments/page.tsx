import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'

interface Tournament {
  id: string
  name: string
  game: string
  date: string
  prizePool: string
  status: 'upcoming' | 'ongoing' | 'completed'
}

const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'FTM Frenzy Cup',
    game: 'Sky Trails',
    date: '2024-05-15',
    prizePool: '5000 FTM',
    status: 'upcoming',
  },
  {
    id: '2',
    name: 'Relic Rumble',
    game: 'Relic Survive',
    date: '2024-05-20',
    prizePool: '3000 FTM',
    status: 'upcoming',
  },
  {
    id: '3',
    name: 'Bubble Pop Bonanza',
    game: 'Moonbay Bay Bay Bubble Pop',
    date: '2024-05-25',
    prizePool: '2000 FTM',
    status: 'upcoming',
  },
  {
    id: '4',
    name: 'Estfor Epic Clash',
    game: 'ESTFOR KINGDOM',
    date: '2024-06-01',
    prizePool: '10000 FTM',
    status: 'upcoming',
  },
  {
    id: '5',
    name: 'Spring Showdown',
    game: 'Multiple Games',
    date: '2024-04-10',
    prizePool: '15000 FTM',
    status: 'completed',
  },
]

export default function Tournaments() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <h1 className="text-4xl font-bold text-center mb-8">
            FTM Versus! Tournaments
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Upcoming Tournaments
            </h2>
            <div className="grid gap-6">
              {tournaments
                .filter((t) => t.status === 'upcoming')
                .map((tournament) => (
                  <div
                    key={tournament.id}
                    className="border border-gray-200 rounded-lg p-6 shadow-md"
                  >
                    <h3 className="text-xl font-bold mb-2">
                      {tournament.name}
                    </h3>
                    <p>
                      <strong>Game:</strong> {tournament.game}
                    </p>
                    <p>
                      <strong>Date:</strong> {tournament.date}
                    </p>
                    <p>
                      <strong>Prize Pool:</strong> {tournament.prizePool}
                    </p>
                    <Link
                      href={`/tournaments/${tournament.id}`}
                      className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      View Details
                    </Link>
                  </div>
                ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Past Tournaments</h2>
            <div className="grid gap-6">
              {tournaments
                .filter((t) => t.status === 'completed')
                .map((tournament) => (
                  <div
                    key={tournament.id}
                    className="border border-gray-200 rounded-lg p-6 shadow-md"
                  >
                    <h3 className="text-xl font-bold mb-2">
                      {tournament.name}
                    </h3>
                    <p>
                      <strong>Game:</strong> {tournament.game}
                    </p>
                    <p>
                      <strong>Date:</strong> {tournament.date}
                    </p>
                    <p>
                      <strong>Prize Pool:</strong> {tournament.prizePool}
                    </p>
                    <Link
                      href={`/tournaments/${tournament.id}`}
                      className="mt-4 inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                      View Results
                    </Link>
                  </div>
                ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Host Your Own Tournament
            </h2>
            <p className="text-lg mb-4">
              Are you a game developer or community leader interested in hosting
              your own tournament on FTM Versus!? We&apos;d love to hear from
              you!
            </p>
            <div className="text-center">
              <a
                href="mailto:fantomversus.team@gmail.com"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"
              >
                Contact Us to Host
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
