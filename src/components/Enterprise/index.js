import * as S from "./styles";

import Tabs from "@/components/Tabs";

function Enterprise() {
  return (
    <S.Enterprise id="empreendimento">
      <div className="container">
        <S.TitleWrapper>
          <S.Title>O Empreendimento</S.Title>
        </S.TitleWrapper>

        <S.Box>
          <S.BoxTitleWrapper>
            <S.BoxTitle>Térreo</S.BoxTitle>
          </S.BoxTitleWrapper>

          <S.ImageWrapper>
            <S.Image src="/planta_terreo.jpg" alt="Planta do Térreo" />
          </S.ImageWrapper>
        </S.Box>

        <S.Box>
          <S.PavementTitleWrapper>
            <S.PavementTitle before={"Andar 4"}>Pavimento 4</S.PavementTitle>
          </S.PavementTitleWrapper>

          <S.ImageWrapper>
            <S.Image src="/planta_4pav.jpg" alt="Planta do Pavimento 4" />
          </S.ImageWrapper>
        </S.Box>

        <S.Box>
          <S.PavementTitleWrapper>
            <S.PavementTitle before={"Andares 5/14"}>
              Pavimento Tipo
            </S.PavementTitle>
          </S.PavementTitleWrapper>

          <S.ImageWrapper>
            <S.Image src="/planta_tipo.jpg" alt="Planta do Pavimento 4" />
          </S.ImageWrapper>
        </S.Box>

        <S.Box>
          <S.FinalTitleWrapper>
            <S.FinalTitle>Final 01</S.FinalTitle>
          </S.FinalTitleWrapper>

          <Tabs
            title1="Apto 1A"
            title2="Apto 1B"
            image1="/apto1a.png"
            image2="/apto1a.png"
          />
        </S.Box>

        <S.Box>
          <S.FinalTitleWrapper>
            <S.FinalTitle>Final 02</S.FinalTitle>
          </S.FinalTitleWrapper>

          <Tabs
            title1="Apto 2A"
            title2="Apto 2B"
            title3="Apto 2C"
            image1="/apto1a.png"
            image2="/apto1a.png"
            image3="/apto1a.png"
          />
        </S.Box>

        <S.Box>
          <S.FinalTitleWrapper>
            <S.FinalTitle>Final 03</S.FinalTitle>
          </S.FinalTitleWrapper>

          <Tabs
            title1="Apto 3A"
            title2="Apto 3B"
            title3="Apto 3C"
            image1="/apto1a.png"
            image2="/apto1a.png"
            image3="/apto1a.png"
          />
        </S.Box>

        <S.Box>
          <S.FinalTitleWrapper>
            <S.FinalTitle>Final 04</S.FinalTitle>
          </S.FinalTitleWrapper>

          <Tabs
            title1="Apto 4A"
            title2="Apto 4B"
            title3="Apto 4C"
            image1="/apto1a.png"
            image2="/apto1a.png"
            image3="/apto1a.png"
          />
        </S.Box>

        <S.Box>
          <S.FinalTitleWrapper>
            <S.FinalTitle>Final 05</S.FinalTitle>
          </S.FinalTitleWrapper>

          <Tabs
            title1="Apto 5A"
            title2="Apto 5B"
            image1="/apto1a.png"
            image2="/apto1a.png"
          />
        </S.Box>

        <S.Box>
          <S.FinalTitleWrapper>
            <S.FinalTitle>Final 06</S.FinalTitle>
          </S.FinalTitleWrapper>

          <Tabs
            title1="Apto 6A"
            title2="Apto 6B"
            title3="Apto 6C"
            image1="/apto1a.png"
            image2="/apto1a.png"
            image3="/apto1a.png"
          />
        </S.Box>

        <S.Box>
          <S.PavementTitleWrapper>
            <S.PavementTitle>Pavimento 15</S.PavementTitle>
          </S.PavementTitleWrapper>

          <S.ImageWrapper>
            <S.Image src="/planta_15pav.jpg" alt="Planta do Pavimento 4" />
          </S.ImageWrapper>
        </S.Box>

        <S.Box>
          <S.PavementTitleWrapper>
            <S.PavementTitle>Pavimento 16</S.PavementTitle>
          </S.PavementTitleWrapper>

          <S.ImageWrapper>
            <S.Image src="/planta_16pav.jpg" alt="Planta do Pavimento 4" />
          </S.ImageWrapper>
        </S.Box>
      </div>
    </S.Enterprise>
  );
}

export default Enterprise;
