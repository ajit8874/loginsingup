import React from 'react';
import { Link } from 'react-router-dom';
function Home(){
    return (
        <div>
          <h1>This is Home page .Only Loggedin person allowed</h1>
          <Link to="/logout">Logout</Link>
        </div>
    )
}
export default Home;