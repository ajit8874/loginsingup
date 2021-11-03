import React from 'react';
import { Link,Redirect} from 'react-router-dom';
function Logout(){
  localStorage.removeItem("token");

  // const token=localStorage.getItem('token');
  //   let loggedin=true;
  //   if(token==null){
  //       loggedin=false;
  //   }
  //   if(loggedin===false){
  //     return <Redirect to="/login" />
  //   }
    return (
        <div>
          <h1>You have been logout</h1>
          <Link to="/login">Login again</Link>
        </div>
    )
}
export default Logout;