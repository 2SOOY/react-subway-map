export const hasBlank = (value: string) => {
  const regBlank = /\s/g;

  return regBlank.test(value);
};

export const isValidAge = (value: string) => {
  const age = Number(value);

  return 0 < age && age < 200;
};

export const isValidEmail = (value: string) => {
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  return regEmail.test(value);
};

export const isValidPassword = (value: string) => {
  return 5 < value.length && value.length < 13 && !hasBlank(value);
};
