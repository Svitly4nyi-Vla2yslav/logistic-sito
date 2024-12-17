import { useState } from 'react';
import Calculator from '../../components/Calculator/Calculator';
import { HomeContainer, HomeTitel, HomeWrapperDetails, SpanTitel } from './HomePage.styled';
import Preloader from '../../components/Preloader/Preloader';
import HomeDetails from '../../components/HomeDetails/HomeDetails';
import Partners from '../../components/SlidePartners/Partners';
import VehicleCards from '../../components/CardVehicle/CardVehicle';
import React from 'react';
import Feedback from '../../components/Feedback/Feedback';
// import VideoBackground from '../../components/VideoBackground/VideoBackground';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };

  return (<>
    <HomeContainer >
      <HomeTitel  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        Transport<SpanTitel> On-Demand</SpanTitel> ‍for Your Business
      <HomeWrapperDetails  data-aos="zoom-out-down"><HomeDetails />
      
      </HomeWrapperDetails>  {' '}
      </HomeTitel>

      {/* <VideoBackground /> */}
      {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}
      {isLoaded && <><Calculator/></>}
    </HomeContainer>
    <Partners/>
    <VehicleCards/>
    <Feedback/>
    </>
  );
};

export default Home;
