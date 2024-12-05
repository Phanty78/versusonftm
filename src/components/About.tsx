export default function About() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          About FTM Versus!
        </h2>
        <p className="text-xl text-center mb-12">
          FTM Versus! is home to all things competitive on the Fantom
          blockchain. Our goal is to help support the growing web3 gaming
          ecosystem on Fantom by bringing awareness through competition!
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {['Community', 'Innovation', 'Rewards'].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">{item}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
