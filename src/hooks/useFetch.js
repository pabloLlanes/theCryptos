import { useEffect, useState } from "react";
import { environment } from "../data/constants";

export const useFetch = (initialState = []) => {
  const [data, setData] = useState(initialState); // API Response
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      setFetching(false);
      const result = await fetch(`${environment.BASE_URL}`);
      const data = await result.json();
      console.log(data);
      setData(data);
      setFetching(false);
    } catch (e) {
      setData(initialState);
      setFetching(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [environment.BASE_URL]);

  return [data, fetching, error];
};
