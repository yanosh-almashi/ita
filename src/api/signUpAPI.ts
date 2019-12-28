import firebase from 'firebase';
import 'firebase/firestore';
import '../firebaseConfig';
import { SignupInterface } from '@components/App/Auth/Signup/SignupInterface';
const db = firebase.firestore();

export const authSignup = (userData: SignupInterface) => {
  return firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
      .then((data: any) => {
        return data.user;
      })
      .catch(function(error) {
        return null;
      });
}

export const authSignupFullData = (fullUserData: any) => {
    db.collection("users").doc(fullUserData.id).set({
      email: fullUserData.email,
      name: fullUserData.name,
      group: fullUserData.group
    })
    .then(function() {
      console.log("Success!");
      return null;
    })
    .catch(function(err) {
      console.error("Error : ", err);
      return err;
    });
}