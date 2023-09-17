import styled from '@emotion/styled';

const Container = styled.div`
  flex-direction: column;
  height: calc(100vh - 50px);
  width: 100wv;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  max-width: 850px;
`;

export { Container, ContentMain, Info };
