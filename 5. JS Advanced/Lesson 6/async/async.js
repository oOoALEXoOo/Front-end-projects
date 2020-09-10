function asyncMethod(message, order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`message: ${message}, order: ${order}`)
      resolve(++order);
    }, 1000)
  });
}

async function init() {
  const one = await asyncMethod('Connect DB', 0);
  const two = await asyncMethod('Find User', one);
  const three = await asyncMethod('Validate User', two);
  await asyncMethod('Some Action', three);
}

init();