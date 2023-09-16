import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`;

const ModalContainer = styled.div`
width:541px;
height:752px;
background-color:#fff;
border-radius:24px
`
const BtnClose = styled.button`
     margin-top: 22px;
  margin-left: 507px;

`;

const Img = styled.img`
  height: 248px;
  width: 461px;
  border-radius: 14px;
  object-fit: cover;
    margin-left: auto;
  margin-right: auto;
`;

const BtnRental = styled(Link)`
`;

export {
    Overlay,
    ModalContainer,
    Img,
    BtnClose,
    BtnRental

};