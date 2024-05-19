import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage({ usersArray }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();
   

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleUserName = (event) => {
        setUserName(event.target.value)
    }

    const checkUser = () => {
        const foundUser = usersArray.find(user => user.userName === userName && user.password === password);
        if (foundUser) {
            const teamName = foundUser.teamName;
            alert('Welcome')
            nav(`/team/${teamName}`);
          

        } else {
            alert('Invalid username or password')
        }
    }

    const registerButton = () => {
        nav('/register')
    }

    return (
        <div>
            <h1>Football Club</h1>
            <input type='text' placeholder='Type your user name' value={userName} onChange={handleUserName}></input>
            <input type='password' placeholder='Type your password' value={password} onChange={handlePassword}></input>
            <button onClick={checkUser}>Login</button>
            <button onClick={registerButton}>Register</button>
           
        </div>
    )
}
