import {
  Img,
  Container,
  ContainerCar,
  ContainerInfo,
  InfoCar,
  ContainerMain,
  InfoCarlist,
  InfoCarModel,
  InfoCarPrice,
  DataCar,
  Delimiter,
  DataContainer,
  BtnLearnMore,
  BtnIcon,
  Icon,
} from '../CatalogPage/CatalogPage.styled';

const FavoritesPage = ({ onClick, addFavorit, favorite }) => {
  return (
    <>
      <Container>
        <ContainerMain>
          {favorite.map(car => (
            <ContainerCar key={car.id}>
              <Img src={car.img} alt="car" />
              <BtnIcon onClick={() => addFavorit(car)}>
                <Icon id={car.id} activ={car.activ} />
              </BtnIcon>
              <ContainerInfo>
                <InfoCar>
                  <InfoCarlist>{car.make}</InfoCarlist>
                  <InfoCarModel>{car.model}</InfoCarModel>
                  <InfoCarlist>,{car.year}</InfoCarlist>
                </InfoCar>
                <div>
                  <InfoCarPrice>{car.rentalPrice}</InfoCarPrice>
                </div>
              </ContainerInfo>
              <DataContainer>
                <DataCar>{car.address}</DataCar>
                <Delimiter>|</Delimiter>
                <DataCar>{car.rentalCompany}</DataCar>
                <Delimiter>|</Delimiter>
                <DataCar>{car.type}</DataCar>
                <Delimiter>|</Delimiter>
                <DataCar>{car.model}</DataCar>
                <Delimiter>|</Delimiter>
                <DataCar>{car.id}</DataCar>
                <Delimiter>|</Delimiter>
                <DataCar>{car.accessories[0]}</DataCar>
              </DataContainer>
              <BtnLearnMore onClick={() => onClick(car)}>
                Learn more
              </BtnLearnMore>
            </ContainerCar>
          ))}
        </ContainerMain>
      </Container>
    </>
  );
};

export default FavoritesPage;
