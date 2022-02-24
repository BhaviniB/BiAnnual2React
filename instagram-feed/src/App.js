import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppState from "./components/app-state/AppState";


function App() {
  return (
    <div className="App">
      <AppState/>
    </div>
  );
}

export default App;
