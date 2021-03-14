import Homecard from "../components/Homecard";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Schomburg Road Baptist Church Columbus Georgia - Home</title>
        <meta
          name="keywords"
          content="church, family-friendly, baptist, small, kids, nursery"
        />
        <meta
          name="description"
          content="Loving Him, loving them, changing lives! That is our purpose at Schomburg Road Baptist Church. Everything we do is driven from these six short words. By understanding this statement you will better understand who we are."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <Homecard
            title="7155 Schomburg Road"
            subtitle="Columbus, GA 31909"
            icon={["fas", "map-marked-alt"]}
          />
          <Homecard
            title="YouTube"
            subtitle="Sermons"
            icon={["fab", "youtube"]}
          />
          <Homecard
            title="YouTube"
            subtitle="Sermons"
            icon={["fab", "youtube"]}
          />
          <Homecard
            title="YouTube"
            subtitle="Sermons"
            icon={["fab", "youtube"]}
          />
          <Homecard
            title="YouTube"
            subtitle="Sermons"
            icon={["fab", "youtube"]}
          />
          <Homecard
            title="YouTube"
            subtitle="Sermons"
            icon={["fab", "youtube"]}
          />
        </div>
      </div>
    </div>
  );
}
