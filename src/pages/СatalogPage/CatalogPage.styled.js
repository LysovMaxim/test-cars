import styled from '@emotion/styled';
import { AiOutlineHeart } from 'react-icons/ai';

const Img = styled.img`
  height: 268px;
  width: 274px;
  border-radius: 14px;
  object-fit: cover;
`;
const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

const ContainerCar = styled.li`
  flex-basis: calc((100% - 29px) / 4);
  position: relative;
  margin-bottom:50px
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



export { Img, Container, ContainerCar, Icon, BtnIcon};
