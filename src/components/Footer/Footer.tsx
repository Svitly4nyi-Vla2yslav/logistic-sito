import React, { useEffect, useState } from 'react';
import {
  FooterContainer,
  FooterItemText,
  FooterItemTitel,
  FooterLink,
  FooterList,
  FooterText,
  SocialLink,
  WrapperSocialLink,
} from './Footer.styled';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Logo } from '../Header/Header.styled';
import LogoIcon from '../../assets/icons/logo-seto_logistic.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SpanTitel } from '../../pages/HomePage/HomePage.styled';
const Footer: React.FC = () => {
  const { t } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <FooterContainer isScrolled={isScrolled}>
      <FooterList>
        <Link to="/home">
          <Logo to="/">
            <img src={LogoIcon} alt="Logo" />
          </Logo>
        </Link>
        <FooterItemText>{t('footerAdditionalText')}</FooterItemText>
        <FooterItemText>
          <Trans
            i18nKey="footer_item_text"
            components={{ company_name: <SpanTitel /> }}
          />
        </FooterItemText>
      </FooterList>
      <FooterList>
        <FooterItemTitel data-translate="usefulLinks">
          {t('usefulLinks')}
        </FooterItemTitel>
        <FooterLink to="/blog" data-translate="blog">
          {t('blog')}
        </FooterLink>
        <FooterLink to="/about" data-translate="projects">
          {t('projects')}
        </FooterLink>
        <FooterLink to="/contact" data-translate="contactUs">
          {t('contactUs')}
        </FooterLink>
      </FooterList>
      <FooterList>
        <FooterItemText
          style={{ borderBottom: '1px solid #8b53ff', width: 140 }}
          data-translate="socialMedia"
        >
          {t('socialMedia')}
        </FooterItemText>
        <WrapperSocialLink>
          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn 
              style={{
                fill: 'rgb(20, 124, 228)'
              }}/>
          </SocialLink>
          <SocialLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              style={{
                background: 'linear-gradient(50deg, #ff7f50, #1e90ff)',
                borderRadius: 8,
              }}
            />
          </SocialLink>
          <SocialLink
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook 
             style={{
              fill: ' #1e90ff'
            }}
            />
          </SocialLink>
          <SocialLink
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube 
             style={{
              fill: 'rgb(241, 38, 38)'
            }}/>
          </SocialLink>
          <SocialLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter 
             style={{
              fill: 'rgb(20, 124, 228)'
            }}/>
          </SocialLink>
        </WrapperSocialLink>
      </FooterList>
      <FooterText>{t('footer_copyright')}</FooterText>
    </FooterContainer>
  );
};

export default Footer;
