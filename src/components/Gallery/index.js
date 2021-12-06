import ModalImage from "react-modal-image";

import * as S from "./styles";

const images = [
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
  {
    title: "Piscina",
    description: "Piscina aquecida",
    image: "/piscina.png",
  },
];

function Content() {
  return (
    <S.Gallery>
      <S.TitleWrapper>
        <S.Title>Galeria - Áreas Comuns</S.Title>
      </S.TitleWrapper>

      <S.GalleryWrapper>
        {images.map((item, index) => (
          <S.Box key={index}>
            <ModalImage
              small={item.image}
              large={item.image}
              alt={item.description}
            />

            <S.BoxName>{item.title}</S.BoxName>

            <S.BoxText>
              <S.BoxItems>
                <S.BoxIcon
                  src="/icons/search.svg"
                  alt="Ícone de uma lupa para Ampliar Foto"
                />
                <S.BoxTitle>Ampliar Foto</S.BoxTitle>
                <S.BoxDescription>{item.title}</S.BoxDescription>
              </S.BoxItems>
            </S.BoxText>
          </S.Box>
        ))}
      </S.GalleryWrapper>
    </S.Gallery>
  );
}

export default Content;
