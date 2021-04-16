import React from 'react'
import Addcart from './AddCart'
import { useContext } from 'react'
import addCartContext from './AddCartContext'
import authContext from './authContext'
import {useHistory} from 'react-router-dom'



export default function CheckOut() {

    const {token, setToken} =useContext(authContext)

    const itemInCart = useContext(addCartContext)

    const totalprice = itemInCart.addItem.reduce((sum, each) => {
        sum = sum + each.price
        return sum
    }, 0)
    console.log(totalprice)

    const history = useHistory();

    const payment = () => {
        if (token){
            alert('จ่ายเงินได้เลย')
        }else{
            history.push("/Login");
        }

    }

    return (

        <>
            <div className="container">
                <div className="boundaryCheck">
                    <div className="productList">
                        <div className="productList">
                            <div className="topicCheck">รายการสินค้า</div>
                            <div>
                                <Addcart />
                            </div>
                        </div>
                        <div className='boundaryAdd'>
                            <div className="nameTotalBouqets" >รวมราคาทั้งหมด</div>
                            <div className="nameTotalPrice" > {totalprice} บาท</div>
                        </div>
                    </div>
                    <div className="infoAdress">
                        <div>ที่อยู่ในการจัดส่ง</div>
                        <input type="text" />
                        <div>วันและเวลาในการจัดส่ง</div>
                        <input type="date" />
                        <input type="time" />
                        <div><button className="textRegis" type="submit" onClick={payment}>ชำระเงิน</button></div>
                    </div>
                </div>
            </div>
        </>
    )


}