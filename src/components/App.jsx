import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/СatalogPage/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import Layout from './Layout/Layout';
import Modal from './Modal/Modal';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { GlobalStyles } from './GlobalStyles';
// import axios from 'axios';

export const App = () => {
  const [dataOneCar, setdataOneCar] = useState({});
  const [showeModal, setShoweModal] = useState(false);
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

  const onModal = data => {
    setShoweModal(!showeModal);
    setdataOneCar(data);
  };

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/catalog"
            element={
              <CatalogPage
                onClick={onModal}
                onSubmit={onSubmit}
                cars={cars}
                addFavorit={addFavorit}
                onLoadeMore={onLoadeMore}
                error={error}
                dataMark={dataMark}
                dataPrice={dataPrice}
                onMark={onMark}
                onPrice={onPrice}
                onFrom={onFrom}
                onTo={onTo}
              />
            }
          />
          <Route
            path="/favorites"
            element={<FavoritesPage onClick={onModal} addFavorit={addFavorit} favorite={favorite} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {showeModal && <Modal onClose={onModal} data={dataOneCar} />}
    </>
  );
};
