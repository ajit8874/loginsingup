import React,{useState} from 'react';
import {Redirect } from 'react-router-dom'
function Signup(){

    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');

    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmpassword]=useState('')
     
    const [signup,setSignup]=useState(false);

   // const [print,setPrint]=useState(false);

   // var auth =localStorage.getItem('auht');

    function signupData(e){
        e.preventDefalut();
        // if(auth==null){
        //     auth=[];
        // }
         if(password===confirmpassword){
             setSignup(true);
            // console.log(signup);
            

         }
        // else{
        //     alert("password does not match.")
        // }
        if(signup){
            console.log(signup)
            return <Redirect to="/Home" />
            
    
        }


    }
    
    
    
    return (
       <div>
          <h1>Signup Component</h1>

           <form onSubmit={(e)=>signupData(e)}>

             <input  type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} /> <br /> <br />
             <input  type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br /> <br />
             
             <input  type="Pasword" placeholder="password" value={password}
             onChange={(e)=>setPassword(e.target.value)} /><br /> <br />

             <input  type="Pasword" placeholder="confirmpassword" 
             onChange={(e)=>setConfirmpassword(e.target.value)} /><br /> <br /> 
           </form>
           
           <input type="submit"  />
        </div>
       
    )
}
export default Signup;