import React from 'react'

const SinglePoke = ({pokemon}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0'}}>
    {/* {pokemon.name} */}
    {/* <img key={pokemon.id} src={pokemon.img} /> */}
    <p style={{margin: '0'}}>#NAME#</p>
    <div style={{width: '50px', height: '50px', backgroundColor: 'red'}}></div>
    </div>
  )
}

export default SinglePoke