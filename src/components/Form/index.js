import * as S from "./styles";

function Form() {
  return (
    <S.FormWrapper id="contato">
      <S.FormBox>
        <S.Title>Entre em contato e garanta já sua unidade!</S.Title>

        <S.Form>
          <S.Label>
            Nome
            <S.Input type="text" placeholder="Digite seu nome aqui" />
          </S.Label>
          <S.Label>
            E-mail
            <S.Input type="email" placeholder="Digite seu e-mail aqui" />
          </S.Label>
          <S.Label>
            Telefone
            <S.Input type="text" placeholder="(00) 00000-0000" />
          </S.Label>
          <S.Label>
            Mensagem
            <S.TextArea
              type="text"
              placeholder="Digite aqui o motivo do contato"
            />
          </S.Label>

          <S.ButtonWrapper>
            <S.Button>Tenho Interesse</S.Button>
          </S.ButtonWrapper>
        </S.Form>
      </S.FormBox>
      <S.Banner>
        <S.BannerImage src="/form-bg.jpg" alt="Formulário de contato" />
      </S.Banner>
    </S.FormWrapper>
  );
}

export default Form;
