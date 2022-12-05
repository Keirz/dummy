
import React from 'react';
import './App.css';
import './App.css';
import PostsWithAxios from './PostsWithAxios';

function App() {
/* 
  const [players, setPlayers] = useState([]);

 
  useEffect(() => {
    axios('https://raw.githubusercontent.com/Keirz/dummy/main/data.json')
    .then(response => {
      setPlayers(response.data.players)
      
      console.log(response.data)
      console.log(players)
      })

  }, []);

const useaxiosPlayers = (() => { players.map((player)=>{
  return (<div>
              <h3>{player.position}</h3>
              <h4>{player.nome}</h4>
              <p>{player.game}</p>
            </div> )
  })
}) */
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
          </li>
        </ul>
        
      </nav>
      <>
      <h1>Usando o Axios no JSON do GHUB</h1>
      <div className="axioscontainer">
          <PostsWithAxios />
      </div>
    </>
      
    </div>
  );
}

export default App;
