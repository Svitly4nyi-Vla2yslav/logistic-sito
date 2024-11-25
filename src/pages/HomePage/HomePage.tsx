import ContactForm from '../../components/ContactForm/ContactForm';
import { HomeContainer } from './HomePage.styled';

const Home: React.FC = () => {
  return <HomeContainer>
    <ContactForm/>
  </HomeContainer>;
};

export default Home;
