import { useState } from 'react';

const FetchingButton = () => {
  const [data, setData] = useState({
    a: 1,
  });

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8080/my', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      alert(data);
      setData(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div className='data'>server response : {JSON.stringify(data)}</div>
      <button onClick={getData}>Get Data in credentials</button>
    </div>
  );
};

export default FetchingButton;
