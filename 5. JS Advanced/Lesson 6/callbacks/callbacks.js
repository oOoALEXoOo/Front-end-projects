function asyncMethod(message, cb) {
  setTimeout(() => {
    console.log(`message: ${message}`);
    cb();
  }, 1000);
}

asyncMethod('Connect DB', () => {
  asyncMethod('Find User', () => {
    asyncMethod('Validate User', () => {
      asyncMethod('Some Action', () => { });
    });
  });
});