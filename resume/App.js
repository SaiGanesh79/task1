
import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import './css/bootstrap.min.css';
import profilepic from './1077114.svg';

function App() {
  let profile=data.profile;
  return (

    {profile.map((value)=>(
      <div className="container mt-5">
      <div className="card" style={{width:"25rem",fontstyle:"italic",boxShadow:"0px 8px 8px #000"}}>
        <img src={profilepic} />
          <div className="card-body text-center">
            <h1>{value.name}</h1>

            <div className="card-text">
              <h4>{value.role}</h4>
     </div>
     <a href={"tel"+value.phone}>{value.phone}</a><br/>
     <a href={"mailto"+value.email}>{value.email}</a>
     </div>
     </div>
       </div>

      ))}
    );
    
}

export default App;