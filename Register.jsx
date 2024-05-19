import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register({usersArray}) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [teamName, setTeamName] = useState('');
    const [repitPassword, setRepitPassword] = useState('');
    const [nameError,setNameError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [teamNameError,setTeamNameError] = useState('')
    const [repitPasswordError,setRepitPasswordError] = useState('')
    const [showError, setShowError] = useState(false);
    const nav = useNavigate();

   

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleUserName = (event) => {
        setUserName(event.target.value)
    }

    const handleTeamName = (event) => {
        setTeamName(event.target.value)
    }

    const handlerepitPassword = (event) => {
        setRepitPassword(event.target.value)
    }

    
  const checkName=()=>{
    if(userName.length<4)
    {
      alert('Erro Name is to short')
      setNameError('Erro Name is to short')
      setShowError(true);
    }
    else if(!isNaN(userName))
    {
      alert('Erro Name can not contain numbers')
      setNameError('Erro Name can not contain numbers')
      setShowError(true);
    }
    else{
        setNameError('')
        return true
    }
  }

  function containSmallLeterss()
  {
    for(let i=0;i<password.length;i++)
    {
      if (/[a-z]/.test(password[i]))
      {
        return true
      }

    }
    return false
  }

  function containBigLeterss()
  {
    for(let i=0;i<password.length;i++)
    {
      if (/[A-Z]/.test(password[i]))
      {
        return true
      }

    }
    return false
  }



  function containNumber()
  {
    for(let i=0;i<password.length;i++)
    {
      if (/\d/.test(password[i]))
      {
        return true
      }

    }
    return false
  }


  function containSpecialChars()
  {
    for(let i=0;i<password.length;i++)
    {
      if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password[i]))
      {
        return true
      }

    }
    return false
  }
 

  const checkPassword=()=>{

    if(password.length<8)
    {
      alert('Erro password is to short')
      setPasswordError('Erro password is to short')
      setShowError(true)
    }
    else if(!containBigLeterss())
    {
        alert('Erro password not contain big letter char')
        setPasswordError('Erro password not contain big letter char')
        setShowError(true)

    }

    else if(!containSmallLeterss())
    {
        alert('Erro password not contain small letter char')
        setPasswordError('Erro password not contain small letter char')
        setShowError(true)

    }

    else if(!containSpecialChars())
    {
        alert('Erro password not contain special char')
        setPasswordError('Erro password not contain special char')
        setShowError(true)

    }

    else if( !containNumber())
    {
      alert('Erro password not contain number')
      setPasswordError('Erro password not contain number')
      setShowError(true)

     }

    else {
        setPasswordError('')
        return true;
       
    }
  }

  const checkRepitPassword=()=>{
    if(password===repitPassword)
    {
        return true
    }
    else{

        return false
    }
  }

const checkTeamName=()=>{
    for(let i=1;i<teamName.length;i++)
    {
        if(teamName[i]==teamName[i].toUpperCase() && teamName[i-1] != " ")
        {
            return false
        }

    }
    return true
}

const checkTeamNameAlert=()=>{
    if(!checkTeamName())
    {
        alert('Erro Team Name')
        setTeamNameError('Erro Team Name')
        setShowError(true)

     }
     else {
        setTeamNameError('')
        return true;
       
    }
 }

 const checkRepitPasswordAlert=()=>{
    if(!checkRepitPassword())
    {
        alert('Erro password not equal to repit password')
        setPasswordError('Erro password not equal to repit password')
        setShowError(true)

     
     }
     else {
        setRepitPasswordError('')
        return true;
       
    }
 }



  const registerButton=()=>{
    checkName()
    checkPassword()
    checkTeamNameAlert()
    checkRepitPasswordAlert()
    pushInArray()

  }

  function pushInArray(){
    if(checkName() && checkPassword() && checkTeamNameAlert() && checkRepitPasswordAlert())
    {
        usersArray.push({userName:userName,teamName:teamName,password:password});
        alert('Welcome!')
        console.log(usersArray)
        nav("/")
        
    }
  }

  return (
<div>

            <input type='text' placeholder='Type your user name' value={userName} onChange={handleUserName} onFocus={() => setShowError(false)}/><br/>
            {nameError && showError && <div style={{ color: 'red' }}>{nameError}</div>}
            <input type='text' placeholder='Type your team name' value={teamName} onChange={handleTeamName}  onFocus={() => setShowError(false)}/><br/>
            {teamNameError && showError && <div style={{ color: 'red' }}>{teamNameError}</div>}
            <input type='text' placeholder='Type your password' value={password} onChange={handlePassword}  onFocus={() => setShowError(false)}/><br/>
            {passwordError && showError && <div style={{ color: 'red' }}>{passwordError}</div>}
            <input type='text' placeholder='Type your password again' value={repitPassword} onChange={handlerepitPassword}  onFocus={() => setShowError(false)}/><br/>
            {repitPasswordError && showError && <div style={{ color: 'red' }}>{repitPasswordError}</div>}
            <button onClick={registerButton}>Click for register</button>
    </div>
  )
}
