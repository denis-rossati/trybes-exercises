import myContext from './myContext';
import Componente from './Componente';

const meuComponent = (props) => {
  return (
    // caso eu remova este "value", eu renderizarei o "valor padrão";
    <myContext.Provider value={"valor não padrão"}>
      <Componente />
    </myContext.Provider>
  );
};

export default meuComponent;