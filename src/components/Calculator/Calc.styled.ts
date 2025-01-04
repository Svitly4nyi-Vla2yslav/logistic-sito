import styled from "styled-components";

export const CalculatorContainer = styled.div`
background: white;
    color: #000000;
    padding: 2rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    max-width: 600px;
    margin: 0 10px;
    border-radius: 10px;
    font-family: "Orbitron", sans-serif;
    height: 100%;
    z-index: 9;
     margin: 0 auto;
        margin-top: 30px;
  
  @media(min-width: 768px){
      margin: 0 auto;
      height: 100%;
  }

  @media(min-width: 1024px){
margin: 100px auto 30px 10px;
   height: 100%;
border-radius: 10px;
  }

  @media(min-width: 1240px){
          margin-top: 100px;
          margin-left: 50px;
          height: 88%;

  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.8rem;
    margin: 1rem 0;
    border: none;
    border-radius: 10px;
    background: #ffffff;
    color: black;
    font-size: 1rem;
    box-shadow: inset 0 0 5px #8b53ff;
    outline: none;
    font-weight: 800;

  &:focus {
    box-shadow: inset 0 0 10px #8b53ff;
  }
`;

export const Button = styled.button`
  width: 100%;
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

export const WrapperChekbox = styled.div`
   @media(min-width: 1240px){
  margin: 34px auto 0px auto;
        display: flex;
        height: 9vh;
    }

  }
`;

export const LabelChekbox = styled.label`
font-size: 14px;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
     @media(min-width: 1240px){
        display: flex;
          height: 1vh;

  }
`
 
export const InputSelect = styled.input`
margin: 10px;
`;

export const Titel = styled.h2`
font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;
`;

export const Result = styled.p`
color: #16f116;
font-size: 25px;
line-height: 1.29;
text-align: center;
`;

export const TextCalc = styled.p`
font-size: 14px;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;

`;

export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ButtonSelect = styled.button`
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  font-size: 1rem;
  font-family: 'Orbitron', sans-serif;
  text-decoration: none;
  background: linear-gradient(90deg, #007bff, #6f42c1);
  color: white;
  display: inline-block;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 2px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    color: #007bff;
    background: rgba(255, 255, 255, 0);

    &:before {
      width: 100%;
    }
  }
`;

export const Tooltip = styled.div`
  visibility: hidden;
  width: 250px;
  background-color: #fff;
  color: #333;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 100%;
  left: 70%;
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;

 @media(min-width: 1240px){
        width: 317px;

  }

  img {
    max-width: 100%;
    border-radius: 5px;
  }

  p {
    margin-top: 10px;
    font-size: 0.9rem;
  }
`;

export const ButtonWithTooltip = styled(ButtonContainer)`
  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;