import styled from "styled-components";
import theme from "@/styles/theme";

export const Footer = styled.footer``;

export const Wrapper = styled.div`
  padding: 25px 0;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 470px) {
    display: block;
    text-align: center;
  }
`;
