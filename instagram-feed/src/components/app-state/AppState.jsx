
import React from 'react'
import { useEffect } from 'react';
import AppHeader from '../app-header/AppHeader';
import GlobalContext from '../../contexts/GobalContext'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from '../feed/Feed';
import EditPost from '../edit-post/EditPost';


export default function AppState() {

  return (
    <GlobalContext>
    <div style={{display:"flex", flexDirection: "column"}}>
    <div style={{width: "1000px",  margin: "0 auto"}}>
    <Router>
    <AppHeader />
        <Switch>
           <Route exact path="/" component={Feed} />
          <Route exact path="/edit/:id" component={EditPost} />
        </Switch>
      </Router>
    </div>
    </div>
    </GlobalContext>
  )
}
