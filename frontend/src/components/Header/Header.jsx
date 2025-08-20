import React from "react";
import * as S from "./styledHeader";

function Header() {
  return (
    <>
      <S.Header>
        <S.Logo>
          <S.Image src="/BORABICO.png" />

          <S.Slogan>Bicos <S.Span>rápidos</S.Span>, oportunidades <S.Span>reais</S.Span>.</S.Slogan>
        </S.Logo>

        <S.Buttons>
          <S.Register to="/cadastrar">Cadastre-se agora</S.Register>

          <S.Login to="/entrar">Entrar</S.Login>

        </S.Buttons>
      </S.Header>
    </>
  );
}

export default Header;
