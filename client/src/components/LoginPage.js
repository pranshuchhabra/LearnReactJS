import React, { useState } from "react";


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div>
            <h3>Login Page</h3>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}


export default LoginPage;