import React from 'react';
import {
  FileResultContainer,
  UploadFileContainer,
  FileContainer,
  FileResultImg,
  UploadFileInputContainer,
  UploadFileTitle
} from './file-upload.styled';
import Img from '../../assets/images/ava.jpg';

const initialFile = {
  file: null,
  fileUrl: Img
};

interface Props {
  putFile: (file: any) => void;
}

const FileUpload: React.FC<Props> = ({ putFile }) => {
  const [file, setFile] = React.useState(initialFile);

  const fileHandler = (event: any) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = function(event: any) {
      setFile({
        file: file,
        fileUrl: event.target.result
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }

    putFile(file);
  };

  return (
    <FileContainer>
      <FileResultContainer>
        <FileResultImg src={file.fileUrl} />
      </FileResultContainer>
      <UploadFileContainer>
        <UploadFileTitle>Upload</UploadFileTitle>
        <UploadFileInputContainer
          id="upload"
          type="file"
          onChange={fileHandler}
          accept="image/*"
        />
      </UploadFileContainer>
    </FileContainer>
  );
};

export default FileUpload;
