import Head from 'next/head'

export default function OurBeliefs() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Schomburg Road Baptist Church Columbus Georgia - Our Beliefs</title>
        <meta name='keywords' content='beliefs, doctrine'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-4 p-4 w-1/4 rounded bg-blue-300 text-center">
        <p className="text-blue-600">Our Beliefs</p>
      </div>
    </div>
  )
}
