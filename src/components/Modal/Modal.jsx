import {
  Overlay,
  ModalContainer,
  Img,
  BtnClose,
  BtnRental,
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
          <ul>
            <li>{data.make}</li>
            <li>{data.model}</li>
            <li>{data.year}</li>
          </ul>
          <div>
            <span>{data.address}</span>
            <span>id: {data.id}</span>
            <span>Year: {data.year}</span>
            <span>Type: {data.type}</span>
            <span>Fuel Consumption{data.fuelConsumption}</span>
            <span>Engine Size:{data.engineSize}</span>
          </div>
          <p>{data.description}</p>
          <div>Accessories and functionalities:</div>
          <div>
            {data.accessories.map((info, index) => (
              <span key={index}>{info}</span>
            ))}
          </div>
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
