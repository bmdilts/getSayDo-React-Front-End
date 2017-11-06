import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import '../styles/App.css';

import basename from '../config';

import BaseLayout from './view/base/BaseLayout.jsx';
import Trends from './view/middle/Trends.jsx';
import Comments from './view/middle/Comments.jsx';
import Login from './Login.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: '',
      redirect_comments: false,
    };
  }

  componentWillMount() {
    fetch(`https://getsaydo-staging.herokuapp.com/current_user.json`, {
      method: 'GET',
      headers: {

      },
    }).then(function(data) {
      return data.json();
    }).then((response) => {
      console.log(response, "yay");
      this.setState({current_user: response.current_user, redirect_comments: true })
    }).catch(err => {
      console.log(err, "boo!");
    });
  }


  render() {

    const {current_user, redirect_comments} = this.state;

    if (redirect_comments) {
      return <Redirect push to='/comments'/>;
    }

    return (
      <div>
        <BrowserRouter basename={basename}>
          <BaseLayout>
            <Switch>
              <Route exact path='/' component={Login}/>
              <Route path='/map'/>
              <Route path='/comments' component={Comments}/>
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}
