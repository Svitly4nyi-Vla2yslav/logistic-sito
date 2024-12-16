import { Link as ScrollLink } from 'react-scroll'; 
import styled from "styled-components";

export const Link = styled(ScrollLink)`
// width: 100%;
// height: 100%;
`;
// Container for the card layout
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 425px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
  margin: 0 50px;
    grid-template-columns: repeat(2, 1fr);
  }
     @media (min-width: 1240px) {
     margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Styles for individual cards
export const Card = styled.div`
 background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: inset 0 0 5px #8b53ff;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain; 
  border-radius: 18px;
  transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
 overflow: hidden;
  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
`;

export const CardTitle = styled.h3`
text-align: center;
  margin: 10px 0;
  font-size: 24px;
  color: #333;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  padding: 10px;
  border: 1px solid #8b53ff;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const AdditionalOptions = styled.ul`
  font-size: 14px;
  color: #444;
  list-style-type: disc;
  padding-left: 20px;
  padding: 10px;
  background-color: #f2f4f9;
  border-radius: 8px;
  border: 1px solid #007bff;
  margin-bottom: 15px;
`;

export const Disclaimer = styled.p`
   font-size: 12px;
  color: #999;
  margin-top: 10px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

export const SectionTitle = styled.h2`

color: white;
 font-family: "Proxima Nova", sans-serif;
    font-weight: 300;
    letter-spacing: -.035em;
    margin: 90px auto;
    text-transform: uppercase;
    font-size: 1.9rem;
    line-height: 1.1;
        width: 90%;
        text-align: center;

`;