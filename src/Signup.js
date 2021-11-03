import React,{useState} from 'react';
import {Redirect } from 'react-router-dom'
//import {Button,Form} from 'react-bootstrap/form'
function Signup(){

    const [username,setUsername]=useState();
    const [email,setEmail]=useState();

    const [password,setPassword]=useState();
    const [confirmpassword,setConfirmpassword]=useState()
     
    const [signup,setSignup]=useState(false);

   // var auth =localStorage.getItem('auht');

    function signupData(e){
        e.preventDefault();
        
          if(password===confirmpassword){
              let obj={
                  username:username,
                  email:email,
                  password:password,
                  confirmpassword:confirmpassword
                     

            }
              localStorage.setItem('mydata',JSON.stringify(obj));
               setSignup(true);
            
         }

    }
    if(signup){
        // console.log(username)
         return <Redirect to="/login" />
     }  
    return (
       <div class="section">
       <div class="signup"> 
           <h1>Signup Component</h1>
           <form onSubmit={signupData}>

             <input  type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} /> <br /> <br />
             <input  type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br /> <br />
             
             <input  type="Pasword" placeholder="password" value={password}
             onChange={(e)=>setPassword(e.target.value)} /><br /> <br />

             <input  type="Pasword" placeholder="confirmpassword" 
             onChange={(e)=>setConfirmpassword(e.target.value)} /><br /> <br /> 
             
             <input type="submit" /> 
             
           </form>      
        </div>
     </div>
       
    )
}
export default Signup;