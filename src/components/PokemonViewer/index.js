import { useState } from "react";
import useFetch from "../../hooks/useFetch";

function PokemonViewer() {
  const [id, setId] = useState("");

  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // useEffect(() => {
  //   if (id) {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
  //       headers: { Accept: "application/json" },
  //     })
  //       .then((res) => res.json())
  //       .then((poke) => setPokemon(poke))
  //       .catch((err) => setError(err));
  //   }
  // }, [id]);

  const { data, error } = useFetch(url);

  if (error) {
    console.log(error);
    console.log(data);
    return <p>Error!</p>;
  }
  data && console.log(data.name);
  return (
    <section>
      <h4>Pokemon</h4>
      <input type="number" onChange={(e) => setId(e.target.value)} value={id} />
      {data && <p>{data.name}</p>}
    </section>
  );
}

export default PokemonViewer;
