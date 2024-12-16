import styled from "styled-components";

export const DetailsWrapper = styled.div`
max-width: 720px;
margin: 0 auto;
 @media (min-width: 1024px) {
 margin: 50px 50px;
 }
// width: 50%;
`;

export const DetailsTitle = styled.h2`
color: black;
    color: #fff;
    font-family: "Outfit", Sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    width: 100%;
    margin-bottom: 40px;
     @media (min-width: 1240px) {
     margin: 70px auto;
     font-size: 2.5rem;
    font-weight: 600;
     }
`;

export const DetailsList = styled.ul`

`;

export const ItemWrapper = styled.div`
 @media (min-width: 1240px) {
    //  margin: 0 auto;
     }
`;

export const DetailsItem = styled.li`
    text-align: left;
    flex-direction: row;
    display: flex;
    margin-bottom: 20px;
    gap: 40px;

     @media (min-width: 1240px) {
    gap: 50px;
    margin-bottom: 40px;
     }
}
`;

export const ItemTitle = styled.h3`
font-family: "Outfit", Sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
   color: #6f42c1;
   padding-bottom: 10px;

    @media (min-width: 1240px) {
    font-size: 1.8rem;
    font-weight: 600;
     }
`;

export const ItemText = styled.p`
font-family: "Outfit", Sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
     @media (min-width: 1240px) {
    //  margin: 0 auto;
     }
`;

export const WrapperIcons = styled.div`
    background-color: #6f42c1;
    color: #fff;
    fill: #fff;
    border-radius: 50%;
    height: 48px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
 transition: all 0.6s ease-in-out;

  @media (min-width: 1240px) {
    //  margin: 0 auto;
      height: 68px;
    padding: 20px;
     }
&:focus,
     &:hover {
    background-color: #fff;
    color:  #6f42c1;
    fill:  #6f42c1;
  }
`;



