import Calculator from '../../components/Calculator/Calculator';
// import ContactForm from '../../components/ContactForm/ContactForm';
import { HomeContainer } from './HomePage.styled';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Calculator /> 
      
    </HomeContainer>
  );
};

export default Home;
