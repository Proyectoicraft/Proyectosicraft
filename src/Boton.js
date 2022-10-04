import PropTypes from 'prop-types'

export function Boton({text}) {
   console.log(text)
   return <button onClick={function () {
    console.log('nuevo usuario')
   }}>
    {text}
    </button>
}

Boton.propTypes = {
    text: PropTypes.string.isRequired
}
