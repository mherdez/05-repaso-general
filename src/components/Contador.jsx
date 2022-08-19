import { useState } from 'react';

const Contador = ( {valorInicial = 0} ) => {

  // Declaracion de variables
  const [ contador, setContador ] = useState(valorInicial)

  // Funciones
  const restar = () => setContador( contador - 1 );
  const sumar = () => setContador( contador + 1 );
  // ------

  return (
    <div className='container'>
        <h2 className='contador'>{contador}</h2>
        <button className='btn btn-restar' onClick={ restar }>Decrementar</button>
        <button className='btn btn-sumar' onClick={ sumar }>Incrementar</button>
      </div>
  );
};

export default Contador;