// import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

function DadJoke() {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://icanhazdadjoke.com/", {
  //     headers: { Accept: "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then(({ joke }) => setData(joke))
  //     .catch((err) => setError(err));
  // }, []);
  const url = `https://icanhazdadjoke.com/`;

  const { data, error } = useFetch(url);

  if (error) {
    return <p>Error!</p>;
  }
  data && console.log(data.joke);
  const joke = data.joke;
  return (
    <section>
      <h4>Dad Joke!</h4>
      <p>{joke}</p>
    </section>
  );
}

export default DadJoke;
