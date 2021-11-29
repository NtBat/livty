import styled from "styled-components";
import theme from "@/styles/theme";

export const Gallery = styled.div`
  margin-top: 124px;
`;

export const TitleWrapper = styled.div`
  display: inline-flex;
  width: 100%;
`;

export const Title = styled.h1`
  position: relative;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.octonary};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    width: 50%;
    background: ${({ theme }) => theme.colors.primary};
    height: 2px;
  }
`;
