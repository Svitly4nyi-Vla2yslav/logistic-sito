import React from 'react';
import {
  Overlay,
  VideoBackgrounde,
  VideoContainer,
} from './VideoBackground.styled';
import video from '../../assets/video/66309272b77efe8e45161878_6645f88179126267f26148de_done_homepage_top_video-transcode.mp4';
import { useMediaQuery } from 'react-responsive';
import deckstop from "../../assets/video/66309272b77efe8e45161878_66505b355becabec00a9e7ca_done_homepage_map-transcode (1).mp4"

const VideoBackground: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

  return (
    <VideoContainer>
      {isMobile ? (
        <VideoBackgrounde autoPlay loop muted src={video} />
      ) : (
        <VideoBackgrounde autoPlay loop muted src={deckstop} />
      )}
      <Overlay />
    </VideoContainer>
  );
};

export default VideoBackground;
