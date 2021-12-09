import styled from "styled-components";
import theme from "@/styles/theme";

export const Tabs = styled.div`
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 113px;
  gap: 0 36px;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 215px;
  height: 64px;
  border-radius: 100px;
  position: relative;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fonts.tertiary};
  background-color: ${(props) => (props.active ? "#E2E574" : "transparent")};
  transition: background-color 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.active ? "none" : "1px solid #E2E574")};
`;

export const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;

export const ImageWrapper = styled.div`
  margin-top: 110px;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  max-width: 100%;
`;
