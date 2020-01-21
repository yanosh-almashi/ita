import React from 'react';
import {  
  FileResultContainer, 
  UploadFileContainer, 
  FileContainer,
  FileResultImg,
  UploadFileInputContainer,
  UploadFileTitle
} from './FileUploadStyles';
import Img from '../../assets/images/ava.jpg';
import { connect } from 'react-redux';
import { getFileTypes } from '../../api/profile/ProfileApi';

const initialFile = {
  file: null,
  fileUrl: Img
}

interface Props {
  putFile: (file: any, path: string, name: string, uid: string) => void;
  uid: string;
  path: string;
}

const FileUpload: React.FC<Props> = ({ putFile, uid, path }) => {

  const [file, setFile] = React.useState(initialFile);

  const fileHandler = (event: any) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = function(event: any) {
      setFile({
        file: file,
        fileUrl: event.target.result
      });
    }

    if (file) {
      reader.readAsDataURL(file);
    }
    
    putFile(file, path, getFileTypes.avatar.name, uid);
  }
  
  return (
    <FileContainer>
      <FileResultContainer>
        <FileResultImg src={file.fileUrl} />
      </FileResultContainer>
      <UploadFileContainer>
        <UploadFileTitle>Upload</UploadFileTitle>
        <UploadFileInputContainer id="upload" type="file" onChange={ fileHandler } accept="image/*"/>
      </UploadFileContainer>
    </FileContainer>
  )
}

const mapStateToProps = (state: any) => ({
  uid: state.authReducer.uid
});

export default connect(mapStateToProps)(FileUpload);