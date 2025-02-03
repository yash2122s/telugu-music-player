import React, { useEffect, useState } from 'react';
import { songService } from '../services/api';

function Home() {
  const [serverStatus, setServerStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await songService.testConnection();
        setServerStatus(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    testConnection();
  }, []);

  return (
    <div>
      <h1>Welcome to Telugu Music Player</h1>
      <div style={{ marginTop: '20px' }}>
        <h2>Backend Status:</h2>
        {serverStatus ? (
          <div style={{ 
            backgroundColor: '#f0f0f0', 
            padding: '15px', 
            borderRadius: '5px' 
          }}>
            <pre>{JSON.stringify(serverStatus, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {error && (
          <div style={{ 
            color: 'red', 
            backgroundColor: '#ffe6e6', 
            padding: '10px', 
            borderRadius: '5px' 
          }}>
            Error: {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home; 