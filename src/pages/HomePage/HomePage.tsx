import { useState } from 'react';
import Calculator from '../../components/Calculator/Calculator';
import {
  HomeContainer,
  HomeTitel,
  HomeWrapperDetails,
  SpanTitel,
} from './HomePage.styled';
import Preloader from '../../components/Preloader/Preloader';
import HomeDetails from '../../components/HomeDetails/HomeDetails';
import Partners from '../../components/SlidePartners/Partners';
import VehicleCards from '../../components/CardVehicle/CardVehicle';
import React from 'react';
import Feedback from '../../components/Feedback/Feedback';
import { Trans } from 'react-i18next';
// import VideoBackground from '../../components/VideoBackground/VideoBackground';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <HomeContainer>
        <HomeTitel>
          <Trans
            i18nKey="home_title"
            components={{ highlight1: <SpanTitel /> }}
          />
          <HomeWrapperDetails data-aos="zoom-out-down">
            <HomeDetails />
          </HomeWrapperDetails>{' '}
        </HomeTitel>

        {/* <VideoBackground /> */}
        {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}
        {isLoaded && (
          <>
            <Calculator />
          </>
        )}
      </HomeContainer>
      <Partners />
      <VehicleCards />
      <Feedback />
    </>
  );
};

export default Home;
