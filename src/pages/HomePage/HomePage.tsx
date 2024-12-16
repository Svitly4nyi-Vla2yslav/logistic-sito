import { useState } from 'react';
import Calculator from '../../components/Calculator/Calculator';
import { HomeContainer, HomeTitel, HomeWrapperDetails, SpanTitel } from './HomePage.styled';
import Preloader from '../../components/Preloader/Preloader';
import HomeDetails from '../../components/HomeDetails/HomeDetails';
// import VideoBackground from '../../components/VideoBackground/VideoBackground';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };

  return (
    <HomeContainer>
      <HomeTitel>
        Transport<SpanTitel> On-Demand</SpanTitel> ‍for Your Business
      <HomeWrapperDetails><HomeDetails /></HomeWrapperDetails>  {' '}
      </HomeTitel>

      {/* <VideoBackground /> */}
      {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}
      {isLoaded && <Calculator />}
    </HomeContainer>
  );
};

export default Home;
