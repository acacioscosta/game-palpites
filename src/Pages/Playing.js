import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function Gaming() {

  const [palpite, setPalpite] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)
  let [tentativas, setTentativas] = useState(0)
  const [palpitados, setPalpitados] = useState([])
  const [redirect, setRedirect] = useState(false)

  function palpitar() {
    let randomGerado = getRandom()
    setPalpite(randomGerado)
    setTentativas(tentativas += 1)
    setPalpitados([...palpitados, randomGerado])
  }

  function menor() {
    setMax(palpite)
  }

  function maior() {
    setMin(palpite)
  }

  function getRandom() {

    let random = 0
    let continua = true

    do {
      random = Math.floor(Math.random() * (max - min + 1)) + min //Gera um número aleatório dado um intervalo

      if (random === min && random === max) { //Verifica se o número gerado é igual ao min e max
        continua = false //Faz com que pare a repetição
        noPossible()
        break;
      } else if (palpitados.indexOf(random) > -1) { //verifica se o número gerado já foi palpitado
        let anterior = (random - 1)
        let proximo = (random + 1)
        if (palpitados.indexOf(anterior) > -1 && palpitados.indexOf(proximo) > -1) { //Verifica se o número anterior e próximo ao número gerado já foi palpitado
          continua = false //Faz com que pare a repetição
          noPossible()
          break;
        } else {
          continua = true //Faz com que a repetição continue
        }
      } else {
        continua = false ////Faz com que pare a repetição
      }

    } while (continua);

    return random

  }

  const noPossible = () => {
    setRedirect(true)
  }

  useEffect(() => {
    palpitar()
  }, [min, max])

  if(redirect){
    return <Redirect to='/noPossible' />
  }

  return (
    <div className="App">

      <section className='instrucoes'>
        <h1>Leia as instruções: </h1>
        <ul>
          <li>1. Atente-se ao número palpitado!</li>
          <li>2. Caso o palpite seja o número pensado, clique em ACERTOU!</li>
          <li>3. Se não acertou, informe se o número que você pensou é MENOR ou MAIOR que o palpitado.</li>
          <li>4. clique em REINICIAR para iniciar um novo jogo.</li>
        </ul>
      </section>

      <section className='game container'>
        <p>O número é {palpite}?</p>
        <div>
          <button type='button' className='button green-custom' onClick={ menor }>MENOR</button>
          <button type='button' className='button red-custom' onClick={ maior }>MAIOR</button>
        </div>
        <div>
          <Link to='/'><button type='button' className='button grey-custom'>REINICIAR</button></Link>
          <Link to={{ pathname: '/finished', state: { palpite, tentativas } }}><button type='button' className='button blue-custom'>ACERTOU</button></Link>
        </div>
      </section>

      <Footer />
    </div>
  )

}