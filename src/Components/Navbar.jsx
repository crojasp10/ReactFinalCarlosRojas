import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del screen del Context


const Navbar = () => {

  const { currentContext, dispatchContextUpdate } = useContext(ContextGlobal)

  const { screen } = currentContext

  const changescreen = () => {
    dispatchContextUpdate({ type: "TOGGLE_screen" })
  }

  return (
    <nav className={screen}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de screen con el button */}
      <Link to="/">
        Home
      </Link>
      <Link to="/favorites">
        Favorites
      </Link>
      <Link to="/contact">
        Contact us
      </Link>
      <button onClick={changescreen}>Change screen</button>
    </nav>
  )
}

export default Navbar