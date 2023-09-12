import React from 'react'
import EventCard from '../components/EventCard';
import { Swiper, SwiperSlide } from '../components/SwiperWrapper';

const EventCardCarousel = ({events}) => {
  return (
    <Swiper
          slidesPerView={1.5}
          breakpoints={{
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5, navigation: { enabled: true } },
            // 1536: { slidesPerView: 4.5, centeredSlides: false },
          }}
          spaceBetween={25}
          centeredSlides={true}
          navigation={{
            enabled: false,
            disabledClass: 'hidden',
          }}
          pagination={{
            enabled: true,
            clickable: true,
          }}
          injectStyles={[`:host { --swiper-theme-color: #003d7e;`]}
        >
          {events.map((event) => {
            return (
              <SwiperSlide class={'flex h-auto justify-center'} key={event.id}>
                <EventCard event={event} />
              </SwiperSlide>
            );
          })}
        </Swiper>
  )
}

export default EventCardCarousel