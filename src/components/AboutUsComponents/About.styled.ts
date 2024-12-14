import styled from "styled-components";

export const TeamContainer = styled.div`
    border-radius: 10px;
    background-color: white;
    padding: 16px 16px 16px 48px;
    display: flex;
`;

export const TeamText = styled.h2`
font-family: Monaco;
margin-bottom: 0;
        padding-bottom: 24px;
        font-size: 18px;
`;

export const VideoTeamWrapper = styled.div`
  object-fit: cover;
    background-position: 50%;
    background-size: cover;
    width: 80%;
    height: 10%;
    margin: auto;
    position: absolute;
    inset: -100%
    overflow: hidden;
`;

export const VideoTeamWork = styled.video`
  object-fit: cover;
    background-position: 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    inset: -100%
    
`;

export const AboutContainer = styled.div`
    display: flex
;
    flex-direction: column;
    align-items: center;
    margin: 80px auto;
`;

export const AboutTitel = styled.h1`
  font-size: 32px;
  font-family: Monaco;
    transform: translate(0%, 0px);
    text-align: center;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 90px;
`;

export const AboutSpan = styled.span`
 font-weight: bold;
 color: #6f42c1;
  transition: all 0.6s ease-in-out;

   &:hover {
   
    transform: scale(2.1);
      color: rgba(255, 255, 255, 0.8);
  }
`;

export const TitelSpan = styled.span`
  padding: 0.8rem;
  border: none;
  text-decoration: none;
  background: linear-gradient(90deg, #007bff, #6f42c1);
  color: white;
  display: inline-block;
  position: relative;
  margin: 10px 0px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 2px;
  border-radius: 10px;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  font-weight: bold;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    z-index: -1;
    background: linear-gradient(90deg, #6f42c1, #007bff);
    transition: width 1.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover,
  &:focus {
    color: #007bff;
    background: rgba(255, 255, 255, 0);

    &:before {
      width: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: #6f42c1;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
