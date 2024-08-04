import React, { useEffect, useState } from "react";
import PokemonCrads from "./PokemonCrads";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemon = data.results.map(async (currPoke) => {
        const res = await fetch(currPoke.url);
        const data = await res.json();

        return data;
      });

      const detailedResponse = await Promise.all(detailedPokemon);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  // search functionality
  const searchPokemon = pokemon.filter((curr) => {
    return curr.name.toLowerCase().includes(search.toLowerCase());
  });
  if (loading) {
    return (
      <>
        {/* <div className="wrapper">
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </div> */}
        <h1>Loading....</h1>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1>{error.message}</h1>
      </>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {searchPokemon.map((poke) => {
              return <PokemonCrads key={poke.id} pokedata={poke} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
