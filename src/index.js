import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import Home from "./pages/Home";
import './global.css'
import "react-widgets/styles.css";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
    <BrowserRouter>
        <Scrollbars style={{height: "100vh"}}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Scrollbars>
    </BrowserRouter>,
  document.getElementById('root')
);

