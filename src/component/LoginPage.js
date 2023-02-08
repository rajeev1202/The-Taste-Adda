import { useState } from 'react';


const LoginPage = () => {
    const [ name , setName] = useState('');
    return (
       <div className="login-container">
           <form className="login-card">
                <div className="form-input">
                    <input placeholder="Email" value={name}
                    onChange = {(e) => setName(e.target.value)}
                 required/></div>
                <div className="form-input"><input placeholder="Phone number"/></div>
                <div className="form-input"><input  placeholder="Password"/></div>
                <div><button type="submit">Submit</button></div>
           </form>
       </div>
    )
}


export default LoginPage;