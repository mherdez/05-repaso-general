
import Titulo from './components/Titulo';
import Contador from './components/Contador';

const App = () => {

  return (
    <>
      <Titulo texto={'Contador v2'}/>
      <Contador />
      <Contador valorInicial = {10} />
    </>
  );
};


export default App;