const checkValiDate = (email, password) => {
  //   const namevalid = /^[a-zA-Z\s\-]+$/.test(name); // Allows letters, spaces, and hyphens
  const isEmailValid =
    /^[a-zA-Z0-9_.+\-]+[@][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email); // Simplified email regex
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    ); // Password must contain at least one lowercase, uppercase, number, and special character

  //   if (namevalid) return "name is required";
  if (!isEmailValid) return "Email is not valid.";
  if (!isPasswordValid)
    return `Password must be at least 8 characters long, with at least one uppercase letter, one number, and one special character.`;

  return null;
};

export default checkValiDate;
