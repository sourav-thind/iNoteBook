import React , {useState}from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Login = (props) => {
    const [Credentials, setCredentials] = useState({email:"" , password:""});
    let navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch(`https://i-note-book-api.vercel.app/api/auth/login`, {
            method: 'POST', 
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:Credentials.email, password:Credentials.password})
        })
            const json = await response.json()
         

            if(json.success){
                localStorage.setItem('token',json.authToken);
                props.showAlert("Logged In", "success");
                navigate('/notes');
              
            }
            else{
              props.showAlert("Sorry, Invalid Credentials", "danger");
            }
    }

    const onChange = (e)=>{
        setCredentials({...Credentials, [e.target.name]: e.target.value})
    }
  return (
  
    <div className='container ' style={{height: '360px'}}>
        <h1 className='my-2 '>Login </h1>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label my-1">Email</label>
    <input type="email" className="form-control my-1" id="email" value={Credentials.email} name="email" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text my-3">We'll never share your data with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label my-1">Password</label>
    <input type="password" className="form-control my-1" name="password" value={Credentials.password} onChange={onChange} id="password"/>
  </div>
  
  <button type="submit"  className="btn btn-primary ">Submit</button>
</form>
    </div>

  )
}

export default Login