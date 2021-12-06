import * as S from "./styles";
import Button from "@/components/Button";

function Hero() {
  return (
    <S.Hero>
      <div className="container">
        <S.Title>
          Otimização <strong>e</strong> qualidade de vida{" "}
          <strong>em um investimento equilibrado</strong>
        </S.Title>
        <S.ButtonWrapper>
          <Button title="Tenho Interesse" link="#contato" color="primary" />
          <Button
            title="Assistir apresentação"
            link="#contato"
            icon="/icons/play.svg"
          />
        </S.ButtonWrapper>
        <S.Arrow
          src="/icons/arrow-down.svg"
          alt="Seta apontando para baixo"
          title="Seta apontando para baixo"
        />
      </div>
    </S.Hero>
  );
}

export default Hero;
