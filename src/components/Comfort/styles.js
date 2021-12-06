import styled from "styled-components";
import theme from "@/styles/theme";

export const Comfort = styled.div`
  margin-top: 50px;
`;

export const TextTitleWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-bottom: 17px;

  &:before {
    position: absolute;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    width: 34%;
    height: 1px;
    top: 57px;
    content: "";

    @media (max-width: 1380px) {
      width: 29%;
    }
  }
`;

export const TextTitle = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fonts.octonary};
  font-weight: 700;
  display: block;
  text-align: right;
  letter-spacing: 6px;

  &:after {
    position: absolute;
    left: -57px;
    width: 103px;
    height: 94%;
    top: 2px;
    content: "";
    z-index: -1;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
  flex-direction: ${({ second }) => (second ? "row-reverse" : "")};
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

export const TextWrapper = styled.div`
  width: 40%;
  padding: ${({ second }) => (second ? "0 0 0 45px" : "0 90px 0 0")};
  display: inline-flex;
  flex-direction: column;
`;

export const Box = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: ${({ second }) => (second ? "40px auto 0 0" : "40px 0 0 auto")};

  &:first-child {
    margin-top: 0;
  }

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
`;

export const BoxNumber = styled.div`
  margin-right: ${({ second }) => (second ? "17px" : "38px")};
`;

export const BoxNumberIcon = styled.img``;

export const BoxText = styled.p`
  font-size: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.quaternary};
  width: 284px;
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
  margin-top: 48px;
`;
