export const checkValidData = (email, password, name) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isPassswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password);
  const isNameValid = name ? /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(name) : true;
  if (!isNameValid) return 'Name is not valid';
  if (!isEmailValid) return 'Email ID is not valid.';
  if (!isPassswordValid) return 'Password is not valid';
  return null;
};
