import styled from "styled-components";
import theme from "@/styles/theme";

const handleColorType = (color) => {
  switch (color) {
    case "primary":
      return "background: #E2E574; color: #88A1BD; &:hover { background: #88a1bd; color: #e2e574 }";
    case "secondary":
      return "background: #88A1BD; color: #E2E574; &:hover { background: #E2E574; color: #88A1BD; }";
    default:
      return "background: transparent; border: 3px solid #E2E574; color: #E2e574; &:hover { background: #88a1bd; color: #e2e574; border: none }";
  }
};

export const Link = styled.a`
  width: 242px;
  height: 56px;
  font-size: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;
  ${({ color }) => handleColorType(color)};

  &:hover {
    transform: scale(0.98);
  }
`;

export const Icon = styled.img`
  margin-left: 6px;
`;
