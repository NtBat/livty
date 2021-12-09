import styled from "styled-components";
import theme from "@/styles/theme";

export const Header = styled.header`
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 43px 0;
`;

export const Menu = styled.nav`
  @media (max-width: 1050px) {
    display: none;
  }
`;

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

export const Bars = styled.div`
  display: none;
  position: relative;
  transition: all 1s cubic-bezier(0.68, -0.05, 0.27, 1.25);

  @media (max-width: 1050px) {
    display: flex;
    width: 1.5rem;
    position: relative;
  }
`;

export const BarsTop = styled.span`
  width: 88.666667%;
  left: auto;
  backface-visibility: hidden;
  position: absolute;
  left: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.zero};
  transition: 0.55s;
  border-radius: 7px;
  height: 0.125rem;
  top: 0;

  &.active {
    animation: barTop 0.4s cubic-bezier(0.68, -0.05, 0.27, 1.25) forwards;
    animation-delay: 0.3s;
  }

  @keyframes barTop {
    0% {
      opacity: 1;
      filter: none;
    }

    to {
      opacity: 0;
    }
  }
`;

export const BarsMid = styled.span`
  width: 100%;
  backface-visibility: hidden;
  position: absolute;
  left: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.zero};
  transition: 0.55s;
  border-radius: 7px;
  height: 0.125rem;
  top: 8px;

  &.active {
    animation: barMid 0.4s cubic-bezier(0.68, -0.05, 0.27, 1.25) forwards;
    animation-delay: 0.3s;
    top: 0;
  }

  @keyframes barMid {
    0% {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(40deg);
    }
  }
`;

export const BarsBot = styled.span`
  width: 100%;
  backface-visibility: hidden;
  position: absolute;
  left: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.zero};
  transition: 0.55s;
  border-radius: 7px;
  height: 0.125rem;
  top: -8px;

  &.active {
    top: 0;
    animation: barBot 0.4s cubic-bezier(0.68, -0.05, 0.27, 1.25) forwards;
    animation-delay: 0.3s;
  }

  @keyframes barBot {
    0% {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(-40deg);
    }
  }
`;

export const MenuMobile = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 100vh;
  top: 0;
  position: fixed;
  transition: all 300ms ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  overflow: auto;
`;

export const MenuMobileContent = styled.div`
  height: 100%;
  padding: 20px;
`;

export const MenuMobileNav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    margin-top: 20px;
  }
`;

export const MenuMobileHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const MenuClose = styled.button`
  border: none;
  background: none;
  color: #fff;
  font-size: 25px;
`;
