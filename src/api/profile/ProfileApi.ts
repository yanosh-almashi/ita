import firebase from 'firebase';

export const getFileTypes = {
  avatar: {
    path: 'avatars',
    name: 'avatar'
  }
}

export const getFile = (path: string, name: string, uid: string) => {
  const getPath: string = `${path}/${name}-${uid}`;
  firebase
  .storage()
  .ref(getPath)
  .getDownloadURL()
  .then((url: string) => {
    console.log(url);
    return url;
  });
}

export const putFile = (file: any, path: string, name: string, uid: string) => {
  const metadata = {
    contentType: 'image/*',
  };
  const putName: string = `${name}-${uid}`;
  firebase.storage().ref(path).child(putName).put(file, metadata)
    .then((url: any) => {
      console.log(url);
    });
}