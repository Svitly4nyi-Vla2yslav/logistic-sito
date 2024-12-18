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
import { useTranslation } from 'react-i18next';
const AboutInfo: React.FC = () => {
    const { t } = useTranslation();

  return (
    <AboutContainer>
     <TitelSpan>{t('our_mission')}</TitelSpan>
<AboutTitel>
  {t('about_title', { highlight: <AboutSpan>{t('highlight')}</AboutSpan> })}
</AboutTitel>
<TeamContainer>
  <TeamText>{t('team_text')}</TeamText>
  <VideoTeamWrapper>
    <VideoTeamWork autoPlay loop muted src={Team} />
  </VideoTeamWrapper>
</TeamContainer>

    </AboutContainer>
  );
};

export default AboutInfo;
