import styled from "styled-components";
import theme from "@/styles/theme";

export const Hero = styled.section`
  background: url("/hero.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1050px) {
    background-size: cover;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position: relative;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.septenary};
  color: ${({ theme }) => theme.colors.primary};
  max-width: 682px;
  position: relative;
  margin-bottom: 72px;

  @media (max-width: 1050px) {
    font-size: ${({ theme }) => theme.fonts.quinary};
  }

  strong {
    color: ${({ theme }) => theme.colors.zero};
  }

  &:after {
    content: "";
    width: 164px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
    bottom: -27px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0 30px;
`;

export const Arrow = styled.img`
  position: absolute;
  left: 15px;
  bottom: 50px;
`;

export const Button = styled.button`
  width: 242px;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  height: 56px;
  font-size: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(0.98);
  }
`;

export const Icon = styled.img`
  margin-right: 10px;
`;
