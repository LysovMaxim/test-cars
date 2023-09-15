import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.nav`
  height: 50px;
  width: 100%;
  background-color: #3470FF;
  margin-bottom:50px;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const HeaderList = styled.ul`
display: flex;
gap:50px
`;

const HeaderEl = styled(NavLink)`
text-decoration: none;
color: #fff;
padding: 10px 17px;
font-weight: 600;

  &.active {
    color: #000;
    background-color: #fff;
    border-radius: 14px;
  }
`;

export { HeaderContainer, HeaderList, HeaderEl};