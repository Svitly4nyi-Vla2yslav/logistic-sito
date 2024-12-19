import styled from "styled-components";


export const ContactWrapper = styled.div`
margin : 90px auto;
display: flex;
flex-direction: column;
 background-color: rgba(249, 249, 249, 0.28); /* півпрозорий фон */
  backdrop-filter: blur(1px);
border-radius: 12px;
width: 98%;
padding: 10px;
 @media (min-width: 768px) {
 width: 95%;
 margin: 90px auto;
display: flex;

 }
@media (min-width: 1024px) {
// display: flex;
// flex-direction: row;
width: 98%;
}
@media (min-width: 1240px) {
display: flex;
}

`;

export const ContainerContact = styled.div`
text-align: center;
padding:20px;
border: 1px solid  rgba(249, 249, 249, 0.28);
border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
       width: 350px;
&:focus,
     &:hover {
    background-color: rgba(249, 249, 249, 0.28);
    
  }
`;

export const TitelH3 = styled.h3`
font-size: 30px;
line-height: 1.2; 
text-align: center;  
font-family: Monaco;  
margin-bottom: 38px;
padding-top: 20px;
 color:  #6f42c1;
 @media (min-width: 768px) {
 font-size: 43px;
line-height: 57px;
 }

@media (min-width: 1024px) {


}
`;

export const TextP = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    line-height: 26px;
    color:rgb(255, 255, 255);
    margin: 0 auto;
    margin-bottom: 25px;
    text-align: center;
    max-width: 370px;

 @media (min-width: 768px) {
 
 }  
 @media (min-width: 1024px) {


}  
`;

export const ImageContainer = styled.div`
text-align: center;
 background-color: #6f42c1;/* півпрозорий фон */
  backdrop-filter: blur(1px);
  width: 50px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
    align-items: center;
border-radius: 10px;
color: #fff;
    fill: #fff;
&:focus,
     &:hover {
    background-color: #fff;
    color:  #6f42c1;
    fill:  #6f42c1;
  }

`;



export const TextColoriseH4 = styled.h4`
   font-family: Monaco;
    text-transform: capitalize;
    color: #8b53ff;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
line-height: 2;
    margin-bottom: 15px;

 @media (min-width: 768px) {
 line-height: 2;
 }

 @media (min-width: 1024px) {


}
`;

export const PhoneH5 = styled.h5`
font-family: Monaco;
    font-weight: 800;
    font-size: 18px;
    text-align: center;
    line-height: 29px;
    color: #222222;
    text-transform: capitalize;
margin-bottom: 10px;

 @media (min-width: 768px) {
 
 }  
 
 @media (min-width: 1024px) {


}
`;

export const Email = styled.a`
   font-family: Monaco;
    text-transform: capitalize;
    color: #8b53ff;
    font-size: 15px;
    text-align: center;
    font-weight: 700;
line-height: 2;
    margin-bottom: 15px;
    

 @media (min-width: 768px) {
 line-height: 2;
 }

 @media (min-width: 1024px) {


}
`;
export const Div = styled.div`
@media (min-width: 1240px) {
display: flex;
}

`;

