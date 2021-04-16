import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Products from './components/Products'
import Login from './components/Login'
import Content04 from './components/Content04'
import Register from './components/Register'
import CheckOut from './components/CheckOut'


export default function Router() {
    return (
        <Switch>
            <Route path="/CheckOut">
                <CheckOut  />
            </Route>
            <Route path="/Register">
                <Register />
            </Route>
            <Route path="/Landing">
                <Landing />
            </Route>
            <Route path="/Products">
                <Products />
            </Route>
            <Route path="/Login">
                <Login />
            </Route>
            <Route path="/Content04">
                <Content04 />
            </Route>
            <Route path="/">
                <Landing />
            </Route>
        </Switch>
    )
}