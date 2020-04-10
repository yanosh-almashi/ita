import {
  SignupInterface,
  SignupFullDataInterface
} from '@components/Auth/Signup/SignupInterface';
import { auth, db } from '../../firebase/firebase.config';
import { signInUser } from '../../store/auth/auth.actions';

export const authSignup = (userData: SignupInterface) => {
  return auth
    .createUserWithEmailAndPassword(userData.email, userData.password)
    .then((data: any) => {
      signInUser(userData.email, userData.password);
      return data.user;
    })
    .catch(() => null);
};

export const authSignupFullData = (fullUserData: SignupFullDataInterface) => {
  const time = new Date().getTime();
  const threeMonth = 3 * 30 * 24 * 60 * 60 * 1000;
  return db
    .collection('users')
    .doc(fullUserData.uid)
    .set({
      email: fullUserData.email,
      name: fullUserData.name,
      group: fullUserData.group,
      time: {
        startDate: new Date(time),
        startTime: time,
        endDate: new Date(time + threeMonth),
        endTime: time + threeMonth
      },
      tasks: {
        resolvedTasks: 0,
        failedTasks: 0
      }
    })
    .then(() => true)
    .catch(() => false);
};
