import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actLoginSuccess } from '../actions/index';

export const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_ENDPOINT + "/login", {
            password: username,
            username: password
        }).then(function (response) {
            if (response.status === 200) {
                if (response.data.success) {
                    alert('Thành công');

                    //dispatch action để update store
                    dispatch(actLoginSuccess(username, response.data.data));

                    //chuyển trang ở đâu tùy
                }
                else {
                    alert('Thất bại')
                }
            }
        })
            .catch(function (error) {
                console.log(error);
            })
    };

    return (
        <div>
            <h2>LOGIN</h2>
            <div>
                Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};