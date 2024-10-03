import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [FormularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [erro, setErro] = useState('');

  const handleNomeUsuarioChange = (e) => {
    const valor = e.target.value;
    setNomeUsuario(valor);
    
    // Validação simples
    if (valor.length < 4) {
      setErro("O nome de usuário deve ter pelo menos 4 caracteres.");
    } else {
      setErro('');
    }
  };

  return (
    <>
      <input 
        type="text" 
        className="searchInput" 
        onBlur={handleNomeUsuarioChange} 
        placeholder="Digite seu nome de usuário no GitHub" 
      />
      {erro && <p className="error">{erro}</p>}

      {nomeUsuario.length >= 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      
      {/* {FormularioEstaVisivel && <Formulario />}
      <button 
        onClick={() => setFormularioEstaVisivel(!FormularioEstaVisivel)} 
        type="button"
      >
        Toggle Formulário
      </button> */}
    </>
  );
}

export default App;
