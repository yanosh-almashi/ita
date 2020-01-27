import firebase from 'firebase';
import Img from '../../assets/images/ava.jpg';

export const getFileTypes = {
  avatar: {
    path: 'avatars',
    name: 'avatar'
  }
};

export const getFile = (path: string, name: string, uid: string) => {
  return firebase
    .storage()
    .ref(`${path}/${name}-${uid}`)
    .getDownloadURL()
    .then((url: string) => {
      console.log(url);
      return url;
    })
    .catch(() => Img);
};

export const putFile = (file: any, path: string, name: string, uid: string) => {
  const metadata = {
    contentType: 'image/*'
  };

  const putName: string = `${name}-${uid}`;
  return firebase
    .storage()
    .ref(path)
    .child(putName)
    .put(file, metadata);
};
