import * as S from "./styles";
import Button from "@/components/Button";

const content = [
  {
    text:
      "Espera para instalação futura de energia fotovoltaica nas áreas de uso comum. ",
  },
  {
    text: "Guarita e depósito. ",
  },
  {
    text: "Dois elevadores com gerador de energia próprio.",
  },
  {
    text:
      "Preparo para instalação futura de pontos de abastecimento de carros elétricos. ",
  },
  {
    text:
      "Reaproveitamento da água da chuva para áreas de uso comum e instalações de incêndio.",
  },
  {
    text: "Brises vegetais e paisagismo nas áreas externas.",
  },
];

function Content() {
  return (
    <S.Content id="conteudo">
      <S.TitleWrapper>
        <S.Title>Conteúdo</S.Title>
      </S.TitleWrapper>

      <div className="container">
        <S.Wrapper>
          {content.map((item, index) => (
            <S.Box key={index}>
              <S.Text>{item.text}</S.Text>
            </S.Box>
          ))}
        </S.Wrapper>

        <S.ButtonWrapper>
          <Button title="Tenho Interesse" link="#contato" />
        </S.ButtonWrapper>
      </div>
    </S.Content>
  );
}

export default Content;
