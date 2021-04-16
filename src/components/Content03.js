import React from 'react'
import bg2 from '../img/bg2.jpg'
import { Link } from 'react-router-dom'



export default function Content03() {
    return (
        <>
            <div className="content03">
                <div className="container">
                    <div className="textIntro03">
                        <div className="topicContent03">"สร้างความประทับใจ<br />และความทรงจำที่ดี <br />ให้กับคนที่คุณรัก"</div>
                        <Link to='/Products' className="btnGreen"><div>ดูช่อดอกไม้ทั้งหมด</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}