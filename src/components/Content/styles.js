import styled from "styled-components";
import theme from "@/styles/theme";

export const Content = styled.div`
  background: url("/bg-content.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 167px 0 103px;
`;

export const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 64px;
`;

export const Box = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.zero};
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 150px;
  justify-content: center;
  width: 32%;
  padding: 0 25px;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    right: -12px;
    top: 12px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    z-index: -1;
    display: block;
    border-radius: 10px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  display: block;
  text-align: center;
  width: 100%;
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
