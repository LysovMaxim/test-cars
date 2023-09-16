import { useEffect, useRef, useState } from 'react';
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
} from './CatalogPage.styled';

const CatalogPage = ({ onClick }) => {
  const [cars, setCars] = useState([]);
  const [favorite, setFavorite] = useState(
    JSON.parse(window.localStorage.getItem('favorite')) ?? []
  );
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const count = useRef(0);

  const addFavorit = car => {
    let isInArray = false;
    const index = favorite.findIndex(el => Number(el.id) === Number(car.id));
    if (index !== -1) {
      delete car.activ;
      const newArr = favorite.filter(n => n.id !== car.id);
      setFavorite(newArr);
      isInArray = true;
    } else if (index) {
      isInArray = false;
    }
    if (!isInArray) {
      car.activ = 'activ';
      console.log(car);
      setFavorite(prevState => [...prevState, car]);
    }
  };



  useEffect(() => {
    if (count.current !== 0) {
      fetch(
        `https://648d7fab2de8d0ea11e7e842.mockapi.io/adverts?page=${page}&limit=8`
      )
        .then(res => res.json())
        .then(data => {
          update(data);
        })
        .catch(error => {
          setError(error);
        });
    }
    
    count.current++;
  }, [page]);

    useEffect(() => {
    const favoriteStringify = JSON.stringify(favorite);
    localStorage.setItem('favorite', favoriteStringify);
  }, [favorite]);

  const update = data => {
    const dataFavorite = localStorage.getItem('favorite');
    if (dataFavorite !== null) {
      const transformationJs = JSON.parse(dataFavorite);
      const updatedCars = data.map(item => {
        const update = transformationJs.find(
          updateItem => updateItem.id === item.id
        );
        return update || item;
      });
      setCars(prevState => [...prevState, ...updatedCars]);
    } else {
      setCars(prevState => [...prevState, ...data]);
    }
  };

  const onLoadeMore = () => {
    setPage(() => page + 1);
  };

  return (
    <>
      <Container>
        <ContainerMain>
          {cars.map(car => (
            <ContainerCar key={car.id}>
              <Img src={car.img} alt="car" />
              <BtnIcon onClick={()=>addFavorit(car)}>
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
