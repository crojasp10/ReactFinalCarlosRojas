import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del screen del Context

const Home = () => {

  const [dentists, setDentists] = useState([])

  const { currentContext } = useContext(ContextGlobal)

  const { screen = 'light' } = currentContext

  const getDentists = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json()
    })
    setDentists(data)
  }

  useEffect(() => {
    getDentists()
  }, [])

  return (
    <main className={screen} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist) => {
          return (
          <Card key={dentist.id} name={dentist.name} id={dentist.id} username={dentist.username}/>
          )
        })}

      </div>
    </main>
  )
}

export default Home