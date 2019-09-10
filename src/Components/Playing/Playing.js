import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Gaming() {

  let [palpite, setPalpite] = useState()
  let [palpitados, setPalpitados] = useState([])
  let [tentativas, setTentativas] = useState(0)
  let [min, setMin] = useState(0)
  let [max, setMax] = useState(300)
  let [run, setRun] = useState('PARADO')
  let [msg, setMsg] = useState(['Atente-se ao número palpitado!', 'Informe se o número que você pensou é MENOR ou MAIOR que ele.', 'Caso o palpite seja o número pensado, clique em ACERTOU!'])

  function menor() {
    if (palpite === max) {
      iniciar()
    } else {
      setMax(palpite)
    }
  }

  function maior() {
    if (palpite === min) {
      iniciar()
    } else {
      setMin(palpite)
    }

  }

  function acertou(){
    setRun('ACERTOU')
    setMsg('')
  }

  function geraRandom() {

    let random = 0
    let continua = true
    setRun('EXECUTANDO')

    do {
      random = Math.floor(Math.random() * (max - min + 1)) + min //Gera um número aleatório dado um intervalo

      if (random === min && random === max) { //Verifica se o número gerado é igual ao min e max
        setRun('SEMPALPITES')
        continua = false //Faz com que pare a repetição
      } else if (palpitados.indexOf(random) > -1) { //verifica se o número gerado já foi palpitado
        let anterior = (random - 1)
        let proximo = (random + 1)
        if (palpitados.indexOf(anterior) > -1 && palpitados.indexOf(proximo) > -1) { //Verifica se o número anterior e próximo ao número gerado já foi palpitado
          setRun('SEMPALPITES')
          continua = false //Faz com que pare a repetição
        } else {
          continua = true //Faz com que a repetição continue
        }
      } else {
        continua = false ////Faz com que pare a repetição
      }

    } while (continua);

    return random

  }

  function iniciar() {

    const randomGerado = geraRandom()
    
    setPalpite(randomGerado)
    setPalpitados([...palpitados, randomGerado])
    setTentativas(tentativas += 1)

  }

  useEffect(() => {
    iniciar()
  }, [min, max])

  return (
    <div className="App">
      <section className='tutorial'>
        <p>{msg[0]}</p>
        <p>{msg[1]}</p>
        <p>{msg[2]}</p>
      </section>
      {run === 'EXECUTANDO' &&
        <section className='executando container'>
          <p>O número é <strong>{palpite}</strong> ?</p>
          <button type='button' className='menor' onClick={menor}>MENOR</button>
          <button type='button' className='acertou' onClick={acertou}>ACERTOU</button>
          <button type='button' className='maior' onClick={maior}>MAIOR</button>
        </section>
      }
      {run === 'ACERTOU' &&
        <section className='success container'>
          <p>Acertei o número <strong>{palpite}</strong></p>
          <h3>Realizei <strong>{tentativas}</strong> tentativa(s)!</h3>
          <Link to='/'><button type='button'>REINICIAR</button></Link>
        </section>
      }
      {run === 'SEMPALPITES' &&
        <section className='semPalpites container'>
          <p>Não existem mais palpites possíveis :(</p>
          <p>Favor reiniciar o jogo!</p>
          <Link to='/'><button type='button'>REINICIAR</button></Link>
        </section>
      }
      <section className='footer'>
        <p><i>Powered by</i> - Acácio S. Costa</p>
      </section>
    </div>
  )

}