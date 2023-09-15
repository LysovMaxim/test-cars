import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/СatalogPage/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import Layout from './Layout/Layout';
import Modal from './Modal/Modal';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { GlobalStyles } from './GlobalStyles';
// import axios from 'axios';

export const App = () => {
  const [cars, setCars] = useState([]);
  const [favorite, setFavorite] = useState(
    JSON.parse(window.localStorage.getItem('favorite')) ?? []
  );
  const [dataOneCar, setdataOneCar] = useState({});
  const [showeModal, setShoweModal] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  

  const onModal = data => {
    setShoweModal(!showeModal);
    setdataOneCar(data);
  };

  const onLoadeMore = () => {
    setPage(() => page + 1);
  };

  const addFavorit = car => {
    let isInArray = false;
    const index = favorite.findIndex(el => Number(el.id) === Number(car.id));
    if (index !== -1) {
      const newArr = favorite.filter(n => n.id !== car.id);
      setFavorite(newArr);
      isInArray = true;
    } else if (index) {
      isInArray = false;
    }
    if (!isInArray) setFavorite(prevState => [...prevState, car]);
  };

  useEffect(() => {
    const favoriteStringify = JSON.stringify(favorite);
    localStorage.setItem('favorite', favoriteStringify);
  }, [favorite]);

  // useEffect(
  //   () => async () => {
  //     const { data } = await axios.get(
  //       `https://648d7fab2de8d0ea11e7e842.mockapi.io/adverts?page=${page}&limit=8`
  //     );
  //     return setCars(prevState => [...prevState, ...data]);
  //   },
  //   [page]
  // );

  useEffect(() => {
    
    fetch(
      `https://648d7fab2de8d0ea11e7e842.mockapi.io/adverts?page=${page}&limit=8`
    )
      .then(res => res.json())
      .then(data => {
        setCars(prevState => [...prevState, ...data]);
      })
      .catch(error => {
        setError(error);
      });
    
    
  }, [page]);

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
                cars={cars}
                onClick={onModal}
                onClickLoadeMore={onLoadeMore}
                addFavorit={addFavorit}
              />
            }
          />
          <Route
            path="/favorites"
            element={<FavoritesPage onClick={onModal} favorite={favorite} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {showeModal && <Modal onClose={onModal} data={dataOneCar} />}
      {error && <h1>{error.message}</h1>}
    </>
  );
};
