import React from 'react';
import styled from 'styled-components';

export default function Modal({ setModalOpen }) {
  const handleClick = () => {
    setModalOpen(false);
  };
  return (
    <Modals>
      <p>모달창</p>
      <button onClick={handleClick}>닫기</button>
    </Modals>
  );
}

const Modals = styled.div`
  background-color: yellow;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
