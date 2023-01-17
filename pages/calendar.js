import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import Head from 'next/head';
import Modal from '../components/Modal';

const Calendar = () => {
  const windowWidth = typeof window !== 'undefined' && window.innerWidth;
  const [isMobile, setIsMobile] = useState(windowWidth < 1024 ? true : false);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [view, setView] = useState(
    windowWidth < 1024 ? 'listMonth' : 'dayGridMonth'
  );

  // useEffect to listen for window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
        setView('listMonth');
      }
      if (window.innerWidth >= 1024) {
        setIsMobile(false);
        setView('dayGridMonth');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, view]);

  return (
    <div className="max-w-md sm:container mx-auto sm:px-8 md:px-20 font-bodytext">
      <Head>
        <title>Schomburg Road Baptist Church Columbus Georgia - Calendar</title>
        <meta name="keywords" content="calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modal is rendered in _document.js at the #modal-root div */}
      {showModal && (
        <Modal
          modalText={modalText}
          buttonLeft={'CLOSE'}
          leftButtonFunc={() => setShowModal(false)}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className="my-4 mx-4 lg:mx-0">
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin, listPlugin]}
          initialView={view}
          contentHeight="auto"
          headerToolbar={
            isMobile
              ? {
                  left: 'title',
                  right: 'prev,next',
                }
              : {
                  left: 'dayGridMonth,dayGridWeek',
                  center: 'title',
                  right: 'prev,next today',
                }
          }
          eventDisplay="block"
          eventColor="#003D7E"
          eventTextColor="white"
          eventBackgroundColor="#003D7E"
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            meridiem: 'short',
          }}
          googleCalendarApiKey={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          events={{
            googleCalendarId: 'srblife@gmail.com',
          }}
          eventClick={(e) => {
            e.jsEvent.preventDefault();
            setModalText(e?.event?.extendedProps?.description?.trim());
            setShowModal(true);
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
