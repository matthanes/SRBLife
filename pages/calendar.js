import React from 'react';
import FullCalendar from '@fullcalendar/react';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import Head from 'next/head';

const Calendar = () => {
  const handleMouseEnter = (e) => {
    const description = e?.event?.extendedProps?.description ?? '';
    // Show Tooltip on mouse enter
    document.getElementById('tooltip').classList.remove('invisible');
    // Set Tooltip text
    document.getElementById('tooltip').innerHTML =
      e.event.title + '<br>' + '<pre>' + description.trim() + '</pre>';
    // Set Tooltip position
    document.getElementById('tooltip').style.top = e.jsEvent.pageY + 40 + 'px';
    document.getElementById('tooltip').style.left = e.jsEvent.pageX + 10 + 'px';
  };

  const handleMouseLeave = (e) => {
    document.getElementById('tooltip').classList.add('invisible');
  };

  return (
    <div className="container mx-auto px-8 md:px-20 font-bodytext">
      <Head>
        <title>Schomburg Road Baptist Church Columbus Georgia - Calendar</title>
        <meta name="keywords" content="calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="tooltip"
        className="invisible absolute z-10 px-4 py-1 rounded-xl bg-black text-white"
      ></div>
      <div className="my-4 hidden lg:block">
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          contentHeight="auto"
          headerToolbar={{
            left: 'dayGridMonth,dayGridWeek',
            center: 'title',
            right: 'prev,next today',
          }}
          eventDisplay="block"
          eventColor="#003D7E"
          eventTextColor="white"
          eventBackgroundColor="#003D7E"
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            meridiem: 'short',
          }}
          googleCalendarApiKey="AIzaSyBqu-QcJV3eviIlKc6YHv_0DgfyiMznT6w"
          events={{
            googleCalendarId: 'srblife@gmail.com',
          }}
          eventMouseEnter={handleMouseEnter}
          eventMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="my-4 block">
        <FullCalendar
          plugins={[listPlugin, googleCalendarPlugin]}
          initialView="listMonth"
          contentHeight="auto"
          googleCalendarApiKey="AIzaSyBqu-QcJV3eviIlKc6YHv_0DgfyiMznT6w"
          headerToolbar={{
            left: 'title',
            right: 'prev,next',
          }}
          events={{
            googleCalendarId: 'srblife@gmail.com',
          }}
          eventMouseEnter={handleMouseEnter}
          eventMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Calendar;
