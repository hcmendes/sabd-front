import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import { TabelaAtualizacoes } from './components/TabelaAtualizacoes';

function App() {

  const [atualizacoes, setAtualizacoes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/')
      .then(response => response.json())
      .then(res => {
        console.log(res)
        setAtualizacoes(res);
      });
  }, []);

  return (
    <div>
      {/* <h1>My Todos</h1>
      <Todo text='React is nice!' /> */}
      {atualizacoes.map((a, i) => 
        <TabelaAtualizacoes key={i} atualizacao={a} />
      )}
    </div>
  );
}

export default App;
