import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsLoading(false);
          setErrorFetch(null);
        })
        .catch(err => {
          setErrorFetch(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, errorFetch };
}

export default useFetch;