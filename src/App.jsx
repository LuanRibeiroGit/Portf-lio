import React from 'react'
import './App.css'



import Header from './header/Header'
import ContainerBody from './body/ContainerBody'
import BaseBoard from './baseboard/BaseBoard'

function App(props) {

  return (
    <div id="App">
      <Header/>
      <ContainerBody/>
      <BaseBoard/>
    </div>
  )
}

export default App
