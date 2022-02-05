export const emailExists = (candidateEmail, emails) => {
    // console.log(emails);
    for (let i = 0; i < emails.length; i++) {
      if (emails[i].toLowerCase() === candidateEmail.toLowerCase()) return true;
    }
    return false;
  };
