import React from 'react';
import { Link ,Redirect} from 'react-router-dom';
function Home(){

    const token=localStorage.getItem('token');
    let loggedin=true;
    if(token==null){
        loggedin=false;
    }
    if(loggedin===false){
      return <Redirect to="/login" />
    }
    
    // const auth=localStorage.getItem("auth");
    // let signup=true;
    // if(auth==null){
    //   signup=false;
    //   console.log("s.jcns")

    // }
    // if(signup===false){
    //   return <Redirect to="/" />
    // }
    
    return (
        <div>
          <h1>This is Home page .Only Loggedin person allowed</h1>
          <Link to="/logout">Logout</Link>
        </div>
    )
}
export default Home;