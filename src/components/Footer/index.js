import * as S from "./styles";

function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <S.Wrapper>
          <S.Text>
            © Copyright 2021 Livty - All rights reserved. - Privacy policy
          </S.Text>
          <S.Dev
            href="https://www.beagleship.com.br/"
            target="_blank"
            rel="noopener"
          >
            <S.DevIcon src="/icons/beagle.png" alt="Beagleship" />
          </S.Dev>
        </S.Wrapper>
      </div>
    </S.Footer>
  );
}

export default Footer;
