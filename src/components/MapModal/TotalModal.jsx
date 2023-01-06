import React, { useState, useRef, useEffect, Children } from "react";
import styled from "styled-components";
const TotalModal = (props) => {
  // const modalOn = useRef();

  // const handleClickOutside = ({ target }) => {
  //   if (isOpen && !modalOn.current.contains(target)) setIsOpen(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleClickOutside);
  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      {/* {isOpen && <StModalContainer ref={modalOn}>{Children}</StModalContainer>} */}
      <StModalContainer>x</StModalContainer>
    </>
  );
};

export default TotalModal;

const StModalContainer = styled.div`
  position: fixed;
  width: 25%;
  height: 100%;
  z-index: 200;
  top: 48px;
  left: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
