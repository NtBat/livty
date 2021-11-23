import * as S from "./styles";

const text = {
  title: "Localização Privilegiada",

  paragraph: [
    "Localizado na Rua Tuiuti, no centro de Santa Maria, o LIVTY é composto por um bloco com 16 pavimentos, projetado com foco na otimização dos recursos para garantir o máximo de conforto e contéudo, tanto nas unidades como nas áreas de uso comum.",
    "Harmônico, urbano e ligado ao natural, o LIVTY possui além de design e estilo, uma série de atributos de sustentabilidade, lazer, vida saudável e conectividade.",
  ],
};

function Location() {
  return (
    <S.Location id="localizacao">
      <S.Wrapper>
        <S.Banner>
          <S.BannerImage
            src="location.jpg"
            alt="Imagem do prédio"
            title="Imagem do Prédio"
          />
        </S.Banner>

        <S.TextWrapper>
          <S.Title>{text.title}</S.Title>

          <S.Paragraph>
            {text.paragraph.map((item, index) => (
              <S.Text key={index}>{item}</S.Text>
            ))}
          </S.Paragraph>
        </S.TextWrapper>
      </S.Wrapper>
    </S.Location>
  );
}

export default Location;
