const apiUrl = 'https://pokeapi.co/api/v2';

function getPokemonData() {
  fetch(`${apiUrl}/pokemon/ditto`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function createPokemon() {
  const newPokemon = {
    name: 'Pikachu',
    type: 'Electric',
    level: 10
  };

  fetch(`${apiUrl}/pokemon`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPokemon)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function updatePokemon() {
  const updatedPokemon = {
    name: 'Pikachu',
    type: 'Electric',
    level: 15
  };

  fetch(`${apiUrl}/pokemon/ditto`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedPokemon)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function deletePokemon() {
  fetch(`${apiUrl}/pokemon/ditto`, {
    method: 'DELETE',
  })
    .then(res => {
      if (res.status === 204) {
        console.log('Pokemon deleted successfully.');
      } else {
        console.log('Failed to delete Pokemon.');
      }
    })
    .catch(err => console.error(err));
}

// Ejecutar las funciones
getPokemonData();
createPokemon();
updatePokemon();
deletePokemon();
