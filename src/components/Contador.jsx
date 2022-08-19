import { useState } from 'react';

const Contador = ( {valorInicial = 0} ) => {

  // Declaracion de variables
  const [ contador, setContador ] = useState(valorInicial)

  // Funciones
  const restar = () => setContador( contador - 1 );
  const sumar = () => setContador( contador + 1 );
  // ------

  return (
    <div className='container-fluid my-5'>
        <h2 className='contador my-4'>{contador}</h2>
        <button className='btn btn-danger mx-2' onClick={ restar }>Decrementar</button>
        <button className='btn btn-success mx-2' onClick={ sumar }>Incrementar</button>
      </div>
  );
};

export default Contador;