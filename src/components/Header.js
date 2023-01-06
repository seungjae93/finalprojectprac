import React from "react";
import styled from "styled-components";
import KakaoLogin from "../pages/KakaoLogin";

const Header = () => {
  return (
    <Wrap>
      <KakaoLogin />
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  background-color: powderblue;
  width: 100%;
  height: 3rem;
`;
