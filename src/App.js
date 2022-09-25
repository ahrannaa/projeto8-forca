import palavras from "./palavras";
import alfabeto from "./Alfabeto";
import { useState } from "react";

export default function App() {
  
  const [tecladoDesabilitado, setTecladoDesabilitado] = useState(true);
  const [inputDesabilitado, setInputDesabilitado] = useState(true);
  const [palavraEscolhida, setPalavraEscolhida] = useState([]);
  const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);
  const [valorInput, setValorInput ] = useState("");


  function inputValor(event){
    setValorInput(event.target.value)
  }

  
    
    const handleClick = (event) => {
    const botaoLetra = event.currentTarget;
    setLetrasSelecionadas((selecionadas) => [...selecionadas, botaoLetra.innerHTML])

    console.log(letrasSelecionadas)
  };

  function iniciarJogo() {
    // habilitando teclado
    setTecladoDesabilitado(false);
    setInputDesabilitado(false);

    // embaralhando as palavras
    const palavrasEmbaralhadas = embaralhar(palavras);
    const palavraEscolhidaStr = palavrasEmbaralhadas[0];
    const palavraEscolhidaArray = palavraEscolhidaStr.split("");

    setPalavraEscolhida(palavraEscolhidaArray);
  }

  function embaralhar(array) {
    const arrayCopia = [...array];
    for (let i = arrayCopia.length - 1; i > 0; i--) {
      const test = Math.floor(Math.random() * (i + 1));
      [arrayCopia[i], arrayCopia[test]] = [arrayCopia[test], arrayCopia[i]];
    }
    return arrayCopia;
  }

  return (
    <>
      <div className="container">
        <div className="inicioJogo">
          <div className="direita">
            <div className="imagemInicial">
              <img src="imagem/forca0.png" alt="inicio forca" />
            </div>
          </div>

          <div className="esquerda">
            <div className="teste">
              <div className="botaoEscolherPalavra">
                <button onClick={iniciarJogo}>Escolher Palavra</button>
              </div>
              <div className="palavras">
                <div className="palavraCompleta">
                  {palavraEscolhida.map((letra, indiceDaLetra) => (
                    <div className={letra.includes(letrasSelecionadas) ? "cadaLetra border" : "cadaletra"}><p>{letra}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="teclado">
          <div className="alfabeto">
            {alfabeto.map((letra) => (
              <button
                onClick={handleClick}
                disabled={tecladoDesabilitado || letrasSelecionadas.includes(letra)}
                className={tecladoDesabilitado || letrasSelecionadas.includes(letra) ? "letrasClicadas" : "letrasNaoClicadas"}
              >
                {letra}
              </button>
            ))}
          </div>
        </div>

        <div className="chutarPalavra">
          <p>Já sei a palavra!</p>
          <input disabled={inputDesabilitado} onChange={inputValor}></input>
          <button onClick>Chutar</button>
        </div>
      </div>
    </>
  );
}
