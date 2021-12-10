import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

import * as S from "./styles";

const images = [
  {
    title: "Academia",
    description: "Academia",
    image: "/galeria_1.jpg",
  },
  {
    title: "Área externa",
    description: "Área externa",
    image: "/galeria_2.jpg",
  },
  {
    title: "Área externa",
    description: "Área externa",
    image: "/galeria_3.jpg",
  },
  {
    title: "Brinquedoteca",
    description: "Brinquedoteca",
    image: "/galeria_4.jpg",
  },
  {
    title: "Hall",
    description: "Hall",
    image: "/galeria_5.jpg",
  },
  {
    title: "Hall",
    description: "Hall",
    image: "/galeria_6.jpg",
  },
  {
    title: "Horta",
    description: "Horta",
    image: "/galeria_7.jpg",
  },
  {
    title: "Horta",
    description: "Horta",
    image: "/galeria_8.jpg",
  },
  {
    title: "Piscina",
    description: "Piscina",
    image: "/galeria_9.jpg",
  },
  {
    title: "Playground",
    description: "Playground",
    image: "/galeria_10.jpg",
  },
  {
    title: "Quiosque",
    description: "Quiosque",
    image: "/galeria_11.jpg",
  },
  {
    title: "Salão de Festas",
    description: "Salão de Festas",
    image: "/galeria_12.jpg",
  },
  {
    title: "Salão de Festas",
    description: "Salão de Festas",
    image: "/galeria_13.jpg",
  },
  {
    title: "Salão de Festas",
    description: "Salão de Festas",
    image: "/galeria_14.jpg",
  },
];

function Content() {
  return (
    <S.Gallery>
      <S.TitleWrapper>
        <S.Title>Galeria - Áreas Comuns</S.Title>
      </S.TitleWrapper>

      <SRLWrapper>
        <S.GalleryWrapper>
          {images.map((item, index) => (
            <S.Box key={index}>
              <a href={item.image}>
                <S.Image src={item.image} alt={item.description} />
              </a>

              <S.BoxName>{item.title}</S.BoxName>

              <S.BoxText>
                <S.BoxItems>
                  <S.BoxIcon />
                  <S.BoxTitle>Ampliar Foto</S.BoxTitle>
                  <S.BoxDescription>{item.title}</S.BoxDescription>
                </S.BoxItems>
              </S.BoxText>
            </S.Box>
          ))}
        </S.GalleryWrapper>
      </SRLWrapper>
    </S.Gallery>
  );
}

export default Content;
