import * as S from "./styles";

function Enterprise() {
  return (
    <S.Enterprise id="plantas">
      <div className="container">
        <S.TitleWrapper>
          <S.Title>O Empreendimento</S.Title>
        </S.TitleWrapper>

        <S.Box>
          <S.BoxTitleWrapper>
            <S.BoxTitle>Térreo</S.BoxTitle>
          </S.BoxTitleWrapper>

          <S.ImageWrapper>
            <S.Image src="/terreo.png" alt="Planta do Térreo" />
          </S.ImageWrapper>
        </S.Box>
      </div>
    </S.Enterprise>
  );
}

export default Enterprise;
