import React,{useState} from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import SweetAlert from "sweetalert";
const Login =()=>{
const [username,setusername]=useState('');
const [password,setpassword]=useState('');



const validate=(event)=>{
    event.preventDefault();
    if(username=="javascript" && password=="react"){
       
        SweetAlert("login Successful","Congratulations",'success');
    }
    else{
        SweetAlert("Invalid details","Please check your credentials","error");
    }
}

return(
    <div>
        <div className="row justify-content-center">
            <div className='col-md-4'>
                <h1>User Authentication</h1><br></br>
                <form onSubmit={validate}>
                    <input type="text" placeholder="username" className="form-control" value={username} onChange={(e)=>{setusername(e.target.value)}}></input><br></br>
                    <input type="text" placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}></input><br></br>
                    <input type="submit" className="btn btn-primary"></input>

                </form>

            </div>


        </div>
    </div>
    );
}

export default Login;