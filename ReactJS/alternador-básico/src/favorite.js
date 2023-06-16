import React from 'react'
import Toggler from './toggler'

function Favorite(props) {
    return (
        <Toggler defaultOnValue={false} render={(on, toggle) => (
            <div>
                <h3>Clique no coração para {on ? "desfavoritar!" : "favoritar!"}</h3>
                <h1>
                    <span id="favorite" onClick={toggle}>{on ? "❤️" : "🤍"}</span>
                </h1>
            </div>
        )} />
    )
}

export default Favorite