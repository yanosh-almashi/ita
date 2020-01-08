const emailValidation = (email: string): boolean => {
  const regExp = /^([-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6})$/;
  return regExp.test(email);
}

export const required = (value: string) => (value ? undefined : 'Required');

export const email = (value: string) => (emailValidation(value) ? undefined : 'Invalid email!');

export const password = (value: string) => ( (value.length < 6) ? 'Min 6 symbols!' : undefined );

export const composeValidators = (...validators: any) => (value: any) =>
  validators.reduce((error: any, validator: any) => error || validator(value), undefined);