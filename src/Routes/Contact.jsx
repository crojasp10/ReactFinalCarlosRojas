import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del screen del Context

const Contact = () => {

 const { currentContext } = useContext(ContextGlobal)
  const { screen } = currentContext

  return (
    <div className={`${screen} contact-container`} >
      <h2 className="contact-title">Tienes dudas?</h2>
      <p className="contact-description">Envianos tus datos y te contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact