import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import {
  AboutContainer,
  AboutSpan,
  AboutTitel,
  ImageAbout,
  ImageWrapper,
  InfoWrapper,
  TeamContainer,
  TeamText,
  TextColorise,
  TextInfo,
  TextList,
  TextWrapper,
  TitelSpan,
  VideoTeamWork,
  VideoTeamWrapper,
} from './About.styled';
import Team from '../../assets/video/team-video.mp4';
import { Trans, useTranslation } from 'react-i18next';
import { TitleAbout } from './About.styled';
import Image from '../../assets/image/about-image.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutInfo: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <AboutContainer>
      <TitelSpan>{t('our_mission')}</TitelSpan>
      <AboutTitel>
        <Trans
          i18nKey="about_title"
          components={{ highlight: <AboutSpan /> }}
        />
      </AboutTitel>
      <TeamContainer>
        <TeamText>{t('team_text')}</TeamText>
        <VideoTeamWrapper>
          <VideoTeamWork autoPlay loop muted src={Team} data-aos="zoom-in" />
        </VideoTeamWrapper>
      </TeamContainer>
      <InfoWrapper>
        <ImageWrapper data-aos="zoom-in">
          <ImageAbout src={Image} alt="Europa" />{' '}
        </ImageWrapper>
        <ImageWrapper>
          <TextColorise data-aos="fade-up" data-aos-duration="3000">
            {t('transportation_range')}
          </TextColorise>
          <TitleAbout data-aos="fade-up" data-aos-duration="4000">
            {t('logistic_solution')}
          </TitleAbout>
          <TextWrapper>
            <TextWrapper>
              <TextInfo data-aos="fade-up" data-aos-duration="3000">
                {t('seto_logistic_description')}
              </TextInfo>
              <TextInfo data-aos="fade-up" data-aos-duration="3000">
                {t('best_transport_services')}
              </TextInfo>
            </TextWrapper>
            <ul>
              <li>
                <TextList data-aos="fade-up" data-aos-duration="3000">
                  ✔️ {t('quality')}
                </TextList>
                <TextInfo data-aos="fade-up" data-aos-duration="3000">
                  {t('quality_description')}
                </TextInfo>
              </li>
              <li>
                <TextList data-aos="fade-up" data-aos-duration="3000">
                  ✔️ {t('reliability')}
                </TextList>
                <TextInfo data-aos="fade-up" data-aos-duration="3000">
                  {t('reliability_description')}
                </TextInfo>
              </li>
            </ul>
          </TextWrapper>
        </ImageWrapper>
      </InfoWrapper>
    </AboutContainer>
  );
};

export default AboutInfo;
