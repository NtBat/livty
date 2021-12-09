import Image from "next/image";
import { useState } from "react";

import * as S from "./styles";

const menu = [
  {
    title: "Início",
    link: "/",
  },
  {
    title: "Localização",
    link: "#localizacao",
  },
  {
    title: "Conforto",
    link: "#conforto",
  },
  {
    title: "Conteúdo",
    link: "#conteudo",
  },
  {
    title: "Plantas",
    link: "#plantas",
  },
  {
    title: "Fale Conosco",
    link: "#contato",
  },
];

function Header() {
  const [menuBurger, setActiveMenuBurger] = useState(false);

  function handleBurger() {
    setActiveMenuBurger(!menuBurger);
  }

  return (
    <S.Header>
      <div className="container">
        <S.Wrapper>
          <Image
            src="/icons/logo.svg"
            width="218px"
            height="44px"
            alt="Logo da Livty"
          />

          <S.Menu>
            {menu.map((item, index) => (
              <S.MenuItem key={index} href={item.link}>
                {item.title}
              </S.MenuItem>
            ))}
          </S.Menu>

          <S.Bars onClick={handleBurger}>
            <S.BarsTop className={menuBurger ? "active" : ""} />
            <S.BarsMid className={menuBurger ? "active" : ""} />
            <S.BarsBot className={menuBurger ? "active" : ""} />
          </S.Bars>
        </S.Wrapper>
      </div>

      <S.MenuMobile open={menuBurger}>
        <S.MenuMobileContent>
          <S.MenuMobileHeader>
            <Image
              src="/icons/logo.svg"
              width="218px"
              height="44px"
              alt="Logo da Livty"
            />
            <S.MenuClose onClick={handleBurger}>X</S.MenuClose>
          </S.MenuMobileHeader>

          <S.MenuMobileNav>
            {menu.map((item, index) => (
              <S.MenuItem key={index} href={item.link} onClick={handleBurger}>
                {item.title}
              </S.MenuItem>
            ))}
          </S.MenuMobileNav>
        </S.MenuMobileContent>
      </S.MenuMobile>
    </S.Header>
  );
}

export default Header;
