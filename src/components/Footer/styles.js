import styled from "styled-components";
import theme from "@/styles/theme";

export const Footer = styled.footer``;

export const Wrapper = styled.div`
  padding: 59px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Dev = styled.a``;

export const DevIcon = styled.img`
  width: 28px;
  height: 36px;
  display: block;
`;
