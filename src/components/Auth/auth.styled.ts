import styled from "styled-components";
import SoftServeBG from "../../assets/images/softserve.jpg";

export const AuthSide = styled.div`
  width: 50%;
  height: 100vh;
  color: #fff;
  padding: 50px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 40px;
  font-weight: 700;
  background-image: url(${SoftServeBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -100px 0px;
  box-shadow: rgba(36, 195, 249, 0.4) 0 0 0 100vw inset;

  @media (max-width: 1300px) {
    width: 40%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const AuthSideTitle = styled.p`
  padding: 0px 0px;
  margin: 0;
  font-weight: 400;
`;

export const AuthSideH3 = styled.h3`
  font-size: 60px;
  padding: 0px 0px;
  margin: 0;
`;

export const AuthForm = styled.div`
  height: 100vh;
  padding: 60px 0px 30px 0px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  &::scrollbar {
    width: 3px;
    height: 3px;
  }
  &::scrollbar-button {
    background-color: #fff;
  }
  &::scrollbar-track {
    background-color: #fff;
  }
  &::scrollbar-track-piece {
    background-color: #ffffff;
  }
  &::scrollbar-thumb {
    height: 50px;
    background-color: rgba(36, 195, 249, 1);
    border-radius: 10px;
  }

  @media (max-width: 1300px) {
    width: 60%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const AuthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
`;