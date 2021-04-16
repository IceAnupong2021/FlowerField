import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import postsContext from './components/PostContext'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer'
import authContext from './components/authContext'
import Router from './Router'
import addCartContext from './components/AddCartContext'
import CheckOut from './components/CheckOut'








export default function App() {

  const [products, setProducts] = useState([])

  const postsContextValue = {
    products: products,
    setProducts: setProducts
  }

  useEffect(() => {
    fetch('https://flower-shower-camt-bootcamp.pair-co.com/bouquet')
      .then(response => response.json())
      .then(boquets => {
        setProducts(boquets)
      })
  }, [])

  const [token, setToken] = useState(null)

  const authoContextValue = {
    token: token,
    setToken: setToken
  }

  const [addItem, setAddItem] = useState([])
  const addCartContextValue = {
    addItem: addItem,
    setAddItem: setAddItem
  }


  return (
    <>
      <BrowserRouter>
        <addCartContext.Provider value={addCartContextValue}>
          <authContext.Provider value={authoContextValue}>
            <postsContext.Provider value={postsContextValue} >
              <Header />
              <Router />
              <Footer />
            </postsContext.Provider>
          </authContext.Provider>
        </addCartContext.Provider>
      </BrowserRouter>
    </>
  )
}