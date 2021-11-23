import styled from "styled-components";
import theme from "@/styles/theme";

export const Comfort = styled.div`
  margin-top: 53px;
`;

export const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const Title = styled.h1`
  position: relative;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.octonary};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    width: 50%;
    background: ${({ theme }) => theme.colors.secondary};
    height: 2px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 115px;

  flex-direction: ${({ second }) => (second ? "row-reverse" : "")};
`;

export const TextWrapper = styled.div`
  width: 40%;
  position: relative;
  padding: ${({ second }) => (second ? "0 0 0 130px" : "0 58px 0 0")};
  display: inline-flex;
  flex-direction: column;
  position: relative;

  &:before {
    position: absolute;
    left: 0;
    background: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    height: 1px;
    bottom: 0;
    content: "";
  }
`;

export const TextTitleWrapper = styled.div`
  display: inline-flex;
  justify-content: ${({ second }) => (second ? "flex-start" : "flex-end")};
  width: 100%;
  position: relative;
  margin-bottom: 17px;

  &:before {
    position: absolute;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    width: ${({ second }) => (second ? "100%" : "406px")};
    height: 1px;
    top: 47px;
    content: "";
  }
`;

export const TextTitle = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fonts.senary};
  font-weight: 700;
  display: block;
  text-align: right;

  &:after {
    position: absolute;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    width: 81px;
    height: 109%;
    top: 0;
    content: "";
    z-index: -1;
  }
`;

export const Box = styled.div`
  border-radius: 10px;
  background: ${({ second }) => (second ? "#88A1BD" : "#E2E574")};
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 42px;
  width: 370px;
  margin: ${({ second }) => (second ? "31px auto 0 10px" : "31px 10px 0 auto")};
  min-height: 150px;

  &.third {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};

    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      right: -12px;
      top: 12px;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      z-index: -1;
      display: block;
      border-radius: 10px;
    }
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    right: -12px;
    top: 12px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    z-index: -1;
    display: ${({ second }) => (second ? "block" : "none")};
    border-radius: 10px;
  }
`;

export const BoxNumber = styled.img`
  position: absolute;
  left: 15px;
  width: 76px;
  top: 17px;
  height: 107px;
`;

export const BoxText = styled.p`
  font-size: ${({ theme }) => theme.fonts.tertiary};
  font-weight: 400;
  color: ${({ second }) => (second ? "#E2E574" : "#62708B")};
  max-width: 273px;
  line-height: 21px;
  margin: 0;
`;

export const ImageWrapper = styled.div`
  width: 60%;
`;

export const Image = styled.img`
  display: block;
  width: 100%;

  border-radius: ${({ second }) => (second ? "0 50px 0 0" : "")};
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
  margin-left: auto;
`;
