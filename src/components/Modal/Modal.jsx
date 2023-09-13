import { Overlay, ModalContainer } from './Modal.styled';
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

  return (
    <>
      <Overlay onClick={hendleBeckdropClick}>
        <ModalContainer>
          <img src={data.img} alt="" />
          <h1>{data.model}</h1>
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default Modal;
