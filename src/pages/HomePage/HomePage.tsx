import { useState } from "react";
import Calculator from "../../components/Calculator/Calculator";
import { HomeContainer } from "./HomePage.styled";
import Preloader from "../../components/Preloader/Preloader";

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };

  return (
    <HomeContainer>
      {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}
      {isLoaded && <Calculator />}
    </HomeContainer>
  );
};

export default Home;
