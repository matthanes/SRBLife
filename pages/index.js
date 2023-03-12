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

import Live from '../public/img/SRBLive.jpg';
import EventCard from '../components/EventCard';
import { getAllEvents } from '../utilities/directus';

const slides = [
  {
    url: 'https://www.youtube.com/channel/UCSaSFpr8E-PMYfi1QoqwVuw/live',
    ariaLabelText: 'SRB Live YouTube Channel',
    title: 'SRB Live',
    subtitle: 'SRB Live and In Person This Sunday!',
    alt: 'SRB Live and In Person This Sunday!',
    imgLink: Live,
    opacity: 0,
    objectPosition: 'object-center',
  },
];

export default function Home({ Events }) {
  // filter Events for only those that are in the future
  const futureEvents = Events.filter((event) => {
    const eventDate = new Date(event.datetime);
    const today = new Date();
    return eventDate > today;
  });

  return (
    <>
      <Head>
        <title>Schomburg Road Baptist Church Columbus, Georgia</title>
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
      </header>
      <div className="container my-8 mx-auto px-4 md:px-12">
        <div className="mb-12 flex flex-wrap justify-center gap-3 md:gap-6">
          <Homecard
            title="7155 Schomburg Road"
            subtitle="Columbus, GA 31909"
            icon={<FaMapMarkedAlt className="mx-auto block" size="100" />}
            target="_blank"
            href="https://goo.gl/maps/6vrJMr3Cd86JH3do9"
            rel="noopener"
          />
          <Homecard
            title="Sunday Worship"
            subtitle="10:30 AM"
            icon={<FaClock className="mx-auto block" size="100" />}
            target="_self"
            href="#"
          />
          <Homecard
            title="Call Us"
            subtitle="706-561-0193"
            icon={<FaPhone className="mx-auto block" size="100" />}
            target="_self"
            href="tel:706-561-0193"
          />
          <Homecard
            title="Email For Info"
            subtitle="info@srblife.com"
            icon={<FaEnvelope className="mx-auto block" size="100" />}
            target="_self"
            href="mailto:info@srblife.com"
          />
          <Homecard
            title="Prayer Request"
            subtitle="prayer@srblife.com"
            icon={<FaEnvelope className="mx-auto block" size="100" />}
            target="_self"
            href="mailto:prayer@srblife.com"
          />
          <Homecard
            title="Email The Pastor"
            subtitle="PastorBuddy@srblife.com"
            icon={<FaEnvelope className="mx-auto block" size="100" />}
            target="_self"
            href="mailto:PastorBuddy@srblife.com"
          />
          <Homecard
            title="Calendar"
            subtitle="Important Dates"
            icon={<FaCalendar className="mx-auto block" size="100" />}
            target="_self"
            href="/calendar"
          />
          <Homecard
            title="SRBLife"
            subtitle="Facebook"
            icon={<FaFacebook className="mx-auto block" size="100" />}
            target="_blank"
            href="https://www.facebook.com/SRBLife"
            rel="noopener"
          />

          <Homecard
            title="YouTube"
            subtitle="Sermons"
            icon={<FaYoutube className="mx-auto block" size="100" />}
            target="_blank"
            href="https://www.youtube.com/channel/UCSaSFpr8E-PMYfi1QoqwVuw/"
            rel="noopener"
          />
        </div>
        <h2 className="mx-auto max-w-lg border-b-2 border-primary py-6 text-center font-bodytext text-4xl font-bold">
          Upcoming Events
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-6">
          {futureEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: events.data,
    revalidate: 60,
  };
};
