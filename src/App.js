import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { useProgress, Html } from '@react-three/drei'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './App.scss';
import MainPage from './components/main';
import logo from "./img/logo-wtt-w.svg";

import Scene1 from './animation/Scene1'
import Scene3 from './animation/Scene3'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <span style={{ color: '#FFFFFF' }}>{progress} % loaded</span>
    </Html>
  )
}

function AppCont(props) {
  const { scene = 1 } = props
  return (
    <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
      <color attach="background" args={['#000']} />
      <Suspense fallback={<Loader />}>
        {scene === 1 && <Scene1 />}
        {scene === 3 && <Scene3 />}
      </Suspense>
      <ambientLight intensity={0.4} />
    </Canvas>
  )
}

function Body() {
  return (
    <Router>
      <main>
        <div className="frame">
          <div className="frame__title-wrap">
            <div className="frame__title-logo">
              <img src={logo} alt="logo"/>
              <span className="Header__will-you">Will you try?</span>
            </div>
            <div className="frame__title-links">
              <a href="*">About</a>
              <a href="*">Expertise</a>
              <a href="*">Word</a>
              <a href="*">Contact</a>
            </div>
          </div>
          <div className="frame__search">
            <a href="*">link</a>
            <a href="*">search</a>
          </div>
          <div className="frame__demos">
            <NavLink to="/" activeClassName="frame__demo--current" className="frame__demo">
              HOME
            </NavLink>
            <NavLink to="/pedro" activeClassName="frame__demo--current" className="frame__demo">
              WELCOME
            </NavLink>
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <AppCont scene={1} />
            </Route>
            <Route exact path="/pedro">
              <AppCont scene={3} />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  )
}

function App() {
  return (
    <div className="App">
      <Body />
      <MainPage />
    </div>
  );
}

export default App;
