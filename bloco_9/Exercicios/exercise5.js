const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => (`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => (`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
// fiz a constante só pra não fica muito esquisito de se entender o problema.
const temperature = getMarsTemperature();

// a callback é definida na chamada da função lá em baixo;
const sendMarsTemperature = (callback) => {
  setTimeout (() => console.log(callback(temperature)), messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo