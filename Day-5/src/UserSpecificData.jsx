import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const UserSpecificData = () => {
  const { user } = useContext(AuthContext);
  const { id, isLogin } = user;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLogin) {
      getUserData();
    } else {
      setError('User is not login');
    }
  }, [id, isLogin]);

  const getUserData = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      console.log(id);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
      );

      if (!response.ok) {
        throw new Error('Fetch failed');
      }

      const data = await response.json();
      setData(data);

      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="m-3">
      <h1 className="flex justify-center font-bold text-orange-600 mb-2">
        User Data
      </h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && data.length === 0 && <p>No results found.</p>}
      {data && (
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Index</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-2 py-2">
                  {item.title}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {item.body}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserSpecificData;
