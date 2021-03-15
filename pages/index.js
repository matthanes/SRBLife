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
            target="_blank"
            href="https://goo.gl/maps/6vrJMr3Cd86JH3do9"
          />
          <Homecard
            title="Sunday Worship"
            subtitle="10:30 AM"
            icon={["fas", "clock"]}
            target="_self"
            href="#"
          />
          <Homecard
            title="Call Us"
            subtitle="706-561-0193"
            icon={["fas", "phone"]}
            target="_self"
            href="tel:706-561-0193"
          />
          <Homecard
            title="Email For Info"
            subtitle="info@srblife.com"
            icon={["fas", "envelope"]}
            target="_self"
            href="mailto:info@srblife.com"
          />
          <Homecard
            title="Prayer Request"
            subtitle="prayer@srblife.com"
            icon={["fas", "envelope"]}
            target="_self"
            href="mailto:prayer@srblife.com"
          />
          <Homecard
            title="Email The Pastor"
            subtitle="PastorBuddy@srblife.com"
            icon={["fas", "envelope"]}
            target="_self"
            href="mailto:PastorBuddy@srblife.com"
          />
          <Homecard
            title="Calendar"
            subtitle="Important Dates"
            icon={["fas", "calendar"]}
            target="_self"
            href="/calendar"
          />
          <Homecard
            title="SRBLife"
            subtitle="Facebook"
            icon={["fab", "facebook"]}
            target="_blank"
            href="https://www.facebook.com/SRBLife"
          />

          <Homecard
            title="YouTube"
            subtitle="Sermons"
            icon={["fab", "youtube"]}
            target="_blank"
            href="https://www.youtube.com/channel/UCSaSFpr8E-PMYfi1QoqwVuw/"
          />
        </div>
      </div>
    </div>
  );
}
