import { firestore, auth } from '../../firebase/firebase.config';
import { SignupInterface, SignupFullDataInterface } from '@components/App/Auth/Signup/SignupInterface';


export const authSignup = (userData: SignupInterface) => {
  return auth
    .createUserWithEmailAndPassword(userData.email, userData.password)
    .then((data: any) => data.user)
    .catch(() => null);
};

export const authSignupFullData = (fullUserData: SignupFullDataInterface) => {
  return firestore
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