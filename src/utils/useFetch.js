import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  const options = {
    cancelToken: source.CancelToken,
    // headers:{}
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, options)
      .then(res => {
        setLoading(false);
        setData(res.data);
        setMessage('Succesfully fetching data..');
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
        setError(true);
        setMessage('failed to fetch data..');
      });

    return () => {
      // cancel fetch if component unmounted
      source.cancel('component unmounted');
    };
  }, []);

  return {data, loading, error, message};
};

export default useFetch;
