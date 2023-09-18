import styled from '@emotion/styled';

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
  width: 541px;
  height: 752px;
  background-color: #fff;
  border-radius: 24px;
  padding-left: 35px;
  padding-right: 35px;
`;
const BtnClose = styled.button`
  margin-top: 22px;
  margin-left: 470px;
`;

const Img = styled.img`
  height: 248px;
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
`;

const BtnRental = styled.a``;

const InfoCar = styled.div`
  display: flex;
  gap: 2px;
  margin-top:15px;
  margin-bottom:15px
`;

const InfoCarlist = styled.div`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
`;

const InfoCarModel = styled.div`
  color: #3470ff;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
`;
const Delimiter = styled.span`
  color: rgba(18, 20, 23, 0.1);
  margin-left: 6px;
  margin-right: 6px;
`;

const DataCar = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const ContainerDataCar = styled.div`
width:277px
`


const InfoDescription = styled.p`
color: #121417;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin-top:14px;
margin-bottom:24px

`
const Accessories = styled.div`
color: #121417;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;
margin-bottom:8px
`
const AccessoriesItem = styled.span`
color: rgba(18, 20, 23, 0.50);
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
`
const Rental = styled.div`
color: #121417;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; 
margin-top:24px;
margin-bottom:15px
`

export { Overlay, ModalContainer, Img, BtnClose, BtnRental,InfoCar,InfoCarlist,InfoCarModel,Delimiter,DataCar,ContainerDataCar,InfoDescription,Accessories,AccessoriesItem,Rental};
