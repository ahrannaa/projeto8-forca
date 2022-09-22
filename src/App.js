import palavras from "./palavras";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="inicioJogo">
          <div className="imagemInicial">
            <img src="imagem/forca0.png" alt="inicio forca" />
          </div>
          <div className="botaoEscolherPalavra">
            <button>Escolher Palavra</button>
          </div>
        </div>

        <div className="teclado">
          <div className="alfabeto">
            <div className="letras">A</div>
            <div className="letras">B</div>
            <div className="letras">C</div>
            <div className="letras">D</div>
            <div className="letras">E</div>
            <div className="letras">F</div>
            <div className="letras">G</div>
            <div className="letras">H</div>
            <div className="letras">I</div>
            <div className="letras">J</div>
            <div className="letras">K</div>
            <div className="letras">L</div>
            <div className="letras">M</div>
            <div className="letras">N</div>
            <div className="letras">O</div>
            <div className="letras">P</div>
            <div className="letras">Q</div>
            <div className="letras">R</div>
            <div className="letras">S</div>
            <div className="letras">T</div>
            <div className="letras">U</div>
            <div className="letras">V</div>
            <div className="letras">W</div>
            <div className="letras">X</div>
            <div className="letras">Y</div>
            <div className="letras">Z</div>
          </div>
        </div>

        <div className="chutarPalavra">
          <p>Já sei a palavra!</p>
          <input></input>
          <button>Chutar</button>
        </div>
      </div>
    </>
  );
}
