import styled from '@emotion/styled';
import { AiOutlineHeart } from 'react-icons/ai';

const Img = styled.img`
  height: 268px;
  width: 274px;
  border-radius: 14px;
  object-fit: cover;
`;
const Container = styled.div`
  width: 1200px;
    margin-left: auto;
  margin-right: auto;

`;

const ContainerMain = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

const ContainerCar = styled.li`
  flex-basis: calc((100% - 87px) / 4);
  position: relative;
  margin-bottom:50px;
  gap:29px
`;

const Icon = styled(AiOutlineHeart)`
  fill: #ffff;
  width: 18px;
  height: 18px;
`;

const BtnIcon = styled.button`
  position: absolute;
  left: 240px;
  top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const ContainerInfo = styled.div`
  display: flex;
  justify-content:space-between
`;

const InfoCar = styled.div`
  display: flex;
`;

const BtnLodeMore= styled.button`
border-radius: 12px;
background: #3470FF;
display: flex;
width: 274px;
height: 44px;
padding: 12px 99px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border:none;
color: #FFF;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
`;


export { Img, Container, ContainerCar,ContainerMain, Icon, BtnIcon,BtnLodeMore,ContainerInfo,InfoCar};
