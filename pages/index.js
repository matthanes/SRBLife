import Homecard from '../components/Homecard';
import Slider from '../components/Slider';
import {
  FaClock,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaCalendar,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import Head from 'next/head';

import CandleLight from '../public/img/candlelightservice.jpg';
import Live from '../public/img/SRBLive.jpg';
import Musical from '../public/img/KidMusical.jpg';

const slides = [
  {
    url: 'https://www.youtube.com/channel/UCSaSFpr8E-PMYfi1QoqwVuw/live',
    title: 'SRB Live',
    subtitle: 'SRB Live and In Person This Sunday!',
    alt: 'SRB Live and In Person This Sunday!',
    imgLink: Live,
    opacity: 0,
    objectPosition: 'object-center',
  },
  {
    url: 'https://www.youtube.com/watch?v=Dp7o07dRpSQ',
    title: '',
    subtitle: '',
    alt: 'Kid Christmas Musical. Click For Recording',
    imgLink: Musical,
    opacity: 0,
    objectPosition: 'object-bottom',
  },
];

export default function Home() {
  return (
    <>
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
      <header className="relative min-h-1/3 sm:min-h-1/2 md:min-h-3/4 xl:min-h-screen">
        <Slider slides={slides} timing={5000}></Slider>
        {/* <ExportedImage
          className="object-cover object-bottom"
          alt="Christmas Eve Candlelight Service 9:00PM"
          src="/img/candlelightservice.jpg"
          fill
          priority={true}
        /> */}
      </header>
      {/* <a href="https://www.youtube.com/channel/UCSaSFpr8E-PMYfi1QoqwVuw/live">
        <div className="bg-white text-center min-h-1/3 md:min-h-1/2 xl:min-h-screen">
          <ExportedImage
            alt="Christmas Eve Candlelight Service 9:00PM"
            src="/img/candlelightservice.jpg"
            width={1920}
            height={900}
            objectFit="cover"
            priority={true}
          />
        </div>
      </a> */}
      <div className="container my-8 mx-auto px-4 md:px-12">
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
    </>
  );
}
