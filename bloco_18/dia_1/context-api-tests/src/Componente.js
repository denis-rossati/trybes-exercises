import myContext from './myContext';

const Componente = () => {
  return (
  <myContext.Consumer>
    {
      (value) => (<h1>{ value }</h1>)
    }
  </myContext.Consumer>
  )
};

export default Componente;