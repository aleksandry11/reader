import React, {useState} from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:8080/auth/sign-up',
            data: {
              email: email,
              password: password
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="login">
            <form onSubmit={submit}>
                <input type="text" value={email}  onChange={ e => setEmail(e.target.value)} />
                <input type="text" value={password} onChange={ e => setPassword(e.target.value)} />
                <button>Sign up</button>
            </form>
        </div>
    );
}

export default Login;