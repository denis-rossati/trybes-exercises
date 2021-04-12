const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  const MarsTemperature = `Mars temperature is: ${getMarsTemperature()} degree Celsius`;
  console.log(`Curiosity, tell me the dregee of Mars in Celsius, please.`);
  setTimeout(() => console.log(MarsTemperature), messageDelay());
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo