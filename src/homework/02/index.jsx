import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Modal from './components/Modal';

const Homework = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    setModalOpen(true);
  };
  return (
    <>
      <button onClick={handleClick}>모달창 열기</button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  );
};

export default Homework;
