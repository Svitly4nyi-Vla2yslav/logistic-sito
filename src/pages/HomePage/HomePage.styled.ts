import styled from 'styled-components';


export const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
 @media (min-width: 1024px) {
display: flex
;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        align-items: stretch;
        justify-content: space-between;
 }
`;

export const HomeTitel = styled.h1`
  font-size: 32px;
  font-family: Monaco;
    transform: translate(0%, 0px);
    text-align: center;
    margin-top: 74px;
    max-width: 20%;
    margin: 0 auto;
`;

export const SpanTitel = styled.span`

 font-weight: bold;
 color: #00d1ff;
  transition: all 0.3s ease-in-out;

   &:hover {
   
    transform: scale(1.1);
      color: rgba(255, 255, 255, 0.8);
  }
`;
