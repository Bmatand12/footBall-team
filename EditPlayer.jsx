import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPlayer({ playersArray, usersArray, editPlayer }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [goals, setGoals] = useState('');
    const [assists, setAssists] = useState('');
    const [team, setTeam] = useState('');
    const [inLine, setInLine] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const nav = useNavigate();
    const { teamName } = useParams();


    
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

    useEffect(() => {
        // Filter players based on the selected team
        const filtered = playersArray.filter(player => player.teamName === selectedTeam);
        setFilteredPlayers(filtered);
    }, [selectedTeam, playersArray]);

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleAge = (event) => {
        setAge(event.target.value);
    }

    const handleGoals = (event) => {
        setGoals(event.target.value);
    }

    const handleAssists = (event) => {
        setAssists(event.target.value);
    }

    const handleInLine = (event) => {
        setInLine(event.target.checked);
    }

    const handleTeam = (event) => {
        setTeam(event.target.value);
    }

    const handleTeamChange = (selectedOption) => {
        setSelectedTeam(selectedOption.value);
    }

    // const saveButton = () => {
    //     editPlayer();
    //     console.log(playersArray);
    // }

    return (
        <div>
            <h1>Edit Player Page</h1>
            <p>Please select a team:</p>
            <Select options={usersArray.map(user => ({ value: user.teamName, label: user.teamName }))} onChange={handleTeamChange} />

            <p>Please select a player:</p>
            <Select options={filteredPlayers.map(player => ({ value: player.playerId, label: player.playerName }))} />

            <div>
                <p>Please enter player name:</p>
                <input type='text' placeholder='Enter name' value={name} onChange={handleName} /><br />
                <p>Please enter player age:</p>
                <input type='number' placeholder='Enter age' value={age} onChange={handleAge} /><br />
                <p>Please enter player goals:</p>
                <input type='number' placeholder='Enter goals' value={goals} onChange={handleGoals} /><br />
                <p>Please enter player assists:</p>
                <input type='number' placeholder='Enter assists' value={assists} onChange={handleAssists} /><br />
                <p>Please enter player Team:</p>
                <input type='text' placeholder='Enter team' value={team} onChange={handleTeam} /><br />
                <p>Please press the checkbox if the player is in line:</p>
                <input type='checkbox' checked={inLine} onChange={handleInLine} /><br />


                <button onClick={()=>editPlayer(name,age,goals,assists,inLine,team)}>Save</button>
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
    );
}
