import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/СatalogPage/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import Layout from './Layout/Layout';
import Modal from './Modal/Modal';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  const [cars, setCars] = useState([]);
  const [dataOneCar, setdataOneCar] = useState({});
  const [showeModal, setShoweModal] = useState(false);
  const [page, setPage] = useState(1);


  const onModal = data => {
    setShoweModal(!showeModal);
    setdataOneCar(data);
  };

  const onLoadeMore = () => {
    setPage(() => page + 1);
  };

  useEffect(
    () => async () => {
      const { data } = await axios.get(
        `https://648d7fab2de8d0ea11e7e842.mockapi.io/adverts?page=${page}&limit=8`
      );
      return setCars(prevState => [...prevState, ...data]);
    },
    [page]
  );

  return (
    <>
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
              />
            }
          />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {showeModal && <Modal onClose={onModal} data={dataOneCar} />}
    </>
  );
};
