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

        <S.Box>
          <S.PavementTitleWrapper>
            <S.PavementTitle>Pavimento 4</S.PavementTitle>
          </S.PavementTitleWrapper>

          <S.ImageWrapper>
            <S.Image src="/pavimento4.png" alt="Planta do Pavimento 4" />
          </S.ImageWrapper>
        </S.Box>
      </div>
    </S.Enterprise>
  );
}

export default Enterprise;
