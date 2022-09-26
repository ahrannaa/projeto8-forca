import palavras from "./palavras";
import alfabeto from "./Alfabeto";
import { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [tecladoDesabilitado, setTecladoDesabilitado] = useState(true);
  const [inputDesabilitado, setInputDesabilitado] = useState(true);
  const [palavraEscolhida, setPalavraEscolhida] = useState([]);
  const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);
  const [valorInput, setValorInput] = useState("");
  const [imagem, setImagem] = useState("imagem/forca0.png");
  const [totalErros, setTotalErros] = useState(0);
  

  const handleClick = (event) => {
    const botaoLetra = event.currentTarget;
    const letra = botaoLetra.innerHTML.toLowerCase()
    setLetrasSelecionadas((selecionadas) => [
      ...selecionadas,
      letra,
    ]);
   
    if(palavraEscolhida === letra){
      alert('vc ganhou')
    }

    if (!palavraEscolhida.includes(letra)) {
      setTotalErros(totalErros + 1);
      
      if (totalErros === 1) {
        setImagem("imagem/forca1.png");
      } else if (totalErros === 2) {
        setImagem("imagem/forca2.png");
      } else if (totalErros === 3) {
        setImagem("imagem/forca3.png");
      } else if (totalErros === 4) {
        setImagem("imagem/forca4.png");
      } else if (totalErros === 5) {
        setImagem("imagem/forca5.png");
      } else if (totalErros === 6) {
        setImagem("imagem/forca6.png");
        setTecladoDesabilitado(true);
        setLetrasSelecionadas(palavraEscolhida)
        
      }
    }
     
  };

  function iniciarJogo() {

    setTecladoDesabilitado(false);
    setInputDesabilitado(false);

    
    const palavrasEmbaralhadas = embaralhar(palavras);
    const palavraEscolhidaStr = palavrasEmbaralhadas[0];
    const palavraEscolhidaSemAcentos = palavraEscolhidaStr.replace("á", "a").replace("ç", "c").replace("ã", "a").replace("é", "e").replace("ó", "o")
    const palavraEscolhidaArray = palavraEscolhidaSemAcentos.split("");

    setPalavraEscolhida(palavraEscolhidaArray);

    console.log(palavraEscolhidaArray);
  }

  function embaralhar(array) {
    const arrayCopia = [...array];
    for (let i = arrayCopia.length - 1; i > 0; i--) {
      const test = Math.floor(Math.random() * (i + 1));
      [arrayCopia[i], arrayCopia[test]] = [arrayCopia[test], arrayCopia[i]];
    }
    return arrayCopia;
  }

  function chutar() {
    const palavrasInputArray = valorInput.split("");

    console.log(palavrasInputArray);

    if (arraysSaoIguais(palavrasInputArray, palavraEscolhida)) {
      setLetrasSelecionadas(palavrasInputArray)
      setTecladoDesabilitado(true)
      setValorInput("")
      
    
    } else {
      setLetrasSelecionadas(palavrasInputArray)
     setTecladoDesabilitado(true)
     setImagem("imagem/forca6.png")
     setValorInput("")

      console.log("perdeu");
    }
  }

  function arraysSaoIguais(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
  }

  return (
    <>
      <Container>
        <InicioJogo>
          <Direita>
            <ImagemInicial>
              <img data-identifier="game-image" src={imagem} alt="inicio forca" />
            </ImagemInicial>
          </Direita>

          <Esquerda>
            <Teste>
              <BotaoEscolherPalavra data-identifier="choose-word">
                <button onClick={iniciarJogo}>Escolher Palavra</button>
              </BotaoEscolherPalavra>
              <Palavras>
                <PalavraCompleta data-identifier="word">
                  {palavraEscolhida.map((letra, index) => (
                    <div
                      key={index}
                      className={
                        letrasSelecionadas.includes(letra)
                          ? "cadaLetra"
                          : "cadaLetra border"
                      }
                    >
                      <p>{letra}</p>
                    </div>
                  ))}
                </PalavraCompleta>
              </Palavras>
            </Teste>
          </Esquerda>
        </InicioJogo>

        <Teclado>
          <Alfabeto>
            {alfabeto.map((letra, index) => (
              <button
                key={index}
                onClick={handleClick}
                disabled={
                  tecladoDesabilitado || letrasSelecionadas.includes(letra)
                }
                className={
                  tecladoDesabilitado || letrasSelecionadas.includes(letra)
                    ? "letrasClicadas"
                    : "letrasNaoClicadas"
                }
              >
                {letra}
              </button>
            ))}
          </Alfabeto>
        </Teclado>

        <ChutarPalavra>
          <p>Já sei a palavra!</p>
          <input data-identifier="type-guess"
            disabled={inputDesabilitado}
            onChange={(event) => setValorInput(event.target.value)}
            value={valorInput}
          ></input>
          <button data-identifier="guess-button" onClick={chutar}>Chutar</button>
        </ChutarPalavra>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #fafafa;
`;
const InicioJogo = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
`;
const Direita = styled.div``;

const ImagemInicial = styled.div`
  img {
    width: 380px;
  }
`;
const Esquerda = styled.div``;

const Teste = styled.div``;

const BotaoEscolherPalavra = styled.div`
   button{
    margin-top: 40px;
   margin-left: 150px;
   background-color: rgb(80, 152, 80);
   color: white;
   width: 140px;
   height: 38px;
   border-radius: 5px;
   border: none;
   }
`
const Palavras = styled.div `
  display: flex;
  margin-top: 330px;
`
const PalavraCompleta = styled.div `
   display: flex;
`
const Teclado = styled.div `
  background-color: #fafafa;
  width: 540px;
  margin: 20px auto;
  padding: 10px;
  
`
const Alfabeto = styled.div `
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const ChutarPalavra = styled.div `
    display: flex;
   justify-content: center;

   p{
    font-size: 15px;
    padding: 8px;
   }

   input{
    width: 300px;
   height: 25px;
   border-radius: 5px;
   box-sizing: border-box;
   padding: 12px;
   }

   button{
    width: 60px;
   border-radius: 5px;
   border: 1px solid rgb(82, 123, 151);
   background-color: rgb(195, 229, 245);
   color: rgb(82, 123, 151);
   font-weight: bold;
   margin-left: 10px;
   }
`
