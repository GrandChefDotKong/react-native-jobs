import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': '697866a92fmshe1dfb1b4c77a106p109defjsn010eedb01256',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      setData(res.data.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    setIsLoading(true);
    fetchData();
  }
    
  return { data, isLoading, error, refresh }
}

export default useFetch;
