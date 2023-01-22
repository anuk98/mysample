import React, { useState,useContext } from 'react';
import { Firebase } from '../../firebase/Config';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/FirebasContext';
import './Signup.css';

export default function Signup() {
  const [username,setUsername]=useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState('');
  const handleSubmit=(e)=>{
    e.preventDefault()
    Firebase.auth().createUsreWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username})
    }
  )}
  const{Firebase}=useContext(FirebaseContext)
    return (
    <div onSubmit={handleSubmit}>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
