import styled from "styled-components";


export const VideoBackgrounde = styled.video`
 object-fit: cover;
    z-index: -100;
    background-position: 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    inset: -100%
    
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Прозоре затемнення */
  z-index: -1; /* Поставимо поверх відео */
`;

export const VideoContainer = styled.div`
 position: relative;
  width: 100%;

  overflow: hidden;
   color: #fff;
    // height: 200px;
    overflow: hidden;
     @media (min-width: 1023px) {
    //  height: 111vh;
     position : absolute;
     z-index:-1
    //  margin: 10px 10px 10px 10px;
     }
`;
export const Deckstop = styled.video`
object-fit: cover;
    z-index: -100;
    background-position: 50%;
    background-size: cover;
    width: 100%;
    height: 50%;
    margin: auto;
    position: fixed;
    inset: -100%
`;

