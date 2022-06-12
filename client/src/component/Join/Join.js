
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

let user;

const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}

const Join = () => {

   const [name, setName] = useState();
   console.log(name);

    return (
        <div className="JoinPage">
            <div className="JoinContainer">   
                <img src={logo} alt="logo" />
                <h1>CHAT HOUSE</h1>    
                <input  onChange={(e) => setName(e.target.value) } placeholder="Enter Your Name" type="text" id="joinInput" />
                <Link onClick={(event) => !name ? event.preventDefault():null} to="/chat">  <button onClick={sendUser} className="joinbtn">Login In</button></Link>
            </div>
        </div>
    )
}

export default Join
export { user }
