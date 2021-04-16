import React from 'react'
import logo02 from '../img/logo02.png'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='containerFooter'>
                        <img className="logo" src={logo02} />
                        <div className="footerMenu">
                            <p className="topicFooter">สินค้าของเรา</p>
                            <p className="detailFooter"c>ช่อดอกไม้</p>
                        </div>
                        <div className="footerMenu">
                            <p className="topicFooter">ให้ตามโอกาส</p>
                            <p className="detailFooter">ขอบคุณ</p>
                            <p className="detailFooter">ขอบโทษ</p>
                            <p className="detailFooter">รับปริญญา</p>
                            <p className="detailFooter">วันเกิด</p>
                            <p className="detailFooter">วันครบรอบ</p>
                        </div>
                        <div className="footerMenu">
                            <p className="topicFooter">ติดต่อเรา</p>
                            <p className="detailFooter"> <AiFillFacebook/> facebook</p>
                            <p className="detailFooter"> <AiFillInstagram /> instagram</p>
                            <p className="detailFooter">โทร : +66 999 9999</p>
                            <p className="detailFooter">อีเมลล์ : flowerfield@mail.com</p>
                        </div>
                        <div className="footerMenu">
                            <p className="topicFooter">ที่ตั้งร้าน</p>
                            <p className="detailFooter">123  ถนนโชตนา ตำบลช้างเผือก </p>
                            <p className="detailFooter"> อ.เมือง เชียงใหม่ 50120 </p> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}