import React from 'react'
// components
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Card from './components/cards/Card';
// css
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card />
    </div>
  )
}
export default App;