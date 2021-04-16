import React, { useState, useContext } from 'react'
import authContext from './authContext'



export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeUser = (e) => {
        setEmail(e.target.value)
    }

    const changePass = (e) => {
        setPassword(e.target.value)
    }

    const { token, setToken } = useContext(authContext)

    const login = (e) => {
        e.preventDefault();
        fetch('https://flower-shower-camt-bootcamp.pair-co.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response => response.json())
            .then(data => {
                setToken(data.token)
            })
    }
    return (
        <>
            <div className="loginBg">
                <div className='container'>
                    <div className='formUser'>
                        <div className="topicLogin">เข้าสู่ระบบ</div>
                        <form className="alignForm" onSubmit={login} >
                            <input className="userField" type="text" 
                            placeholder="อีเมลล์" value={email} onChange={changeUser} />
                            <input className="userField" type="password" 
                            placeholder="รหัสผ่าน" value={password} onChange={changePass} />
                            <button className="textRegis" type="submit">เข้าสู่ระบบ</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}