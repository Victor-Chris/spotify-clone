import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './components/login/Login';
import { getTokenFromUrl } from './spotify';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState<null>(null);

  // Run when token is generated
  useEffect(() => {
    const hash: any = getTokenFromUrl();

    //Hide token from URL
    window.location.hash = '';

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe()
      .then(user => {
        
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? 
        <h1>Currently logged in, display player</h1> 
        : 
        <Login />
      }
    </div>
  );
}

export default App;
