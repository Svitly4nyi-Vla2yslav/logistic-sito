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
// import { t } from 'i18next';
import { Trans, useTranslation } from 'react-i18next';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

const HomeDetails: React.FC = () => {
    const { t } = useTranslation();
    // useEffect(() => {
    //     AOS.init({ duration: 3000 });
    //   }, []);

  return (
    <DetailsWrapper >
   <DetailsTitle>
  <Trans
    i18nKey="details_title"
    components={{ highlight1: <SpanTitel /> }}
  />
</DetailsTitle>
<DetailsList>
  <DetailsItem>
    <WrapperIcons>
      <RocketLaunchIcon />
    </WrapperIcons>
    <ItemWrapper>
      <ItemTitle>{t('details_list.0.title')}</ItemTitle>
      <ItemText>{t('details_list.0.text')}</ItemText>
    </ItemWrapper>
  </DetailsItem>
  <DetailsItem>
    <WrapperIcons>
      <SecurityIcon />
    </WrapperIcons>
    <ItemWrapper>
      <ItemTitle>{t('details_list.1.title')}</ItemTitle>
      <ItemText>{t('details_list.1.text')}</ItemText>
    </ItemWrapper>
  </DetailsItem>
  <DetailsItem>
    <WrapperIcons>
      <EuroSymbolIcon />
    </WrapperIcons>
    <ItemWrapper>
      <ItemTitle>{t('details_list.2.title')}</ItemTitle>
      <ItemText>{t('details_list.2.text')}</ItemText>
    </ItemWrapper>
  </DetailsItem>
  <ItemText style={{ marginBottom: 50 }}>{t('details_footer')}</ItemText>
</DetailsList>

    </DetailsWrapper>
  );
};

export default HomeDetails;
