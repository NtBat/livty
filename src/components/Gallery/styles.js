import styled from "styled-components";
import theme from "@/styles/theme";

export const Gallery = styled.div`
  margin-top: 162px;
`;

export const TitleWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-bottom: 17px;

  &:before {
    position: absolute;
    right: 0;
    background: ${({ theme }) => theme.colors.primary};
    width: 68%;
    height: 1px;
    top: 51px;
    content: "";

    @media (max-width: 1421px) {
      width: 72%;
    }
  }
`;

export const Title = styled.h2`
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

export const GalleryWrapper = styled.div`
  margin-top: 88px;
  display: flex;
  flex-wrap: wrap;

  > div {
    width: calc(100% / 4);
    min-height: 383px;

    > img {
      height: 100%;
      object-fit: cover;
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    display: block;
  }
`;

export const Box = styled.div`
  position: relative;
  cursor: pointer;

  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img``;

export const BoxName = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
  padding: 5px 17px;
  border-radius: 5px;
  position: absolute;
  bottom: 25px;
  right: 25px;
`;

export const BoxText = styled.div`
  position: absolute;
  top: 0;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.9;
  height: 100%;
  width: 100%;
  padding: 26px 29px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;

  @media (max-width: 1480px) {
    padding: 13px 15px;
  }
`;

export const BoxItems = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const BoxIcon = styled.img`
  width: 42px;
  height: 42px;

  @media (max-width: 1300px) {
    height: 32px;
  }
`;

export const BoxTitle = styled.span`
  display: block;
  margin-top: 18px;
  font-size: ${({ theme }) => theme.fonts.quaternary};
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 1220px) {
    font-size: ${({ theme }) => theme.fonts.tertiary};
  }
`;

export const BoxDescription = styled.span`
  display: block;
  margin-top: 18px;
  font-size: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.secondary};
  padding: 5px 17px;
  border-radius: 5px;
`;
