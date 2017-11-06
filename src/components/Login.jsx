import React, { Component } from 'react';

import {Redirect} from 'react-router-dom';

export default class Login extends Component {
constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect_comments: false,
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    let listItem = JSON.stringify({ email, password });
    fetch("https://getsaydo-staging.herokuapp.com/users/sign_in.json", {
      method: "POST",
      body: listItem,
      headers: {

      }
    }).then(data => {
        return data.json();
    }).then(response => {
      console.log(response, "yay");
      this.setState({redirect_comments: true});
    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({ email: '', password:'' });
  }

  render() {

    const {email, password, redirect_comments} = this.state;

    if (redirect_comments) {
      return <Redirect push to='/comments'/>;
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-5 col-md-3">
              <div className='form-login'>
                <h4>Welcome back.</h4>
                <input type="text" id="email" value={email} placeholder="email" onChange={this.handleEmailChange}/>
                <br/>
                <input type="password" id="password" value={password} placeholder="password" onChange={this.handlePasswordChange} />
                <br/>
                <div className="wrapper">
                  <span className="group-btn">
                      <a href="#" onClick={this.handleSubmit} className="btn btn-primary btn-md">login</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
