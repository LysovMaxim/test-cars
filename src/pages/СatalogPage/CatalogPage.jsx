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
  InfoCarlist,
  InfoCarModel,
  InfoCarPrice,
  DataCar,
  Delimiter,
  DataContainer,
  BtnLearnMore
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
                <Icon id={car.id} activ={car.activ}/>
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
                <DataCar>{car.address}</DataCar><Delimiter>|</Delimiter>
                <DataCar>{car.rentalCompany}</DataCar><Delimiter>|</Delimiter>
                <DataCar>{car.type}</DataCar><Delimiter>|</Delimiter>
                <DataCar>{car.model}</DataCar><Delimiter>|</Delimiter>
                <DataCar>{car.id}</DataCar><Delimiter>|</Delimiter>
                <DataCar>{car.accessories[0]}</DataCar>
              </DataContainer>
              <BtnLearnMore onClick={() => onClick(car)}>Learn more</BtnLearnMore>
            </ContainerCar>
          ))}
          {cars.length >= 8 && cars.length < 25 && (
            <BtnLodeMore onClick={() => onClickLoadeMore()}>Load more</BtnLodeMore>
          )}
        </ContainerMain>
      </Container>
    </>
  );
};

export default CatalogPage;
