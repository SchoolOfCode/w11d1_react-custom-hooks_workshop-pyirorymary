import { useState, useEffect } from "react";

function useFetch(url) {
  //why can't useState be null? Especially for DadeJoke
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url, {
        headers: { Accept: "application/json" },
      })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => setError(err));
    }
  }, [url]);

  // if (error) {
  //   console.log(error);
  //   console.log(data);
  //   return <p>Error!</p>;
  // }

  return { data, error };
}

export default useFetch;
