const Numbers = [1, 2, 3, 4, 5];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const App = () => {
  return Numbers.map(number => task(number));
}

export default App;
