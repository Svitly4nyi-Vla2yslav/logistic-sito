import React from 'react';
import {
  DetailsWrapper,
  DetailsTitle,
  DetailsList,
  DetailsItem,
  ItemText,
  ItemTitle,
  ItemWrapper,
  WrapperIcons,
} from './HomeDetails.styled';

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import { SpanTitel } from '../../pages/HomePage/HomePage.styled';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

const HomeDetails: React.FC = () => {
    // useEffect(() => {
    //     AOS.init({ duration: 3000 });
    //   }, []);

  return (
    <DetailsWrapper >
      <DetailsTitle >
        Ваша компанія експрес-доставки <SpanTitel>з гарантією </SpanTitel>задоволення
      </DetailsTitle>
      <DetailsList>
        <DetailsItem >
          <WrapperIcons>
            <RocketLaunchIcon />
          </WrapperIcons>
          <ItemWrapper>
            <ItemTitle>Швидко</ItemTitle>
            <ItemText>
              Блискавичний прийом на місці приблизно за 60 хвилин
            </ItemText>
          </ItemWrapper>
        </DetailsItem>
        <DetailsItem>
          <WrapperIcons >
            {' '}
            <SecurityIcon/>
          </WrapperIcons>
          <ItemWrapper>
            <ItemTitle>Надійно</ItemTitle>
            <ItemText>
              Безпечні прямі поїздки та відстеження GPS у реальному часі
            </ItemText>
          </ItemWrapper>
        </DetailsItem>
        <DetailsItem  >
          <WrapperIcons>
            {' '}
            <EuroSymbolIcon />
          </WrapperIcons>
          <ItemWrapper>
            <ItemTitle>Недорого</ItemTitle>
            <ItemText>Спеціальні умови для діючих клієнтів</ItemText>
          </ItemWrapper>
        </DetailsItem>
        <ItemText style={{marginBottom: 50}}>
          Швидко, надійно, гнучко – ваша експрес-кур’єрська служба для безпечної
          доставки за конкурентними цінами!{' '}
        </ItemText>
      </DetailsList>
    </DetailsWrapper>
  );
};

export default HomeDetails;
