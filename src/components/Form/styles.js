import styled from "styled-components";
import theme from "@/styles/theme";

export const FormWrapper = styled.div`
  display: flex;
  margin-top: 150px;
`;

export const FormBox = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 50%;
  padding: 110px 65px 103px 15px;

  @media (max-width: 1050px) {
    width: 100%;
    padding: 50px 20px;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.septenary};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  max-width: 539px;
  margin-left: auto;
  letter-spacing: 5px;
  margin-bottom: 60px;

  &:before {
    content: "";
    background: ${({ theme }) => theme.colors.primary};
    position: absolute;
    width: 85px;
    height: 2px;
    bottom: -16px;
  }

  @media (max-width: 1050px) {
    margin-left: 0;
    font-size: ${({ theme }) => theme.fonts.quinary};
  }
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.tertiary};
  margin-top: 33px;
  max-width: 539px;
  margin-left: auto;

  @media (max-width: 1050px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

export const Input = styled.input`
  width: 470px;
  height: 69px;
  border-radius: 5px;
  padding: 0 17px;
  font-size: ${({ theme }) => theme.fonts.primary};
  border: none;
  margin-top: 7px;
  font-family: "Stolzl";
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 1050px) {
    width: 100%;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.quinary};
    font-family: "Stolzl";
    font-weight: 300;
  }
`;

export const TextArea = styled.textarea`
  width: 470px;
  height: 202px;
  border-radius: 5px;
  padding: 23px 17px;
  font-size: ${({ theme }) => theme.fonts.primary};
  border: none;
  margin-top: 7px;
  font-family: "Stolzl";
  color: ${({ theme }) => theme.colors.secondary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.quinary};
    font-family: "Stolzl";
    font-weight: 300;
  }

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 33px;
  max-width: 539px;
  margin-left: auto;
`;

export const Button = styled.button`
  width: 242px;
  height: 56px;
  font-size: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
  }
`;

export const Banner = styled.div`
  width: 50%;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const BannerImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;
