import styled from 'styled-components';

export const FileContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const FileResultContainer = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  margin: 10px 0px;
`;

export const FileResultImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  border: 3px solid #24c3f9;
`;

export const UploadFileContainer = styled.div`
  border: 2px solid #24c3f9;
  padding: 0px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const UploadFileInputContainer = styled.input`
  font-size: 0;
  width: 200px;
  height: 30px;
  display: block;
  cursor: pointer;
  border: none;
  outline: none;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 1px;
    left: 0;
    width: 30px;
    height: 9px;
    background-color: #fff;
  }
`;

export const UploadFileTitle = styled.label`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
`;
