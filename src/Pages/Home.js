import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function App() {

  return (
    <div className="App">

      <section className='presentation'>
        <h1>Seja bem vindo ao Game Palpites!</h1>
        <p>Preciso adivinhar o número que você pensou.</p>
      </section>

      <section className='container init'>
        <p>Pense em um número entre <strong>0</strong> e <strong>300</strong>, depois clique em <strong>INICIAR</strong></p>
        <Link to='/playing'><button type='button' className='button blue-custom'>INICIAR</button></Link>
      </section>

      <Footer />

    </div>
  )

}