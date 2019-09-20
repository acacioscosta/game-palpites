import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPossible() {

    return(
        <div className='appFinished'>
            <section className='customContainer'>
                <p className='textPrimary'>Não existem mais palpites possíveis :(</p>
                <p>Favor reiniciar o jogo!</p>
                <Link to='/'><button type='button' className='button grey-custom'>REINICIAR</button></Link>
            </section>
        </div>
    )

}