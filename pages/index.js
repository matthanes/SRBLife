import Homecard from "../components/Homecard";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaCalendar,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import ExportedImage from "next-image-export-optimizer";
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
          content="Loving Him, loving them, changing lives! That is our purpose at Schomburg Road Baptist Church in Columbus, Georgia. Everything we do is driven from these six short words. By understanding this statement you will better understand who we are."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="https://kideventpro.lifeway.com/myEvent/?id=64376">
        <div className="w-full bg-black text-center min-h-1/4 xs:min-h-1/4 md:min-h-1/2 xl:min-h-screen">
          <ExportedImage
            alt="Vacation Bible School June 6 - June 10 from 6:00pm to 9:00pm"
            src="/img/vbs2022.png"
            width={1920}
            height={870}
            objectFit="cover"
            priority={true}
          />
        </div>
      </a>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <Homecard
            title="7155 Schomburg Road"
            subtitle="Columbus, GA 31909"
            icon={<FaMapMarkedAlt className="block mx-auto" size="100" />}
            target="_blank"
            href="https://goo.gl/maps/6vrJMr3Cd86JH3do9"
            rel="noopener"
          />
          <Homecard
            title="Sunday Worship"
            subtitle="10:30 AM"
            icon={<FaClock className="block mx-auto" size="100" />}
            target="_self"
            href="#"
          />
          <Homecard
            title="Call Us"
            subtitle="706-561-0193"
            icon={<FaPhone className="block mx-auto" size="100" />}
            target="_self"
            href="tel:706-561-0193"
          />
          <Homecard
            title="Email For Info"
            subtitle="info@srblife.com"
            icon={<FaEnvelope className="block mx-auto" size="100" />}
            target="_self"
            href="mailto:info@srblife.com"
          />
          <Homecard
            title="Prayer Request"
            subtitle="prayer@srblife.com"
            icon={<FaEnvelope className="block mx-auto" size="100" />}
            target="_self"
            href="mailto:prayer@srblife.com"
          />
          <Homecard
            title="Email The Pastor"
            subtitle="PastorBuddy@srblife.com"
            icon={<FaEnvelope className="block mx-auto" size="100" />}
            target="_self"
            href="mailto:PastorBuddy@srblife.com"
          />
          <Homecard
            title="Calendar"
            subtitle="Important Dates"
            icon={<FaCalendar className="block mx-auto" size="100" />}
            target="_self"
            href="/calendar"
          />
          <Homecard
            title="SRBLife"
            subtitle="Facebook"
            icon={<FaFacebook className="block mx-auto" size="100" />}
            target="_blank"
            href="https://www.facebook.com/SRBLife"
            rel="noopener"
          />

          <Homecard
            title="YouTube"
            subtitle="Sermons"
            icon={<FaYoutube className="block mx-auto" size="100" />}
            target="_blank"
            href="https://www.youtube.com/channel/UCSaSFpr8E-PMYfi1QoqwVuw/"
            rel="noopener"
          />
        </div>
      </div>
    </div>
  );
}
