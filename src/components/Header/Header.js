import React from "react";
import RMDBLogo from "../../assets/react-movie-logo.svg";
import TMDBLogo from "../../assets/tmdb_logo.svg";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper className="py-5">
      <Content className="flex items-center justify-between">
        <LogoImg src={RMDBLogo} alt="rmdb logo" />
        <TMDBLogoImg src={TMDBLogo} alt="tmdb logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
