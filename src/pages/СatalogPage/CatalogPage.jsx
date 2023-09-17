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
  BtnLearnMore,
  InputFrom,
  InputPrice,
  Form,
  BtnFind,
  InputLabelFrom,
  InputLabelTo,
  ContainerInput,
  InputMileage,
  ContainerBrandAndPrice,
} from './CatalogPage.styled';
import Select from 'react-select';
import { mark, price } from '../../selectData';

const CatalogPage = ({
  onClick,
  onSubmit,
  cars,
  addFavorit,
  onLoadeMore,
  error,
  dataMark,
  dataPrice,
  from,
  to,
  onMark,
  onPrice,
  onFrom,
  onTo
}) => {
  const customStylesMark = {
    control: provided => ({
      ...provided,
      borderRadius: '14px',
      background: '#F7F7FB',
      color: 'red',
      width: '224px',
      height: '48px',
      border: 'none',
      marginRight: '18px',
    }),
    singleValue: provided => ({
      ...provided,
    }),
  };

  const customStylesPrice = {
    control: provided => ({
      ...provided,
      borderRadius: '14px',
      background: '#F7F7FB',
      color: '#121417',
      width: '125px',
      height: '48px',
      border: 'none',
      marginRight: '18px',
    }),
    option: provided => ({
      ...provided,
    }),
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <ContainerInput>
          <ContainerBrandAndPrice>Car brand</ContainerBrandAndPrice>
          <Select
            styles={customStylesMark}
            placeholder="Enter the text"
            options={mark}
            value={dataMark}
            onChange={onMark}
          />
        </ContainerInput>
        <ContainerInput>
          <ContainerBrandAndPrice>Price/ 1 hour</ContainerBrandAndPrice>
          <Select
            styles={customStylesPrice}
            placeholder="To $"
            options={price}
            value={dataPrice}
            onChange={onPrice}
          />
        </ContainerInput>
        <ContainerInput>
          <InputMileage>Сar mileage / km</InputMileage>
          <InputLabelFrom>From</InputLabelFrom>
          <InputFrom type="text" name="from" value={from} onChange={onFrom} />
        </ContainerInput>
        <ContainerInput>
          <InputLabelTo>To</InputLabelTo>
          <InputPrice type="text" name="to" value={to} onChange={onTo} />
        </ContainerInput>

        <BtnFind>Search</BtnFind>
      </Form>
      <Container>
        <ContainerMain>
          {cars.map(car => (
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
          {cars.length >= 8 && cars.length < 25 && (
            <BtnLodeMore onClick={onLoadeMore}>Load more</BtnLodeMore>
          )}
        </ContainerMain>
      </Container>
      {error && <h1>{error.message}</h1>}
    </>
  );
};

export default CatalogPage;
