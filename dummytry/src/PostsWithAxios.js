import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

export function PostsWithAxios() {

  const [players, setPlayers] = useState([]);

 
  useEffect(() => {
    axios('https://raw.githubusercontent.com/Keirz/dummy/main/data.json')
    .then(response => {
      setPlayers(response.data.players)
      
      console.log(response.data.players)
      console.log(players)
      })

  }, []);


  return (
    <div>
      <h1></h1>
      <div className="axioscontainer" >
             {players.map((player) => (
                        <div key={player.id}>
                        <h1>Player</h1>
                        <h3>{player.position}</h3>
                        <h4>{player.nome}</h4>
                        <p>{player.game}</p>
                        </div> 
                    ))}
      </div>
    </div>
  );
}

export default PostsWithAxios;
