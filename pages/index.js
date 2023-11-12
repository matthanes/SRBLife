import { useState, useEffect } from 'react';
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

import { getAllEvents, getAnnouncements } from '../utilities/directus';
import EventCardCarousel from '../components/EventCardCarousel';

export default function Home({ events, announcements }) {
  const [filteredEvents, setFilteredEvents] = useState([]);
  // useEffect to filter the events for only those that are in the future
  useEffect(() => {
    const futureEvents = events.filter((event) => {
      const eventDate = new Date(event.datetime);
      const rightNow = new Date();
      return eventDate > rightNow;
    });
    // filter the futureEvents for events where futureEvents.location is either home or homeyouth
    const pageEvents = futureEvents.filter((event) => {
      return event.location === 'home' || event.location === 'homeyouth';
    });
    // For testing purposes, duplicate the pageEvents so there are at least 8 evnets
    // while (pageEvents.length < 3) {
    //   pageEvents.push(...pageEvents);
    // }
    setFilteredEvents(pageEvents);
  }, [events]);

  //create a slides array from the announcements if the location is home or homeyouth
  const slides = announcements
    .filter((announcement) => {
      return (
        announcement.location === 'home' ||
        announcement.location === 'homeyouth'
      );
    })
    .map((announcement) => {
      return {
        url: announcement.slide_link || '',
        ariaLabelText: announcement.link_label,
        title: announcement.title,
        subtitle: announcement.subtitle ?? '',
        alt: announcement.alt_text,
        imgLink:
          'https://srblog.srblife.com/assets/' +
          announcement.slide.filename_disk,
        opacity: 0,
        objectPosition: 'object-center',
      };
    });

  return (
    <>
      <header className="relative min-h-1/3 sm:min-h-1/2 md:min-h-3/4 xl:min-h-screen">
        <Slider slides={slides} timing={5000}></Slider>
      </header>
      <div className="container mx-auto my-8 px-4 md:px-12">
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
      </div>
      <h2 className="mx-auto mb-6 max-w-lg border-b-2 border-primary py-6 text-center font-bodytext text-4xl font-bold">
        Upcoming Events
      </h2>
      {filteredEvents.length > 0 ? (
        <EventCardCarousel events={filteredEvents} />
      ) : (
        <div className="grid place-content-center p-6 text-xl">
          No upcoming events were found...
        </div>
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const events = await getAllEvents();
  const announcements = await getAnnouncements();

  return {
    props: {
      events: events.data.Events,
      announcements: announcements.data.announcements,
    },
    revalidate: 60,
  };
};
