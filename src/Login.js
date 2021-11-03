import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
function Login(){
    // let IsloggedIn=false
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    //const [print,setPrint]=useState(false)
    const [loggedin,setLoggedin]=useState(false)

    
    // const token=localStorage.getItem("token");
    // setLoggedin(true);
    // if(token==null){
    //     loggedin=false;
    // }

    function submitForm(e){
        e.preventDefault();
        let data=localStorage.getItem('mydata');
        data=JSON.parse(data);
        console.log(data)
        console.log(data.username)


        if(username===data.username && password===data.password){
            localStorage.setItem("token","kasjcnsd"); 
            setLoggedin(true);
        }
         else{ 
        //     <Redirect to="/Signup" />
        alert("username or password does not match")

         }
        


    }
    if(loggedin){
        return <Redirect to="/Home" />
    }

    

    return (
     <div class="login-section">

        <div class="login">
          <h1>Login Component</h1>
          <form onSubmit={submitForm}>
             <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} /> <br></br> <br></br>
             <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br></br> <br></br>
             <input type="submit" /> 
           
          </form>
        </div>
        </div>
    
    )
}
export default Login;