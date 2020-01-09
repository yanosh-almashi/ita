import { SignupInterface, SignupFullDataInterface } from '@components/App/Auth/Signup/SignupInterface';
import { auth, db } from '../../components/App/Auth/firebase.config';
import { signInUser } from '../../store/auth/actionCreators';


export const authSignup = (userData: SignupInterface) => {
  return auth
    .createUserWithEmailAndPassword(userData.email, userData.password)
    .then((data: any) => {console.dir(data);signInUser(userData.email, userData.password); return data.user})
    .catch(() => null);
};

export const authSignupFullData = (fullUserData: SignupFullDataInterface) => {
  console.log('hi');
  console.log(fullUserData);
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