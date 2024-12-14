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
import Team from "../../assets/video/team-video.mp4"
const AboutInfo: React.FC = () => {
  //   const { t } = useTranslation();

  return (
    <AboutContainer>
      <TitelSpan>Our Mission</TitelSpan>
      <AboutTitel>
        Make <AboutSpan>On-Demand Transport</AboutSpan> Effortless and
        Affordable for European Businesses.
      </AboutTitel>
      <TeamContainer>
        <TeamText>
          Meet a team of 180 Transport Experts who take care of your business.
        </TeamText>
        <VideoTeamWrapper>
            <VideoTeamWork autoPlay loop muted src={Team}/>
        </VideoTeamWrapper>
      </TeamContainer>
    </AboutContainer>
  );
};

export default AboutInfo;
