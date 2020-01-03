export const emailValidation = (email: string): boolean => {
  const regExp = /^([-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6})$/;
  return regExp.test(email);
}
export const confirmPasswordValidation = (password: string, confirm: string): boolean => {
  console.log('pa-> ' + password);
  console.log('co-> ' + confirm);

  return password === confirm;
}