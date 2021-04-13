const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 3) {
    return reject(number);
  }
  return resolve(number);
})
.then(number => `Opa, conseguimos! Nosso número é ${number}`)
.then(mensagem => console.log(mensagem))
.catch(number => console.log(`Droga, nosso número foi ${number}...`))