import { useEffect, useState } from 'react';
import { CountryType } from '../../types';

const useGetData = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CountryType[] | undefined>();

  const getData = async () => {
    try {
      setLoading(true);

      // Fetch list of countries from external api
      let response = await fetch('https://restcountries.com/v3.1/all?fields=name');
      response = await response.json();

      // Reset the error if api call is successful
      setError('');

      // Did this because fetch's data is returned as Response type
      let countryData = response as unknown as CountryType[];

      // Sort results
      countryData = countryData.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );

      // Set result as state
      setData(countryData);
    } catch (error) {
      setError("Couldn't retrieve countries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { error, loading, data };
};

export default useGetData;
