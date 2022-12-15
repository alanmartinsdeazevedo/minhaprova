import { pessoa } from './component/pessoa';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pessoa</h1>
      {pessoa.nome}
      {pessoa.idade}
    </div>
  );
}

export default App;
