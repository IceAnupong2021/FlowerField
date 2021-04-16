import React from 'react'
import { Link } from 'react-router-dom'



export default function Content04() {
    return (
        <>  
            <div className="content04">
                <div className="container">
                    <div className="textIntro04">
                        <div className="topicContent04">เป็นสมาชิกกับเรา</div>
                        <div className="detailContent04">รับส่วนลด 10-15% ต่อรายการ</div>
                        <div className="detailContent04">รับสิทธิ์จัดส่งฟรี</div>
                        <Link to='/Register' className="btnGreen"><div >สมัครสมากชิกเลย</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}