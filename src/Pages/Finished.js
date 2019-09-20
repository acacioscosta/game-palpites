import React from 'react'
import { Link } from 'react-router-dom'

export default function Finished(props) {

    const { palpite, tentativas } = props.location.state

    return(
        <div className='appFinished'>
            <section className='customContainer'>
                <p className='textPrimary'>Acertei o número {palpite}</p>
                <p>Realizei {tentativas} {tentativas === 1 ? 'tentativa!' : 'tentativas!'}</p>
                <Link to='/'><button type='button' className='button grey-custom'>REINICIAR</button></Link>
            </section>
        </div>
    )

}