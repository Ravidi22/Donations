export const isValidID = (id) => {
  return /^\d{9}$/.test(id);
};

export const IsValidOrganizationPassword = (password) => {
  return password.length >= 8;
};
