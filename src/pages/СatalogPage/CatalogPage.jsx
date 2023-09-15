import {
  Img,
  Container,
  ContainerCar,
  Icon,
  BtnIcon,
  BtnLodeMore,
  ContainerInfo,
  InfoCar,
  ContainerMain,
} from './CatalogPage.styled';

const CatalogPage = ({ cars, onClick, onClickLoadeMore, addFavorit }) => {
  return (
    <>
      <Container>
        <ContainerMain>
          {cars.map(car => (
            <ContainerCar key={car.id}>
              <Img src={car.img} alt="car" />
              <BtnIcon onClick={() => addFavorit(car)}>
                <Icon id={car.id} />
              </BtnIcon>
              <ContainerInfo>
                <InfoCar>
                  <div>{car.make}</div>
                  <div>{car.model},</div>
                  <div>{car.year}</div>
                </InfoCar>
                <div>
                  <div>{car.rentalPrice}</div>
                </div>
              </ContainerInfo>
              <ul>
                <li>{car.address}</li>
                <li>{car.rentalCompany}</li>
                <li>{car.type}</li>
                <li>{car.model}</li>
                <li>{car.id}</li>
                <li>{car.accessories[1]}</li>
              </ul>
              <BtnLodeMore onClick={() => onClick(car)}>Learn more</BtnLodeMore>
            </ContainerCar>
          ))}
          {cars.length >= 8 && (
            <button onClick={() => onClickLoadeMore()}>Load more</button>
          )}
        </ContainerMain>
      </Container>
    </>
  );
};

export default CatalogPage;
