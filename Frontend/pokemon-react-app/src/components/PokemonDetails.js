import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PokemonDetails() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);
  

  useEffect(() => {
    // func to fetch a movie by the id
    const fetchData = async () => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
            const data = await res.json();
            console.log(data);
            setPokemon(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();

  }, [params.id]);

  return (
    <div>
      {pokemon && (
        <>
            <h3>Pokemon details</h3>
            <h4>{pokemon.title}</h4>
        </>
      )}
    </div>
  );
}

export default PokemonDetails;