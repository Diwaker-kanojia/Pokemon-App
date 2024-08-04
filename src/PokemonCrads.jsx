import React from "react";

const PokemonCrads = ({ pokedata }) => {
  return (
    <>
      <li className="pokemon-card">
        <figure>
          <img
            src={pokedata.sprites.other.dream_world.front_default}
            alt={pokedata.name}
            className="pokemon-image"
          />
        </figure>
        <h1 className="pokemon-name">{pokedata.name}</h1>
        <div className="poke-info pokemon-highlight">
          <p>{pokedata.types.map((curr) => curr.type.name).join(", ")}</p>
        </div>
        <div className="grid-three-cols">
            <p className="pokemon-info">
                <span>Height:</span>{pokedata.height}
            </p>
            <p className="pokemon-info">
                <span>Weight:</span>{pokedata.weight}
            </p>
            <p className="pokemon-info">
                <span>Speed:</span>{pokedata.stats[5].base_stat}
            </p>
        </div>
        <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{pokedata.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{pokedata.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {pokedata.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
        </div>
      </div>

      </li>
    </>
  );
};

export default PokemonCrads;
