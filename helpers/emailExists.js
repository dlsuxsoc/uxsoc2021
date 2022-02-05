export const emailExists = (candidateEmail, emails) => {
  console.log(emails);
  for (let i = 0; i < emails.length; i++) {
    if (emails[i] === candidateEmail) return true;
  }
  return false;
};
