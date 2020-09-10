function asyncMethod(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`message: ${message}`)
      resolve();
    }, 1000)
  });
}

function findUser() {
  return asyncMethod('Find User');
}

function validateUser() {
  return asyncMethod('Validate User');
}

function someAction() {
  return asyncMethod('Some Action');
}

asyncMethod('Connect DB')
  .then(findUser)
  .then(validateUser)
  .then(someAction);
