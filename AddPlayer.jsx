import React, { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

export default function AddPlayer({ usersArray, playersArray }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [goals, setGoals] = useState('');
    const [assists, setAssists] = useState('');
    const [inLine, setInLine] = useState(false);
    const { teamName } = useParams();
    const nav = useNavigate();

    
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

    const chekeValidName = () => {
        if (name === "") {
            alert('Name is empty');
            return false;
        } else {
            return true;
        }
    }

    const chekeValidAge = () => {
        if (age < 18 || age > 60 || age === "") {
            alert('Age is invalid');
            return false;
        } else {
            return true;
        }
    }

    const chekeValidGoals = () => {
        if (goals === "") {
            alert('Goals is empty');
            return false;
        } else {
            return true;
        }
    }

    const chekeValidAssists = () => {
        if (assists === "") {
            alert('Assists is empty');
            return false;
        } else {
            return true;
        }
    }

    const chekeInLines = () => {
        const inLinePlayers = playersArray.filter(player => player.inLine === 'Yes');
        const countOfInLines = inLinePlayers.length;

        if (countOfInLines < 11 || (countOfInLines === 11 && !inLine)) {
            return true;
        } else {
            alert('There are already 11 players in line');
            return false;
        }
    }

    const addNewPlayerInArray = () => {
        if (chekeInLines() && chekeValidAge() && chekeValidAssists() && chekeValidGoals() && chekeValidName()) {
            playersArray.push({
                playerName: name,
                age: age,
                playerGoals: goals,
                playerAssists: assists,
                teamName: teamName,
                inLine: inLine ? 'Yes' : 'No'
            });
            alert('add sucssfully')
            console.log(playersArray)
            setName('')
            setAge(0)
            setAssists(0)
            setGoals(0)
            setInLine(false)
        } 
        else {
            alert('Error');
        }
    }

    return (
        <div>
            <h1>Add New Player to The Team</h1>
          
            <p>Please enter player name:</p>
            <input type='text' placeholder='Enter name' value={name} onChange={handleName} /><br />
            <p>Please enter player age:</p>
            <input type='number' placeholder='Enter age' value={age} onChange={handleAge} /><br />
            <p>Please enter player goals:</p>
            <input type='number' placeholder='Enter goals' value={goals} onChange={handleGoals} /><br />
            <p>Please enter player assists:</p>
            <input type='number' placeholder='Enter assists' value={assists} onChange={handleAssists} /><br />
            <p>Please press the checkbox if the player is in line:</p>
            <input type='checkbox' checked={inLine} onChange={handleInLine} /><br />

            <button onClick={addNewPlayerInArray}>Add Player</button>

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
