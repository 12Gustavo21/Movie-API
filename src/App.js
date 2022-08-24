import React, { Component } from "react";
import * as S from "./styled";
import GlobalStyle from "./components/global-styles";
import Home from "./components/pages/Home";
import MoviePage from "./components/pages/Movie-Page";
import ShowsPage from "./components/pages/Show";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from "./img/Logo-Principal.png";

export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />

        <S.Container>
          <Link to='/'> <img src={logo} alt="EagleFlix logo" /> </Link>   
          <Link to='/'> <h1>Home</h1> </Link>
          <Link to='/Movies'> <h1>Movies</h1> </Link>
          <Link to='/Shows'> <h1> Series </h1> </Link>
        </S.Container>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Movies' element={<MoviePage />} />
          <Route path='/Shows' element={<ShowsPage />} />
        </Routes>

      </Router>
    )
  }
}