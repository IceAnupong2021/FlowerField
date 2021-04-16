import React from 'react'
import Content02 from './Content02'
import Content03 from './Content03'
import Content04 from './Content04'
import { Link } from 'react-router-dom'

export default function Landing() {

    return (
        <>
            <section>
                <div className="content01">
                    <div className="container">
                        <div className="textIntro">
                            <div className="topicContent01">ให้ทุกวันเป็นวันพิเศษ<br />และน่าจดจำสำหรับคุณ</div>
                            <div className="detailContent01">ช่อดอกไม้หลากหลายรูปแบบ ให้คุณเลือกมอบให้คนที่คุณรัก</div>
                            <Link to='/Products' className="btnGreen"><div >เลือกซื้อเลย</div></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Content02 />
            <Content03 />
            <Content04 />

        </>
    )
}