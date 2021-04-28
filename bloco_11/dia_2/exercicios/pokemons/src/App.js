import OrganizePokemons from './componentes/organizeData'
import Title from './componentes/title';
import './App.css';

function App() {
  return (
    <div className="App">
      < Title />
      <article>
        <OrganizePokemons />
      </article>
    </div>
  );
}

export default App;
