import React, { Component } from "react";
import * as S from "./styled";
import GlobalStyle from "./components/global-styles";
import Home from "./components/Home-page/Home";
import MoviePage from "./components/Movie-page/Movie-Page";
import ShowsPage from "./components/Shows-page/Show";
import SearchPage from "./components/Search-page/Search";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from "./img/Logo-Principal.png";
import { BsSearch } from "react-icons/bs";

export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />

        <S.Container>
          <Link to='/'> <S.logo src={logo} alt="EagleFlix logo" /> </Link>   
          <Link to='/Search' > <BsSearch size='2.5vw' /> </Link>   
          <Link to='/'> <h1>Home</h1> </Link>
          <Link to='/Movies'> <h1>Movies</h1> </Link>
          <Link to='/Shows'> <h1> Series </h1> </Link>
        </S.Container>

        <Routes>
          <Route path='/Search' element={<SearchPage />} />
          <Route path='/' element={<Home />} />
          <Route path='/Movies' element={<MoviePage />} />
          <Route path='/Shows' element={<ShowsPage />} />
        </Routes>

      </Router>
    )
  }
}