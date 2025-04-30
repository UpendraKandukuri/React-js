import React, { useEffect, useState } from 'react';

const CancellableFetcher = ({ query }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?q=${query}`,
          {
            signal,
          }
        );

        if (!response.ok) {
          throw new Error('Fetch failed');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log(' Fetch aborted');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [query]);

  return (
    <div>
      <h3>Results for: {query}</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && data.length === 0 && <p>No results found.</p>}
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
};

export default CancellableFetcher;
