import React from 'react'
import Toggler from './toggler'

function Menu(props) {
    return (
        <Toggler defaultOnValue={false} render={(on, toggle) => (
            <div>
                <button onClick={toggle}>{on ? "Esconder" : "Mostrar"} Menu</button>
                <nav style={{ display: on ? "block" : "none" }}>
                    <h6>Assinado por <span id="signed">React</span></h6>
                </nav>
            </div>
        )} />
    )
}

export default Menu