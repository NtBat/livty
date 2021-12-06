import styled from "styled-components";
import theme from "@/styles/theme";

export const Location = styled.section``;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const Banner = styled.div`
  position: relative;
  width: 40%;
  height: 100%;

  &:before {
    content: "";
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
    top: 260px;
  }
`;

export const BannerImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  width: 60%;
  position: relative;
  background: url("/location-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &:before {
    content: "";
    width: 250px;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    left: 0;
    top: 260px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.octonary};
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 400px;
  padding-top: 104px;
  padding-left: 100px;
`;

export const Paragraph = styled.div`
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.zero};
  border-left: 13px solid ${({ theme }) => theme.colors.primary};
  padding: 29px 43px 71px 29px;
  display: inline-flex;
  flex-direction: column;
  margin-left: -150px;
  margin-top: 100px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.tertiary};
  color: ${({ theme }) => theme.colors.tertiary};
  max-width: 730px;

  & + p {
    margin-top: 20px;
  }
`;
