import {
  Img,
  Container,
  ContainerCar,
  Icon,
  BtnIcon,
} from './CatalogPage.styled';

const CatalogPage = ({ cars, onClick }) => {
  return (
    <>
      <Container>
        {cars.map(
          car => (
            <ContainerCar key={car.id}>
              <Img src={car.img} alt="car" />
              <BtnIcon>
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
              <button
                onClick={() =>
                  onClick(car)
                }
              >
                Learn more
              </button>
            </ContainerCar>
          )
        )}
      </Container>
    </>
  );
};

export default CatalogPage;
