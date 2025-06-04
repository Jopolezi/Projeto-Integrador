import React from 'react';
import * as S from './styledHeader';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo>BORABICO</S.Logo>
      {/* <S.Nav>
        <S.NavItem href="/">Início</S.NavItem>
      </S.Nav> */}
      <S.AuthButtons>
        <S.LoginLink to="/login">Login</S.LoginLink>
        <S.RegisterLink to="/register">Registrar</S.RegisterLink>
      </S.AuthButtons>
    </S.HeaderContainer>
  );
}

export default Header;
