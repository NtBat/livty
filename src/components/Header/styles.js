import styled from "styled-components";
import theme from "@/styles/theme";

export const Header = styled.header`
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 43px 0;
`;

export const Menu = styled.nav``;

export const MenuItem = styled.a`
  font-size: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.zero};
  position: relative;

  &:hover:after {
    width: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 1px;
    transition: all 300ms ease-in-out;
    background: ${({ theme }) => theme.colors.zero};
  }

  &:not(:last-child) {
    margin-right: 59px;
  }
`;
