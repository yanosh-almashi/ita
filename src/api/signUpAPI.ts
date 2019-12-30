import firebase from 'firebase';
import 'firebase/firestore';
import '../firebaseConfig';
import { SignupInterface, SignupFullDataInterface } from '@components/App/Auth/Signup/SignupInterface';
const db = firebase.firestore();

export const authSignup = (userData: SignupInterface) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(userData.email, userData.password)
    .then((data: any) => data.user)
    .catch(() => null);
};

export const authSignupFullData = (fullUserData: SignupFullDataInterface) => {
  return db
    .collection('users')
    .doc(fullUserData.id)
    .set({
      email: fullUserData.email,
      name: fullUserData.name,
      group: fullUserData.group
    })
    .then(() => true)
    .catch(() =>  false);
};