import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
function Login(){
    // let IsloggedIn=false;
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    //const [print,setPrint]=useState(false)
    const [loggedin,setLoggedin]=useState(false)


    function submitForm(e){
        e.preventDefault()
        if(username==="A" && password==="B"){
            setLoggedin(true);
        }
        // else{ 
        //     <Redirect to="/Signup" />

        // }


    }
    if(loggedin){
        return <Redirect to="/Home" />
    }

    return (
        <div>
          <h1>Login Component</h1>
          <form onSubmit={submitForm}>
          <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} /> <br></br>
          <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br></br>
          <input type="submit" /> 
             
          </form>
        </div>
    )
}
export default Login;