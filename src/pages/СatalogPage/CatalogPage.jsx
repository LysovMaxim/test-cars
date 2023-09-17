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
  InputFrom,
  InputPrice,
  Form,
  BtnFind,
  InputLabelFrom,
  InputLabelTo,
  ContainerInput,
  InputMileage
} from './CatalogPage.styled';
import Select from 'react-select';
import { mark, price } from '../../selectData';

const CatalogPage = ({ onClick }) => {
  const [cars, setCars] = useState([]);
  const [favorite, setFavorite] = useState(
    JSON.parse(window.localStorage.getItem('favorite')) ?? []
  );
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [dataMark, setMark] = useState('');
  const [dataPrice, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [allCars, setAllCars] = useState([]);
  const [render, setRender] = useState(false);

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

  const onMark = selectedOption => {
    setMark(selectedOption);
  };

  const onPrice = selectedOption => {
    setPrice(selectedOption);
  };
  const onFrom = e => {
    setFrom(e.target.value);
  };
  const onTo = e => {
    setTo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    fetch(`https://648d7fab2de8d0ea11e7e842.mockapi.io/adverts`)
      .then(res => res.json())
      .then(data => {
        setAllCars(data);
        setRender(true);
      })
      .catch(error => {
        setError(error);
      });
  };

  useEffect(() => {
    if (render) {
      const arrayCars = [...allCars];
      if (dataMark || dataPrice || (from && to)) {
        const filter = arrayCars.filter(car => {
          const mark = !dataMark || car.make === dataMark.value;
          const price =
            !dataPrice ||
            Number(car.rentalPrice.replace(/[^0-9.-]+/g, '')) <=
              Number(dataPrice.value);
          const mileage =
            (!from && !to) || (car.mileage >= from && car.mileage <= to);
          return mark && price && mileage;
        });

        setCars(filter);
        setMark('');
        setPrice('');
        setFrom('');
        setTo('');
      }

      setRender(false);
    }
  }, [render, from, to, dataMark, dataPrice, allCars]);

  const customStylesMark = {
    control: provided => ({
      ...provided,
      borderRadius: '14px',
      background: '#F7F7FB',
      color: '#121417',
      width: '224px',
      height: '48px',
      border: 'none',
      marginRight: '18px',
    }),
    option: provided => ({
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
        <Select
          styles={customStylesMark}
          placeholder="Enter the text"
          options={mark}
          value={dataMark}
          onChange={onMark}
        />
        <Select
          styles={customStylesPrice}
          placeholder="To $"
          options={price}
          value={dataPrice}
          onChange={onPrice}
        />
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
