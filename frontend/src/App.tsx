import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 
import Home from "./Home/Home";
import Products from "./Products/Product";
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail';
import Payment from './Payment/Payment';
import CheckoutSteps from './Payment/CheckoutSteps';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <Router>
    <div className="grid-container">
        <div className="header">
            <div className="brand">
                <button onClick={openMenu}>&#9776;</button>
                <a href="index.html">Desert Banjo</a>
            </div>
            <div className="header-links">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/Payment">Payment</Link>
            </div>
        </div>

        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li><a href="index.html">Pants</a></li>
                <li><a href="index.html">Shirts</a></li>
            </ul>
        </aside>

        <main className ="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalog" element={<Products/>}/>
                <Route path="orders" element={<Orders/>}></Route>
                <Route path="/order/:id" element={<OrderDetail/>}></Route>
                <Route path="payment" element={<Payment/>}></Route>
                <Route path="checkout steps" element={<CheckoutSteps/>}></Route>
               
            </Routes>
        </main>

        <footer>
            &copy; 2022 Desert Banjo
        </footer>
    </div>
    </Router>
  );
}

export default App;
