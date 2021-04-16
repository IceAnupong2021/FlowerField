import React from 'react'
import { useContext } from 'react'
import addCartContext from './AddCartContext'


export default function Addcart() {

    const itemInCart = useContext(addCartContext)

    const removeItem = (getIndex) =>{
        const afterFilter = itemInCart.addItem.filter((delItem, index)=>{
            return index != getIndex
        })
        itemInCart.setAddItem(afterFilter)
    }
    return (
        itemInCart.addItem.map((each, index) => {
            return (
                <>
                    <div className='container'>
                        <div className='boundaryAdd'>
                            <img className="bouqetImgAdd" src={each.image} alt="image"></img>
                            <p className="nameBouqetsAdd"> ชื่อช่อดอกไม้:  {each.name} </p>
                            <p className="namePriceAdd">ราคา : {each.price} บาท </p>
                            <button className="btnDelete" onClick={()=>{removeItem(index)}}>x</button>
                        </div>
                    </div>
                    
                </>
            )
        })
    )
}

{/* <div className="container">
                        <div className="boquetAdd">
                            <img className="bouqetImgAdd" src={each.image} alt="image"></img>
                            <div className="infoBouqet">
                                <div className="setInfo">
                                    <p className="nameBouqets">{each.name} </p>
                                    <p className="nameFlowers">({each.flowers})</p>
                                </div>
                                <p className="namePrice">ราคา : {each.price} บาท </p>
                            </div>
                            <div className="btnShop">
                                <button className="btnAdd">x</button>
                                <button className="btnBuy">เพิ่ม</button>
                            </div>
                        </div>
                    </div> */}