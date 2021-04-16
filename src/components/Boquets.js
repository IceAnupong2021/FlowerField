import React, { useContext } from 'react'
import postContext from './PostContext'
import addCartContext from './AddCartContext'


export default function Boquets() {
    const context = useContext(postContext)

    const {addItem, setAddItem} = useContext(addCartContext)

    const add = (bouqets) =>{
        setAddItem([...addItem, bouqets])
    }

    return (
        context.products.map((bouqets) => {
            return (
                <div className="boquet">
                    <img className="bouqetImg" src={bouqets.image} alt="image"></img>
                    <div className="infoBouqet">
                        <div className="setInfo">
                            <p className="nameBouqets">{bouqets.name} </p>
                            <p className="nameFlowers">({bouqets.flowers})</p>
                        </div>
                        <p className="namePrice">ราคา : {bouqets.price} บาท </p>
                    </div>
                    <div className="btnShop">
                        <button className="btnAdd" onClick={() => add(bouqets)}>ใส่ในตะกร้า</button>
                        <button className="btnBuy">ซื้อสินค้า</button>
                    </div>
                </div>

            )
        })
    )
}