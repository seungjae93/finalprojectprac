import React, { useState } from "react";
import styled from "styled-components";

const SubModal = (props) => {
  console.log("rignt         :", props);
  return (
    <>
      <StModalContainer>x</StModalContainer>
    </>
  );
};

export default SubModal;

const StModalContainer = styled.div`
  position: fixed;
  width: 15%;
  height: 100%;
  z-index: 200;
  top: 48px;
  right: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
