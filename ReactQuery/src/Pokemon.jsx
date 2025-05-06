import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const Pokemon = () => {
  const [pokemonId, setPokemonId] = useState(null);
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['pokemons Details'],
    queryFn: async () => {
      let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      return response.json();
    },
    staleTime: 10000,
    gcTime: 5000,
  });

  console.log(data);

  const {
    isLoading: isPokemonLoading,
    data: pokemonData,
    isError: isPokemonError,
    error: pokemonErroe,
  } = useQuery({
    queryKey: ['pokemonDetails', pokemonId],
    queryFn: async () => {
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      return response.json();
    },
    enabled: !!pokemonId,
  });
  return (
    <div className="bg-pink-50">
      <h1 className="text-xl flex justify-center pt-7">Pokemon Details</h1>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-2 m-2 rounded-md shadow-md">
          {isLoading && <p>Loading..</p>}
          {isError && <p>{error.message}</p>}
          {data && (
            <div className="grid grid-cols-2 md:grid-cols-4">
              {data.results.map((pokemon, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setPokemonId(index + 1)}
                    className="border border-gray-50 p-1 rounded-md m-2 bg-blue-500 hover:bg-blue-700 text-white text-md"
                  >
                    {pokemon.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
          {isPokemonLoading && <p>Pokemon Data Loading...</p>}
          {isPokemonError && <p>{isPokemonError.message}</p>}
          <div>
            {pokemonData && (
              <div className="bg-white p-3 mx-5 rounded-md shadow-md space-y-1">
                <h1 className="flex justify-center font-bold">
                  {pokemonData.name.toUpperCase()}
                </h1>
                <div className="flex justify-center">
                  <img
                    src={pokemonData.sprites.front_default}
                    alt={pokemonData.name}
                    className="w-32 h-32"
                  />
                </div>
                <p>
                  <strong>Types: </strong>
                  {pokemonData.types.map((t) => t.type.name).join(', ')}
                </p>
                <p>
                  <strong>Abilities: </strong>
                  {pokemonData.abilities.map((a) => a.ability.name).join(', ')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
