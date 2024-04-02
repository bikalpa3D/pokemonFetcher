async function fetchPokemon() {
  try {
    const pokemonName = document
      .querySelector("#pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("could not find the pokemon/ resourse");
    }
    const data = await response.json();
    console.log(data);
    const img = document.querySelector("#pokemonImage");
    img.classList.remove("hidden");
    img.src = data.sprites.front_default;
    const ability = document.querySelector("#ability");
    ability.textContent = "First Ability: " + data?.abilities[0]?.ability?.name;
  } catch (error) {
    console.error(error);
  }
}
