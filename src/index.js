import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper/Wrapper";
import './global.css'
import "react-widgets/styles.css";

ReactDOM.render(
    <BrowserRouter>
        <Wrapper>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Wrapper>
    </BrowserRouter>,
  document.getElementById('root')
);

