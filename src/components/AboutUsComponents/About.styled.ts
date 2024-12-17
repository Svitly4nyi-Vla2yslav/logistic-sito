import styled from "styled-components";

export const TeamContainer = styled.div`
    border-radius: 10px;
    background-color: white;
    padding: 16px;
    display: flex;
    height: 73vh;
    margin: 40px 10px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
 @media (min-width: 768px) {

      width: 95%;
      }


 @media (min-width: 1024px) {
 width: 98%;
 height: 53vh;   
  display: flex;
align-content: flex-start;

        }
`;

export const TeamText = styled.h2`
position: static;
font-family: monospace;
margin-bottom: 0;
padding-bottom: 24px;
font-size: 18px;
color: black;

@media (min-width: 1024px) {
 font-size: 24px;   
 text-align: center;
 width: 30%;
 padding-top: 10%;
    }

`;

export const VideoTeamWrapper = styled.div`
  width: 90%;
  height: 50%; /* Висота змінена для гарного вигляду */
  margin: 0 auto;
  position: absolute;
  overflow: hidden;
  border-radius: 20px;
  bottom: 22%;
  margin-top: 30px;

  @media (min-width: 768px) {
            margin: 0 auto;
        width: 90%;
        height: 58vh;
        border-radius: 10px;
        bottom: 5%;
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
        width: 50%;
        right: 3%;
        bottom: 10%;
        height: 40vh;
        border-radius: 10px;
  }
  @media (min-width: 1324px) {
   bottom: 18%;
  }       

`;

export const VideoTeamWork = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: static;
  inset: 0; /* Центрування відео */
  border-radius: inherit; /* Наслідування border-radius від батьківського контейнера */
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
