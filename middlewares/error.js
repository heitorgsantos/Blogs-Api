const alert = (message = 'Invalid entries. Try again.', status = 400) => ({
  err: {
    message,
  },
  status,
});

module.exports = alert;
