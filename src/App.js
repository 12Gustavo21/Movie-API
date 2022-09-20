import React, { Component } from "react";
import * as S from "./styled";
import GlobalStyle from "./components/global-styles";
import Home from "./components/pages/Home";
import MoviePage from "./components/pages/Movie-Page";
import ShowsPage from "./components/pages/Show";
import Erro from "./components/pages/Erro-Page";
import DetailsM from "./components/Details-Movie/DatailsMovie";
import DetailsS from "./components/Details-Serie/DatailsSerie";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from "./img/Main-logo.png";
import {
  BsFillArrowUpCircleFill,
  BsFillEmojiLaughingFill
} from "react-icons/bs";
export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />

        <S.Container id="top">
          <Link to='/'> <img src={logo} alt="EagleFlix logo" /> </Link>
          <div>
            <Link to='/'> <h1>Home</h1> </Link>
            <Link to='/Movies'> <h1>Movies</h1> </Link>
            <Link to='/Shows'> <h1> Series </h1> </Link>
          </div>
        </S.Container>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Movies' element={<MoviePage />} />
          <Route path='/Shows' element={<ShowsPage />} />
          <Route path='/Details-movie/:id' element={<DetailsM />} />
          <Route path='/Details-serie/:id' element={<DetailsS />} />
          <Route path='*' element={<Erro />} />
        </Routes>

        <S.Footer>
          <S.Box1>
            <BsFillEmojiLaughingFill size="2em" />
            <h1>See you soon</h1>
            <BsFillEmojiLaughingFill size="2em" />
          </S.Box1>
          <S.Box2>
            <a href="#top"> <BsFillArrowUpCircleFill size="2.5em" /></a>
          </S.Box2>
        </S.Footer>
      </Router>
    )
  }
}