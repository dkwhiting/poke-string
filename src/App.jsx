import { useState } from 'react'
import SinglePoke from './SinglePoke'
import './App.css'

const pokes = [
  {
    id: 1,
    name: 'bulbasaur',
    type: 'grass',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
  {
    id: 2,
    name: 'squirtle',
    type: 'water',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
  },
  {
    id: 3,
    name: 'charmander',
    type: 'fire',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
  },

]

function App() {
  const [pokeList, setPokeList] = useState(pokes)

  console.log(pokeList)

  return (
    <>
    {pokeList
    ? pokeList.map((pokemon, i) => {
      return <SinglePoke pokemon={pokemon} />
    })
    : null
    }
    </>
  )
}

export default App
