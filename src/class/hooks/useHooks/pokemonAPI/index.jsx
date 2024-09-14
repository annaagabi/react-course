import { useEffect, useState } from "react"

export default function PokemonApi(){

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10') // "?limit=10" indica que só podem aparecer 10 pokemons
        // fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((res) =>  res.json())
        // .then((data) =>  console.log(data))
        .then((data) =>  {
            setPokemons(data.results)
            setLoading(false)

        })
        // .catch((error) => console.log(error))
        .catch((error) => {
            setError(error.message)
            setLoading(false)
        })
        
    },[])

    if(loading){
        return <p>Carregando...</p>
    }

    if (error){
        return <p>Error {error}</p>
    }

    return(
        <div>
            <h1>Lista de Pokemons</h1>
            <ul>
                {
                    pokemons.map((pokemon, i)=>
                        <li key={i} >{pokemon.name}</li>
                    )
                }
            </ul>
        </div>
    )
}