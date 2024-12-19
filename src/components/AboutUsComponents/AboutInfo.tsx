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
            Providing Full Range Of Transportation Worldwide
          </TextColorise>
          <TitleAbout data-aos="fade-up" data-aos-duration="4000">
            Reliable Logistic & Transport Solutions Saves Your Time and money!
          </TitleAbout>
          <TextWrapper>
            <TextWrapper>
              <TextInfo data-aos="fade-up" data-aos-duration="3000">
                Seto logistic Group is a representative logistics operator
                providing full range of service in the sphere of customs
                clearance transportation worldwide for any cargo
              </TextInfo>
              <TextInfo data-aos="fade-up" data-aos-duration="3000">
                We pride ourselves on providing the best transport and shipping
                services available allover the world. Our skilled personnel,
                utilising the latest communications, tracking and combined with
                experience through integrated supply chain solutions!
              </TextInfo>
            </TextWrapper>
            <ul>
              <li>
                <TextList data-aos="fade-up" data-aos-duration="3000">
                  ✔️ Quality{' '}
                </TextList>
                <TextInfo data-aos="fade-up" data-aos-duration="3000">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </TextInfo>
              </li>
              <li>
                <TextList data-aos="fade-up" data-aos-duration="3000">
                  ✔️ Rellability
                </TextList>
                <TextInfo data-aos="fade-up" data-aos-duration="3000">
                  We provide with cargo safety throughout all the stages of our
                  delivery process..
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
