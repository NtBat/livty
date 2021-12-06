import * as S from "./styles";
import Button from "@/components/Button";

const text = [
  {
    title: "Esquadrias externas em alumínio com pintura eletrostática escura",
  },
  {
    title: "Atendimento integral a norma de desempenho para edificações",
  },
  {
    title: "Piso porcelanato sobre manta acústica nas áreas sociais",
  },
  {
    title: "Forro de gesso em todos ambientes",
  },
  {
    title: "Churrasqueira",
  },
  {
    title:
      "Gás central com tubulações para água quente e com medição individual de água fria",
  },
];

const text2 = [
  {
    title: "Piso laminado sobre manta acústica nos dormitórios",
  },
  {
    title: "Pré-instalação de splits nas áreas sociais e dormitórios",
  },
  {
    title: "Vidro laminado nas esquadrias nas áreas sociais e nas sacadas",
  },
  {
    title: "Apartamentos otimizados para melhor desempenho acústico e térmico",
  },
  {
    title: "Amplas esquadrias nas áreas sociais",
  },
  {
    title: "Versatilidade em alterações futuras de layout",
  },
];

function Comfort() {
  return (
    <S.Comfort id="conforto">
      <S.TextTitleWrapper>
        <S.TextTitle>Edificação com</S.TextTitle>
      </S.TextTitleWrapper>

      <S.Wrapper>
        <S.TextWrapper>
          {text.map((item, index) => (
            <S.Box key={index}>
              <S.BoxNumber>
                <S.BoxNumberIcon
                  src="/icons/arrow-right.svg"
                  alt="Seta apontando para direita"
                />
              </S.BoxNumber>
              <S.BoxText>{item.title}</S.BoxText>
            </S.Box>
          ))}
        </S.TextWrapper>

        <S.ImageWrapper>
          <S.Image
            src="comfort.png"
            title="Um jardim florido"
            alt="Um Jardim florido"
          />
        </S.ImageWrapper>
      </S.Wrapper>

      <S.Wrapper second>
        <S.TextWrapper second>
          {text2.map((item, index) => (
            <S.Box second key={index}>
              <S.BoxNumber second>
                <S.BoxNumberIcon
                  src="/icons/arrow-right.svg"
                  alt="Seta apontando para direita"
                />
              </S.BoxNumber>
              <S.BoxText second>{item.title}</S.BoxText>
            </S.Box>
          ))}

          <S.ButtonWrapper>
            <Button title="Tenho Interesse" link="#contato" color="primary" />
          </S.ButtonWrapper>
        </S.TextWrapper>

        <S.ImageWrapper>
          <S.Image
            second
            src="comfort2.png"
            title="Apartamento mobiliado"
            alt="Apartamento mobiliado"
          />
        </S.ImageWrapper>
      </S.Wrapper>
    </S.Comfort>
  );
}

export default Comfort;
