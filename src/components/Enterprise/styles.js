import styled from "styled-components";
import theme from "@/styles/theme";

export const Enterprise = styled.div`
  margin-top: 137px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  position: relative;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fonts.octonary};
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    bottom: -10px;
    width: 95px;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
    content: "";
  }
`;

export const Box = styled.div`
  margin-top: 50px;
`;

export const BoxTitleWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  position: relative;
  margin-bottom: 17px;

  &:before {
    position: absolute;
    right: 0;
    background: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 1px;
    top: 51px;
    content: "";
  }
`;

export const BoxTitle = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fonts.senary};
  font-weight: 700;
  display: block;
  text-align: right;
  letter-spacing: 6px;

  &:after {
    position: absolute;
    left: -30px;
    width: 94px;
    height: 115%;
    top: 2px;
    content: "";
    z-index: -1;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 110px;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  max-width: 100%;
`;

export const PavementTitleWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  position: relative;
  margin-bottom: 17px;
  justify-content: flex-end;

  &:before {
    position: absolute;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    width: 81%;
    height: 1px;
    top: 51px;
    content: "";
  }
`;

export const PavementTitle = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fonts.quinary};
  font-weight: 700;
  display: block;
  text-align: right;
  letter-spacing: 6px;

  &:after {
    position: absolute;
    left: -20px;
    width: 103px;
    height: 133%;
    top: 2px;
    content: "";
    z-index: -1;
    background: ${({ theme }) => theme.colors.primary};
  }

  &:before {
    content: "Andar 4";
    position: absolute;
    left: 0;
    font-size: 16px;
    bottom: -15px;
    font-weight: 100;
    letter-spacing: 2px;
  }
`;
