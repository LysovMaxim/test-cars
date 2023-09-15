
import styled from '@emotion/styled';

const Container = styled.div`
  flex-direction: column;
  height: calc(100vh - 50px);
  width: 100wv;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  
`;

const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
`;


export {
    Container,
    ContentMain
};