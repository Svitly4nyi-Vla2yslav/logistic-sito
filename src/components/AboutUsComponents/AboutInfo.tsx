import React from 'react';
// import { useTranslation } from 'react-i18next';
import {
  AboutContainer,
  AboutSpan,
  AboutTitel,
  TeamContainer,
  TeamText,
  TitelSpan,
  VideoTeamWork,
  VideoTeamWrapper,
} from './About.styled';
import Team from '../../assets/video/team-video.mp4';
const AboutInfo: React.FC = () => {
  //   const { t } = useTranslation();

  return (
    <AboutContainer>
      <TitelSpan
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        Our Mission
      </TitelSpan>
      <AboutTitel data-aos="fade-up" data-aos-anchor-placement="top-center">
        Make <AboutSpan>On-Demand Transport</AboutSpan> Effortless and
        Affordable for European Businesses.
      </AboutTitel>
      <TeamContainer
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1500"
      >
        <TeamText>
          Meet a team of 180 Transport Experts who take care of your business.
        </TeamText>
        <VideoTeamWrapper>
          <VideoTeamWork autoPlay loop muted src={Team} />
        </VideoTeamWrapper>
      </TeamContainer>
    </AboutContainer>
  );
};

export default AboutInfo;
