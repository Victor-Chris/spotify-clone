import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './components/login/Login';
import Player from './components/player/Player';
import { getTokenFromUrl } from './spotify';
import { useStateValue } from '../src/data/StateProvider';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {

  //const [token, setToken] = useState<null>(null);
  //@ts-ignore
  const [{ user, token }, dispatch] = useStateValue();

  // Run when token is generated
  useEffect(() => {
    const hash: any = getTokenFromUrl();

    //Hide token from URL
    window.location.hash = '';

    const _token = hash.access_token;

    if (_token) {
      //setToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);

      spotify.getMe()
      .then(user => {
        //Add user to current state
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
    }
  }, [dispatch]);

  return (
    <div className="App">
      {token ? 
        <Player spotify={spotify} />
        : 
        <Login />
      }
    </div>
  );
}

export default App;
