import React from 'react'
import BestBoquets from './BestBoquets'
import { FaStar } from "react-icons/fa";
import mock1 from '../img/mock1.jpg'
import mock2 from '../img/mock2.jpg'
import mock3 from '../img/mock3.jpg'
import { Link } from 'react-router-dom'


export default function Content02() {
    return (
        <>
            <div className="container">
                <div className="textContent02">
                    <div className="topicContent02">ช่อดอกไม้ขายดี</div>
                    <Link to='/Products' className="detailContent02"><div >ดูช่อดอกไม้ทั้งหมด</div></Link>
                </div>
                <div className="gridContainer">
                    <div className="boquet02">
                        <img className="bouqetImg" src={mock1} alt="image"></img>
                        <div className="infoBouqet">
                            <div className="setInfo">
                                <p className="nameBouqets"> Salmon Rose</p>
                                <p className="nameFlowers">(กุหลาบ, ทิวลิป)</p>
                            </div>
                            <div className="rating">
                                <div className="star"><FaStar /></div>
                                <div className="star"><FaStar /></div>
                                <div className="star"><FaStar /></div>
                                <div className="star"><FaStar /></div>
                                <div className="star"><FaStar /></div>
                            </div>
                            <p className="namePrice">ราคา : 2500 บาท </p>
                        </div>
                        <div className="btnShop">
                            <button className="btnAdd">ใส่ในตะกร้า</button>
                            <button className="btnBuy">ซื้อสินค้า</button>
                        </div>
                    </div>
                    <div className="boquet02">
                        <img className="bouqetImg" src={mock2} alt="image"></img>
                        <div className="infoBouqet">
                            <div className="setInfo">
                                <p className="nameBouqets">Pink Jewel</p>
                                <p className="nameFlowers">(กุหลาบ, มากาเร็ตบอร์เนียว)</p>
                            </div>
                            <div className="rating">
                                <div className="star"><FaStar /></div>
                                <div className="star"><FaStar /></div>
                                <div className="star"><FaStar /></div>
                                <div className="star"><FaStar /></div>
                                <div className="star0"><FaStar /></div>
                            </div>
                            <p className="namePrice">ราคา : 2000 บาท </p>
                        </div>
                        <div className="btnShop">
                            <button className="btnAdd">ใส่ในตะกร้า</button>
                            <button className="btnBuy">ซื้อสินค้า</button>
                        </div>
                    </div>
                    <div className="boquet02">
                        <img className="bouqetImg" src={mock3} alt="image"></img>
                        <div className="infoBouqet">
                            <div className="setInfo">
                                <p className="nameBouqets">Snow white</p>
                                <p className="nameFlowers">(กุหลาบ, ไฮเดรนเยีย)</p>
                            </div>
                            <div className="rating">
                                <div className="star"><FaStar /></div>
                                <div className="star"><FaStar /></div>
                                <div className="star"><FaStar /></div>
                                <div className="star"><FaStar /></div>
                                <div className="star0"><FaStar /></div>
                            </div>
                            <p className="namePrice">ราคา : 1800 บาท </p>
                        </div>
                        <div className="btnShop">
                            <button className="btnAdd">ใส่ในตะกร้า</button>
                            <button className="btnBuy">ซื้อสินค้า</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}