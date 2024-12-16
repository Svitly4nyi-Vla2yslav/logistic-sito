import styled from 'styled-components';


export const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
 @media (min-width: 1024px) {
display: flex;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        align-items: stretch;
        justify-content: space-between;
 }
`;

export const HomeWrapperDetails = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    // flex-direction: row;
    // justify-content: space-between;
  }
`;


export const HomeTitel = styled.h1`

  font-size: 32px;
  font-family: Monaco;
    transform: translate(0%, 0px);
    text-align: center;
    max-width: 70%;
    margin: 0 auto;
    margin-top: 90px;

     @media (min-width: 1240px) {
     font-size: 2.8rem;
    font-weight: 600;
    max-width: 78vh;
     }
   
`;

export const SpanTitel = styled.span`
 font-weight: bold;
 color: #6f42c1;
  transition: all 0.6s ease-in-out;
margin-bottom: 90px;
   &:hover {
   
    transform: scale(2.1);
      color: rgba(255, 255, 255, 0.8);
  }
`;
