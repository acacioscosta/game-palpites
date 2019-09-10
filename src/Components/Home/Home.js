import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {

  return (
    <div className="App">
      <section className='tutorial'>
        <p>Este game tem o objetivo de adivinhar o número que você pensou.</p>
      </section>
      <section className='parado container'>
        <p>Pense em um número entre <strong>0</strong> e <strong>300</strong>, depois clique em <strong>INICIAR</strong></p>
        <Link to='/gaming'><button type='button'>INICIAR</button></Link>
      </section>
      <section className='footer'>
        <p><i>Powered by</i> - Acácio S. Costa</p>
      </section>
    </div>
  )

}