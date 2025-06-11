import React from 'react';
import * as S from './styledHeader';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo>
        BORABICO
      </S.Logo>
      
      <S.AuthButtons>
        <S.LoginLink to="/login">
          Login
        </S.LoginLink>
        <S.RegisterLink to="/register">
          Cadastrar
        </S.RegisterLink>
      </S.AuthButtons>
    </S.HeaderContainer>
  );
}

export default Header;