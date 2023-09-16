import { Overlay, ModalContainer,Img,BtnClose,BtnRental } from './Modal.styled';
import { useEffect } from 'react';


const Modal = ({ data, onClose }) => {
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

    const handleCallClick = () => {
    window.location.href = 'tel:+380730000000';
  };
  

  return (
    <>
      <Overlay onClick={hendleBeckdropClick}>
        <ModalContainer>
          <BtnClose onClick={onClose}>+</BtnClose>
          <Img src={data.img} alt="" />
          <h1>{data.model}</h1>
          <BtnRental to="#" onClick={handleCallClick}>Rental car</BtnRental>
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default Modal;
