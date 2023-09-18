import {
  Overlay,
  ModalContainer,
  Img,
  BtnClose,
  BtnRental,
  InfoCar,
  InfoCarlist,
  InfoCarModel,
  Delimiter,
  DataCar,
  ContainerDataCar,
  InfoDescription,
  Accessories,
  AccessoriesItem,
  Rental,
} from './Modal.styled';
import { useEffect } from 'react';

const Modal = ({ data, onClose }) => {
  const contactNumber = '+380730000000';
  console.log(data);
  useEffect(() => {
    const hendleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, [onClose]);

  const hendleBeckdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={hendleBeckdropClick}>
        <ModalContainer>
          <BtnClose onClick={onClose}>+</BtnClose>
          <Img src={data.img} alt="" />
          <InfoCar>
            <InfoCarlist>{data.make}</InfoCarlist>
            <InfoCarModel>{data.model},</InfoCarModel>
            <InfoCarlist>{data.year}</InfoCarlist>
          </InfoCar>
          <ContainerDataCar>
            <DataCar>{data.address}</DataCar>
            <Delimiter>|</Delimiter>
            <DataCar>id: {data.id}</DataCar>
            <Delimiter>|</Delimiter>
            <DataCar>Year: {data.year}</DataCar>
            <Delimiter>|</Delimiter>
            <DataCar>Type: {data.type}</DataCar>
            <Delimiter>|</Delimiter>
            <DataCar>Fuel Consumption{data.fuelConsumption}</DataCar>
            <Delimiter>|</Delimiter>
            <DataCar>Engine Size:{data.engineSize}</DataCar>
          </ContainerDataCar>
          <InfoDescription>{data.description}</InfoDescription>
          <Accessories>Accessories and functionalities:</Accessories>
          <div>
            {data.accessories.map((info, index) => (
              <>
                <AccessoriesItem key={index}>{info}</AccessoriesItem>
                <Delimiter>|</Delimiter>
              </>
            ))}
          </div>
          <Rental>Rental Conditions:</Rental>
          <div>
            {data.functionalities.map((info, index) => (
              <span key={index}>{info}</span>
            ))}
          </div>
          <div>Rental Conditions:</div>
          <BtnRental href={`tel:${contactNumber}`}>Rental Car</BtnRental>
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default Modal;
