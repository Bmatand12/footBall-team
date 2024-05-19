import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Team({ usersArray, playersArray }) {
    const { teamName } = useParams();
    const nav = useNavigate();
    const [searchPlayer, setSearchPlayer] = useState('');
    const [showAllPlayers, setShowAllPlayers] = useState(false); // הוספת משתנה לניהול מצב ההצגה

    const handleSearchPlayer = (event) => {
        setSearchPlayer(event.target.value);
    }

    const handleShowAllPlayers = () => {
        setShowAllPlayers(!showAllPlayers); // שינוי מצב ההצגה בלחיצת כפתור
    }

    function teamButton() {
        nav(`/team/${teamName}`);
    }

    function addPlayerButton() {
        nav(`/team/${teamName}/add` );
    }

    function editPlayerButton() {
        nav(`/team/${teamName}/edit`);
    }

    function logOutButton() {

              localStorage.clear();
             
             nav("/");
    }

    // const filteredPlayers = playersArray.filter(player => {
    //     if (!searchPlayer) return true;
    //     return player.playerName.toLowerCase().includes(searchPlayer.toLowerCase());
    // });

    // סינון השחקנים על פי הסטטוס "in line"
    const filterdPlayers = showAllPlayers ? 
    playersArray.filter(player => player.teamName === teamName && player.playerName.toLowerCase().includes(searchPlayer.toLowerCase())) : 
    playersArray.filter(player => player.teamName === teamName && player.inLine === "Yes" && player.playerName.toLowerCase().includes(searchPlayer.toLowerCase()));

    // עיצוב השחקנים בתוך ריבועים 2 בשורה
    const playerItems = filterdPlayers.map(player => (
        <div key={player.playerName} style={{
            border:'black solid',
            marginLeft:'800px',
            marginBottom:'60px', 
            width:'400px',
            height:'130px',
            justifyContent:'center',
            font:'menu', 
            fontSize:'20px', 
            backgroundColor:'#fff',
            padding: '10px',
            textAlign: 'center',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column'
        }}>
            Player Name: {player.playerName}<br/>
            Player Age: {player.age}<br/>
            Player In Line: {player.inLine}<br/>
            Player Team: {player.teamName}<br/>
        </div>
    ));

    return (
        <div>
            <h1>Welcome to {teamName} Team</h1>
            <div>
                <input type='text' placeholder='Search player' value={searchPlayer} onChange={handleSearchPlayer} />
                <button onClick={handleShowAllPlayers}>{showAllPlayers ? "Show In Line Only" : "Show All Players"}</button>
            </div>
            <div>
                <h2>Players:</h2>
                <div>
                    {playerItems}
                </div>
            </div>
            <div style={{
                height: '100vh',
                width: '160px',
                position: 'fixed',
                top: '0',
                left: '0',
                backgroundColor: 'grey',
                paddingTop: '20px',
            }}>
                <button style={{ display: 'block', color: 'black', padding: '16px', textDecoration: 'none', marginBottom: '10px' }} onClick={teamButton}>Team</button>
                <button style={{ display: 'block', color: 'black', padding: '16px', textDecoration: 'none', marginBottom: '10px' }} onClick={addPlayerButton}>Add Player</button>
                <button style={{ display: 'block', color: 'black', padding: '16px', textDecoration: 'none', marginBottom: '10px' }} onClick={editPlayerButton}>Edit Player</button>
                <button style={{ display: 'block', color: 'black', padding: '16px', textDecoration: 'none', marginBottom: '10px' }} onClick={logOutButton}>Log Out</button>
            </div>
        </div>
    )
    
}
