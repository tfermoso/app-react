// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Hacer una solicitud GET al backend
    fetch('http://localhost/api/api.php')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handlePostRequest = () => {
    // Hacer una solicitud POST al backend
    fetch('http://localhost/api/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ example: 'data' }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data)
        setData(data)
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h1>React y PHP</h1>
      {data ? <p>{data.message}</p> : <p>Cargando...</p>}
      <button onClick={handlePostRequest}>Enviar Solicitud POST</button>
    </div>
  );
}

export default App;
