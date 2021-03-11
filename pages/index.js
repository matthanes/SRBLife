import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Schomburg Road Baptist Church Columbus Georgia - Home</title>
        <meta
          name="keywords"
          content="church, family-friendly, baptist, small, kids, nursery"
        />
        <meta
          name="description"
          content="Loving Him, loving them, changing lives! That is our purpose at Schomburg Road Baptist Church. Everything we do is driven from these six short words written above. By understanding this statement you will better understand who we are."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-4 p-4 w-1/4 rounded bg-blue-300 text-center">
        <p className="text-blue-600">This should be very blue.</p>
      </div>
    </div>
  );
}
