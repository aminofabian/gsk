'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const partners = [
  '/partners/Screenshot_2025-02-07_095045-removebg-preview.png',
  '/partners/Screenshot_2025-02-07_095103-removebg-preview.png',
  '/partners/Screenshot_2025-02-07_095118-removebg-preview.png',
  '/partners/Screenshot_2025-02-07_095252-removebg-preview.png',
  '/partners/Screenshot_2025-02-07_095302-removebg-preview.png',
  '/partners/Screenshot_2025-02-07_095311-removebg-preview.png',
  '/partners/Screenshot_2025-02-07_095322-removebg-preview.png',
];

const PartnerSlider = () => {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image
                src={partner}
                alt={`Partner ${index + 1}`}
                width={200}
                height={100}
                className="object-contain h-24"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerSlider; 