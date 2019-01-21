import React, { Component } from 'react';
import "./Login.scss";
import logo from "./2015_logo_acid.png";


// eslint-disable-next-line 
const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { mail: "", pwd: "", disableSubmit: true };
    this.handleMail = this.handleMail.bind(this);
    this.handlePwd = this.handlePwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMail(event) {
    this.setState({ mail: event.target.value });
  }

  handlePwd(event) {
    this.setState({ pwd: event.target.value });
  }

  validateEmail(email) {
    return email_regex.test(email);
  };

  validatePassword(password) {
    return password.length > 4;
  }

  shouldEnable() {
    return this.validateEmail(this.state.mail) && this.validatePassword(this.state.pwd);
  }

  componentDidUpdate() {
    if (this.state.disableSubmit !== !this.shouldEnable()) {
      this.setState({ disableSubmit: !this.shouldEnable() });
    }
  }

  handleSubmit(event) {
    alert('Thanks for the submit!');
    event.preventDefault();
  }


  render() {
    return (
      <div className="comp-flex">
        <img className="acid-logo" src={logo} />
        <h2>Acid Labs</h2>
        <div class="container">
          <div class="login-item">
            <form onSubmit={this.handleSubmit} class="form form-login">
              <div class="form-field">
                <input onChange={this.handleMail} id="login-username" type="email" class="form-input" placeholder="Email" required />
              </div>
              <div class="form-field">
                <input onChange={this.handlePwd} id="login-password" type="password" class="form-input" placeholder="Password" required />
              </div>
              <div class="form-field">
                <input disabled={this.state.disableSubmit} type="submit" value="Log in" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}