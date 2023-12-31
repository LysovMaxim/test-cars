import styled from '@emotion/styled';
import { PiHeartDuotone } from 'react-icons/pi';

// -----------------Form---------------------------

const Form = styled.form`
  display: flex;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerBrandAndPrice = styled.span`
  position: absolute;
  top: -25px;
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const ContainerInput = styled.div`
  position: relative;
`;

const InputMileage = styled.span`
  position: absolute;
  top: -25px;
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const InputFrom = styled.input`
  height: 48px;
  width: 160px;
  border-radius: 14px 0px 0px 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  padding-left: 62px;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const InputPrice = styled.input`
  height: 48px;
  width: 160px;
  background: #f7f7fb;
  border: none;
  border-radius: 0px 14px 14px 0px;
  outline: none;
  padding-left: 42px;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const InputLabelFrom = styled.label`
  position: absolute;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  top: 14px;
  left: 15px;
`;

const InputLabelTo = styled.label`
  position: absolute;
  top: 14px;
  left: 15px;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const BtnFind = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  border-radius: 12px;
  background: #3470ff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 18px;
`;

// ---------------Сars-----------------------------

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
  margin-top: 50px;
`;

const ContainerMain = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

const ContainerCar = styled.li`
  flex-basis: calc((100% - 87px) / 4);
  position: relative;
  margin-bottom: 50px;
  gap: 29px;
  height: 450px;
  width: 274px;
  position: relative;
  overflow-wrap: break-word;
`;

const Icon = styled(PiHeartDuotone)`
  width: 18px;
  height: 18px;

  fill: ${props => {
    if (props.activ === undefined) return '#fff';
    if (props.activ === 'activ') return '#3470FF';
    if (props.activ === 'noActiv') return '#fff';
  }};
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
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 8px;
  max-width: 274px;
`;

const Delimiter = styled.span`
  color: rgba(18, 20, 23, 0.1);
  margin-left: 6px;
  margin-right: 6px;
`;

const InfoCar = styled.div`
  display: flex;
  gap: 2px;
`;

const InfoCarlist = styled.div`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
`;

const InfoCarModel = styled.div`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
`;

const InfoCarPrice = styled.div`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-right: 8px;
`;

const DataContainer = styled.div`
  width: 274px;
`;

const DataCar = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const BtnLearnMore = styled.button`
  border-radius: 12px;
  background: #3470ff;
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;

const BtnLodeMore = styled.button`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  background: inherit;
  border: none;
  margin-bottom: 150px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

export {
  Img,
  Container,
  ContainerCar,
  ContainerMain,
  Icon,
  BtnIcon,
  BtnLodeMore,
  ContainerInfo,
  InfoCar,
  InfoCarlist,
  InfoCarModel,
  InfoCarPrice,
  DataCar,
  Delimiter,
  DataContainer,
  BtnLearnMore,
  InputFrom,
  InputPrice,
  Form,
  BtnFind,
  InputLabelFrom,
  InputLabelTo,
  ContainerInput,
  InputMileage,
  ContainerBrandAndPrice,
};
