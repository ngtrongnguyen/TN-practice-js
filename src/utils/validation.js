export const handleEmailFormat = (input) => {
  if (isEmailFormat(input.value)) {
    input.setCustomValidity('');
  } else {
    input.setCustomValidity('Enter a valid email');
  }
};

export const handlePasswordFormat = (input) => {
  if (input.value.length < 8) {
    input.setCustomValidity('At least 8 characters');
  } else {
    input.setCustomValidity('');
  }
};
