import React from 'react';
import {
  ContactWrapper,
  ContainerContact,
  Div,
  Email,
  ImageContainer,
  PhoneH5,
  TextColoriseH4,
  TextP,
  TitelH3,
} from './ContactInfa.styled';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { useTranslation } from 'react-i18next';

const ContactInfa: React.FC = () => {
    const { t } = useTranslation();
  return (
    <ContactWrapper>
    <TitelH3>{t('contact')}</TitelH3>
    <TextP>{t('contact_description')}</TextP>
    <Div><ContainerContact>
      <TextColoriseH4>{t('contact_email')}</TextColoriseH4>
      <ImageContainer>
        <EmailIcon />
      </ImageContainer>
      <PhoneH5>{t('email_label')}</PhoneH5>
      <Email href="mailto:Info@seto-logistic.com">Info@seto-logistic.com</Email>
    </ContainerContact>
    <ContainerContact>
      <TextColoriseH4>{t('contact_phone')}</TextColoriseH4>
      <ImageContainer>
        <PhoneAndroidIcon />
      </ImageContainer>
      <PhoneH5>{t('phone_label')}</PhoneH5>
      <Email href="tel:+48 510 119 436">+48 510 119 436</Email>
    </ContainerContact></Div>
  </ContactWrapper>
  );
};

export default ContactInfa;
