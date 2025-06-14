export const checkValidData = (email, password) => {
  const isEmailValid = /^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/.test(email);  
  const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{6,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password must have at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.";
  
  return null;
};
