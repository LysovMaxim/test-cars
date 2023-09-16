import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/СatalogPage/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import Layout from './Layout/Layout';
import Modal from './Modal/Modal';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { GlobalStyles } from './GlobalStyles';
// import axios from 'axios';

export const App = () => {
  const [dataOneCar, setdataOneCar] = useState({});
  const [showeModal, setShoweModal] = useState(false);

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
          <Route path="/catalog" element={<CatalogPage onClick={onModal} />} />
          <Route
            path="/favorites"
            element={<FavoritesPage onClick={onModal} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {showeModal && <Modal onClose={onModal} data={dataOneCar} />}
    </>
  );
};
