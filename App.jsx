import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import Team from './components/Team'
import Register from './components/Register'
import AddPlayer from './components/AddPlayer'
import EditPlayer from './components/EditPlayer'



function App() {



  const usersArray=[
    {userName:'matan',teamName:'milan',password:'1234'},
    {userName:'shay',teamName:'maccabi',password:'12345'}
  ]

  const [playersArray, setPlayersArray] = useState([
    { playerName: 'matan ben david', age: 26, inLine: 'Yes', teamName: 'milan', playerAsists: 2, playerGoals: 3 },
    { playerName: 'yoni ben david', age: 26, inLine: 'Yes', teamName: 'milan', playerAsists: 2, playerGoals: 3 },
    { playerName: 'mike tyson', age: 26, inLine: 'No', teamName: 'milan', playerAsists: 2, playerGoals: 3 },
    { playerName: 'matan ben dor', age: 26, inLine: 'Yes', teamName: 'maccabi', playerAsists: 2, playerGoals: 3 },
    { playerName: 'matan cohen', age: 26, inLine: 'No', teamName: 'maccabi', playerAsists: 2, playerGoals: 3 }
  ]);
  
  
 const editPlayer = (name, age, goals, assists, inLine,team) => {
  // יצירת שחקן חדש עם הנתונים המעודכנים
  const updatedPlayer = {
    playerName: name,
    age: age,
    playerGoals: goals,
    playerAsists: assists,
    inLine: inLine,
    teamName:team
  };

  // יצירת מערך חדש המכיל את כל השחקנים, אך עם השחקן המעודכן במקום השחקן הישן
  const updatedPlayersArray = playersArray.map(player => {
    // אם זהו השחקן שצריך לעדכן, נחזיר את השחקן המעודכן
    if (player.playerName === name) {
      return updatedPlayer;
    }
    // אחרת, נחזיר את השחקן הישן
    return player;
  });

  // עדכון המערך playersArray בערך החדש
  setPlayersArray(updatedPlayersArray);
  console.log(playersArray);
  console.log(updatedPlayer)
};


  return (
    <>
      <div>

        <Routes>
          <Route path='/' element={<HomePage usersArray={usersArray}/>}/>
          <Route path={'/team/:teamName'} element={<Team usersArray={usersArray} playersArray={playersArray} />}/>
          <Route path={'/team/:teamName/add'} element={<AddPlayer usersArray={usersArray} playersArray={playersArray}  />}/>
          <Route path={'/team/:teamName/edit'} element={<EditPlayer usersArray={usersArray} playersArray={playersArray} editPlayer={editPlayer}  />}/>
          <Route path='/register' element={<Register usersArray={usersArray}/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
