import * as S from "./styles";
import { useState } from "react";

function Tabs({ title1, title2, title3, image1, image2, image3 }) {
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <>
      <S.Tabs>
        <S.Tab onClick={handleClick} active={active === 0} id={0}>
          {title1}
        </S.Tab>

        <S.Tab onClick={handleClick} active={active === 1} id={1}>
          {title2}
        </S.Tab>

        {title3 && (
          <S.Tab onClick={handleClick} active={active === 2} id={2}>
            {title3}
          </S.Tab>
        )}
      </S.Tabs>
      <>
        <S.Content active={active === 0}>
          <S.ImageWrapper>
            <S.Image src={image1} alt="Planta" />
          </S.ImageWrapper>
        </S.Content>
        <S.Content active={active === 1}>
          <S.ImageWrapper>
            <S.Image src={image2} alt="Planta" />
          </S.ImageWrapper>
        </S.Content>

        {title3 && (
          <S.Content active={active === 2}>
            <S.ImageWrapper>
              <S.Image src={image3} alt="Planta" />
            </S.ImageWrapper>
          </S.Content>
        )}
      </>
    </>
  );
}

export default Tabs;
