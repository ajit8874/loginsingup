import React from 'react';
import { Link} from 'react-router-dom';
function Logout(){
    return (
        <div>
          <h1>You have been logout</h1>
          <Link to="/">Login again</Link>
        </div>
    )
}
export default Logout;