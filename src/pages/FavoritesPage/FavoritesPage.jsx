import {
  Img,
  Container,
  ContainerCar,
} from '../СatalogPage/CatalogPage.styled';

const FavoritesPage = ({ favorite }) => {
  return (
    <>
      <Container>
        {favorite.map(car => (
          <ContainerCar key={car.id}>
            <Img src={car.img} alt="car" />
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
          </ContainerCar>
        ))}
      </Container>
    </>
  );
};

export default FavoritesPage;