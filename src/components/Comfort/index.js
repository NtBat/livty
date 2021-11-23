import * as S from "./styles";
import Button from "@/components/Button";

const text = [
  {
    title: "Esquadrias externas em alumínio com pintura eletrostática escura",
    number: "/icons/1.svg",
  },
  {
    title: "Atendimento integral a norma de desempenho para edificações",
    number: "/icons/2.svg",
  },
  {
    title: "Piso porcelanato sobre manta acústica nas áreas sociais",
    number: "/icons/3.svg",
  },
  {
    title: "Forro de gesso em todos ambientes",
    number: "/icons/4.svg",
  },
];

const text2 = [
  {
    title: "Churrasqueira",
    number: "/icons/1-yellow.svg",
  },
  {
    title:
      "Gás central com tubulações para água quente e com medição individual de água fria",
    number: "/icons/2-yellow.svg",
  },
  {
    title: "Piso laminado sobre manta acústica nos dormitórios",
    number: "/icons/3-yellow.svg",
  },
  {
    title: "Pré-instalação de splits nas áreas sociais e dormitórios",
    number: "/icons/4-yellow.svg",
  },
];

const text3 = [
  {
    title: "Vidro laminado nas esquadrias nas áreas sociais e nas sacadas",
    number: "/icons/5-yellow.svg",
  },
  {
    title: "Apartamentos otimizados para melhor desempenho acústico e térmico",
    number: "/icons/6-yellow.svg",
  },
  {
    title: "Amplas esquadrias nas áreas sociais",
    number: "/icons/7-yellow.svg",
  },
  {
    title: "Versatilidade em alterações futuras de layout",
    number: "/icons/8-yellow.svg",
  },
];

function Comfort() {
  return (
    <S.Comfort id="conforto">
      <S.TitleWrapper>
        <S.Title>Conforto</S.Title>
      </S.TitleWrapper>

      <S.Wrapper>
        <S.TextWrapper>
          <S.TextTitleWrapper>
            <S.TextTitle>Edificação com</S.TextTitle>
          </S.TextTitleWrapper>

          {text.map((item, index) => (
            <S.Box key={index}>
              <S.BoxNumber
                src={item.number}
                alt={item.title}
                title={item.title}
              />
              <S.BoxText>{item.title}</S.BoxText>
            </S.Box>
          ))}
        </S.TextWrapper>

        <S.ImageWrapper>
          <S.Image
            src="comfort.jpg"
            title="Um jardim florido"
            alt="Um Jardim florido"
          />
        </S.ImageWrapper>
      </S.Wrapper>

      <S.Wrapper second>
        <S.TextWrapper second>
          <S.TextTitleWrapper second>
            <S.TextTitle>Apartamentos com</S.TextTitle>
          </S.TextTitleWrapper>

          {text2.map((item, index) => (
            <S.Box second key={index}>
              <S.BoxNumber
                src={item.number}
                alt={item.title}
                title={item.title}
              />
              <S.BoxText second>{item.title}</S.BoxText>
            </S.Box>
          ))}
        </S.TextWrapper>

        <S.ImageWrapper>
          <S.Image
            second
            src="comfort2.jpg"
            title="Apartamento mobiliado"
            alt="Apartamento mobiliado"
          />
        </S.ImageWrapper>
      </S.Wrapper>

      <S.Wrapper>
        <S.TextWrapper>
          {text3.map((item, index) => (
            <S.Box className="third" key={index}>
              <S.BoxNumber
                src={item.number}
                alt={item.title}
                title={item.title}
              />
              <S.BoxText second>{item.title}</S.BoxText>
            </S.Box>
          ))}
          <S.ButtonWrapper>
            <Button title="Tenho Interesse" link="#form" color="primary" />
          </S.ButtonWrapper>
        </S.TextWrapper>

        <S.ImageWrapper>
          <S.Image
            src="comfort3.png"
            title="Apartamento mobiliado"
            alt="Apartamento mobiliado"
          />
        </S.ImageWrapper>
      </S.Wrapper>
    </S.Comfort>
  );
}

export default Comfort;
