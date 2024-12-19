import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import {
  Image,
  SwiperContainer,
  TextPartners,
  TextWraper,
  TitelPartners,
} from './Partners.styled';
import 'swiper/css/bundle';

import { useMediaQuery } from 'react-responsive';
import { SpanTitel } from '../../pages/HomePage/HomePage.styled';
import auto from '../../assets/image/66508ef00aae4c0624aaa216_Van.png';
import auto1 from '../../assets/image/66508ef04e161a643f8f33f8_FullTruck.png';
import auto2 from '../../assets/image/66508ef0956a483503469609_Semitruck.png';
import { useTranslation } from 'react-i18next';

const slides = [
  {
    id: 1,
    imageUrl: 'https://download.logo.wine/logo/FedEx/FedEx-Logo.wine.png',
  },
  {
    id: 2,
    imageUrl: auto,
  },
  {
    id: 3,
    imageUrl:
      'https://loghi-famosi.com/wp-content/uploads/2020/08/DHL-Logo.png',
  },
  {
    id: 4,
    imageUrl: auto1,
  },
  {
    id: 5,
    imageUrl:
      'https://gutscheine.faz.net/static/shop/22459/logo/Amazon_Gutschein.png?width=200&height=200&quality=50',
  },
  {
    id: 6,
    imageUrl: auto2,
  },
  {
    id: 7,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/1200px-United_Parcel_Service_logo_2014.svg.png',
  },
  {
    id: 8,
    imageUrl:
      'https://www.rossmann.de/medias/logo-rossmann-signet.svg?context=bWFzdGVyfGltYWdlc3wxNDk4M3xpbWFnZS9zdmcreG1sfGMzbHpMVzFoYzNSbGNpOXBiV0ZuWlhNdk16RTNOell5T0RRMk16a3lOakl2Ykc5bmJ5MXliM056YldGdWJpMXphV2R1WlhRdWMzWm58NTI4ODc3MjBhZTJmNGE1MzE2NjZhMWFkYjdkNzkzY2U4NDZkMWU5YTk1YTg0MzVjYjRlMjM3YzA1NDFhYTllZQ',
  },
  {
    id: 9,
    imageUrl: auto2,
  },
];

const Partners: React.FC = () => {
   const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 375px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const slidesPerView = isMobile ? 2 : isTablet ? 4 : isDesktop ? 7 : 7;
  return (
    <SwiperContainer>
      <TextWraper>
        <TitelPartners>
          {t('partners')} <br />
          <SpanTitel>{t('and')}</SpanTitel>
          <br /> {t('clients')}
        </TitelPartners>
        <TextPartners></TextPartners>
      </TextWraper>
      <Swiper
        loop={true}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        navigation={false}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        pagination={false}
        grabCursor={true}
        speed={4000}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 2 }).map((_, i) =>
          slides.map(slide => (
            <SwiperSlide
              key={`${slide.id}-${i}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20vh',
                fontSize: 36,
                paddingBottom: 50,
              }}
            >
              <Image
                loading="lazy"
                src={slide.imageUrl}
                alt={`Slide ${slide.id}`}
                // style={{ width: '200px', height: '190px', objectFit: 'cover' }}
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </SwiperContainer>
  );
};
export default Partners;
