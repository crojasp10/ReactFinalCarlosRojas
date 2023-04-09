import React, { useContext } from 'react'
import dent from '../assets/dent.png'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const { currentContext } = useContext(ContextGlobal)
  const { screen } = currentContext
  return (
    <footer className={screen}>
        <img src={dent} alt='dent' />
    </footer>
  )
}

export default Footer
