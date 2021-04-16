import React, { useState, useContext } from 'react'
import authContext from './authContext'




export default function Register() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const changeUser = (e) => {
    //     setEmail(e.target.value)
    // }

    // const changePass = (e) => {
    //     setPassword(e.target.value)
    // }

    // const { token, setToken } = useContext(authContext)

    // const login = (e) => {
    //     e.preventDefault();
    //     fetch('https://flower-shower-camt-bootcamp.pair-co.com/user/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             email,
    //             password
    //         })
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             setToken(data.token)
    //         })
    // }
    return (
        <>
            <div className="regisBg">
                <div className='containerReg'>
                    <div className='formUserReg'>
                        <div className="topicLogin">สมัครสมาชิก</div>
                        <form className="alignForm" >
                            <div className="topicRegis">อีเมลล์</div>
                            <input className="userFieldReg" type="text" placeholder="กรอกอีเมลล์" />
                            <div className="topicRegis">รหัสผ่าน</div>
                            <input className="userFieldReg" type="password" placeholder="รหัสผ่าน" />
                            <div className="topicRegis">ยืนยันรหัสผ่าน</div>
                            <input className="userFieldReg" type="password" placeholder="ยืนยันรหัสผ่าน" />
                            <button className="textRegis" type="submit">สมัครสมาชิก</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}