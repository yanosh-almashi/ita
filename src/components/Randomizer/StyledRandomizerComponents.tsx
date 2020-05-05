import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  padding: 10px 0 10px 30px;
  border: none;
  outline: none;
  width: 50%;
  height: auto;
  border-bottom-left-radius: 50px;
  resize: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 16px;
`;
export const StyledRandom = styled.div`
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin: 0 auto;
  }
  height: 70%;
  position: relative;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  padding-top: 48px;
  width: 50%;
  background-color: #fff;
  overflow: auto;
`;
export const AreaWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: auto;
  min-height: 100%;
`;
export const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 48px;
  width: 100%;
`;
export const ResultArea = styled.div`
  background-color: #f5f5f5;
  width: 50%;
  border-bottom-right-radius: 50px;
  border-left: 1px solid #b0b0b0;
`;
export const TheList = styled.ul`
  padding: 0;
  li {
    color: #333;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    list-style: none;
  }
  li:hover {
    background-color: #24c3f9;
    cursor: pointer;
  }
`;
