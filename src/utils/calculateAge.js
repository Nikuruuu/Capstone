export const calculateAge = (dob) => {
  if (!dob) return '';

  const birthday = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  return age;
};
