import { HeaderContainer, HeaderList, HeaderEl } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderList>
        <li>
          <HeaderEl to="/">Home</HeaderEl>
        </li>
        <li>
          <HeaderEl to="/catalog">Catalog</HeaderEl>
        </li>
        <li>
          <HeaderEl to="/favorites">Favorites</HeaderEl>
        </li>
      </HeaderList>
    </HeaderContainer>
  );
};
export default Header;
