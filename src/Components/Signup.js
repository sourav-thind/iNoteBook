import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = (props) => {
    const [Credentials, setCredentials] = useState({name:"" , email:"" , password:"", cpassowrd:""});
    let navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {name, email ,password} = Credentials;
        const response = await fetch(`https://i-note-book-api.vercel.app/api/auth/createuser`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        const json = await response.json()
        console.log(json);
        if(json.success){
                localStorage.setItem('token', json.authtoken);
                navigate('/login');
                props.showAlert("Account Created Successfully", "success");
        }
        else{
          props.showAlert("Sorry, Invalid Credentials", "danger");
        }
            
    }

    const onChange = (e)=>{
        setCredentials({...Credentials, [e.target.name]: e.target.value})
    }

  return (
    <div className='container'>
        <h1 className='mt-2'>SignUp</h1>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name"  onChange={onChange} aria-describedby="emailHelp"/>
  </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" onChange={onChange} id="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name="cpassword" onChange={onChange} id="cpassword"/>
  </div>
  
  <button type="submit" className="btn btn-primary my-3">Submit</button>
</form>

    </div>
  )
}

export default Signup