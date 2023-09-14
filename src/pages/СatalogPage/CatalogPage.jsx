import {
  Img,
  Container,
  ContainerCar,
  Icon,
  BtnIcon,
} from './CatalogPage.styled';

const CatalogPage = ({ cars, onClick, onClickLoadeMore, addFavorit }) => {
  return (
    <>
      <Container>
        {cars.map(car => (
          <ContainerCar key={car.id}>
            <Img src={car.img} alt="car" />
            <BtnIcon onClick={() => addFavorit(car)}>
              <Icon />
            </BtnIcon>
            <ul>
              <li>{car.make}</li>
              <li>{car.model}</li>
              <li>{car.year}</li>
              <li>{car.rentalPrice}</li>
            </ul>
            <ul>
              <li>{car.address}</li>
              <li>{car.rentalCompany}</li>
              <li>{car.type}</li>
              <li>{car.model}</li>
              <li>{car.id}</li>
              <li>{car.accessories[1]}</li>
            </ul>
            <button onClick={() => onClick(car)}>Learn more</button>
          </ContainerCar>
        ))}
        {cars.length >= 8 && <button onClick={() => onClickLoadeMore()}>Load more</button>}
      </Container>
    </>
  );
};

export default CatalogPage;
