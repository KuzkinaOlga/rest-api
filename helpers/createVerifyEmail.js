const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "confirmation of registration",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Confirm Email</a>`,
  };
  return mail;
};

module.exports = createVerifyEmail;
