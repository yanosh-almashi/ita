const emailValidation = (email: string): boolean => {
  const regExp = /^([-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6})$/;
  return regExp.test(email);
};

export const required = (value: string) => {
  return value ? undefined : "Required";
};

export const email = (value: string) => {
  return emailValidation(value) ? undefined : "Invalid email!";
};

export const password = (value: string) => {
  return value.length < 6 ? "Min 6 symbols!" : undefined;
};

export const composeValidators = (...validators: any) => (value: any) => {
  return validators.reduce(
    (error: any, validator: any) => error || validator(value),
    undefined
  );
};
