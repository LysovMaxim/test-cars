import styled from '@emotion/styled';
import { AiTwotoneHeart } from 'react-icons/ai';

const Img = styled.img`
  height: 268px;
  width: 274px;
  border-radius:14px;
`;
const Container = styled.ul`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
`;

const ContainerCar = styled.li`
flex-basis: calc((100% - 29px) / 4);
position:relative;
`;

const Icon = styled(AiTwotoneHeart)  `
fill:#ffff;
width:18px;
height:18px;

`;

const BtnIcon = styled.button  `
position:absolute;
left:240px;
top:14px;
display:flex;
justify-content: center;
align-items: center;
border:none;
background-color:inherit
`;

export {
  Img,
  Container,
  ContainerCar,
  Icon,
  BtnIcon
};