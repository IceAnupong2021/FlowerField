import React from 'react'
import logo from '../img/logo.png'
import { BsBag } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs"
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <>
            <header className="navbar">
                <div className="containerHead">
                    <img className="logo" src={logo}></img>
                    <nav className="menuBar">
                        <div className="menuBar02">
                            <Link to='/Landing' className="textMenu"><div >หน้าแรก</div></Link>
                            <Link to='/Products'className="textMenu"><div >ช่อดอกไม้</div></Link>
                            <Link to='/Content04' className="textMenu"><div >ติดต่อเรา</div></Link>
                        </div>
                        <div className="menuBar02">
                            <Link to='/Login' className="textMenu"><div >เข้าสู่ระบบ</div></Link>
                            <Link to='/Register' className="textRegis" ><div>สมัครสมาชิก</div></Link>
                            {/* <div className="textMenu"><BsBag /></div> */}
                            <Link to='/CheckOut' className="infoIcon"><div><BsBag /></div></Link>
                        </div>

                    </nav>
                </div>
            </header>
        </>
    )
}