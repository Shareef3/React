

import { useNavigate } from 'react-router-dom'
import '../assets/css/login.css'
import axios from "axios";
import { useState, FormEvent } from 'react';

export default function Login() {

   const nav = useNavigate();

   const [message, setMessage] = useState('');
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");

   const loginSubmit = (e: FormEvent) => {
      e.preventDefault();
      console.log("user name--->" + name);
      console.log("user password...." + password);

      const loginUser = { name, password };

      axios.get("http://localhost:1234/nit/login?username=" + name + "&password=" + password)
         .then((res) => {
            console.log("result---->" + res.data);
            if (res.data == "success") {
               nav("/home");
            }
            else {
               axios.post("http://localhost:1234/nit/login/add"+name+"&password="+password)
               setMessage("Credentials are not good!");
               setName("");
               setPassword("");
            }
         });


   }
   return (
      <div>
         <div className="sidenav">
            <div className="login-main-text">
               <h2>Application Login Page</h2>
               <p>Login or register from here to access.</p>
            </div>
         </div>
         <div className="main">
            <div className="col-md-6 col-sm-12">
               <div className="login-form">
                  <form onSubmit={loginSubmit}>
                  <div>
				          {message}
			         </div>
                     <div className="form-group">
                        <label>User Name</label>
                        <input type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}className="form-control" placeholder="User Name" />
                     </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control" placeholder="Password" />
                     </div>
                     <button type="submit" className="btn btn-black">Login</button>
                     <button type="button" className="btn btn-secondary" >Register</button>
                  </form>
               </div>
            </div>
         </div>




      </div>




   )
}