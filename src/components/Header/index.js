import Image from "next/image";

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
        </S.Wrapper>
      </div>
    </S.Header>
  );
}

export default Header;
