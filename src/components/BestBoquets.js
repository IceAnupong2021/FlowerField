import React, { useContext } from 'react'
import postContext from './PostContext'


export default function BestBoquets() {
    const context2 = useContext(postContext)

    return (
        context2.products.map((bouqets) => {
            return (
                <div className="boquet">
                    <img className="bouqetImg" src={bouqets[0].image} alt="image"></img>
                    <div className="infoBouqet">
                        <div className="setInfo">
                            <p className="nameBouqets">{bouqets[0].name} </p>
                            <p className="nameFlowers">({bouqets[0].flowers})</p>
                        </div>
                        <p className="namePrice">ราคา : {bouqets[0].price} บาท </p>
                    </div>
                    <div className="btnShop">
                        <button className="btnAdd">ใส่ในตะกร้า</button>
                        <button className="btnBuy">ซื้อสินค้า</button>
                    </div>
                </div>
            )
        })
    )
}