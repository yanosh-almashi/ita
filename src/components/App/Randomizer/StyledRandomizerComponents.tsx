import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  border: none;
  outline: none;
  width: 50%;
  height: 300px;
  border-bottom-left-radius: 50px;
  resize: none;  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  `;
export const StyledRandom = styled.div`
 @media screen and (min-width: 1280px)
 {
  max-width: 1280px;
  margin: 0 auto;
 }
  height: 100%;
  position: relative;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
  padding-top: 48px;
  width: 50%;
  background-color: #fff;
`;
export const MainHeader = styled.div`
  padding-top: 5px;
  width: 100%;
`;

export const AreaWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
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
