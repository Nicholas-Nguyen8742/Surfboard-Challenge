import "./LoginForm.scss";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  emailValidation,
  isEmptyPassword,
  handleLogin,
  handleChange,
} from "../../utils/forms";
import Input from "../FormInput/FormInput.js";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    success: false,
    user: "",
  };

  render() {
    return (
    <div className="loginForm">
      <section className="loginForm-wrapper">
        <form className="loginForm__form" onSubmit={handleLogin}>
          <h1 className="loginForm__title">Login</h1>
          <Input
            type="text"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={handleChange}
            valid={emailValidation}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={handleChange}
            valid={isEmptyPassword}
          />
          <button className="loginForm__btn" type="submit">
            Login
          </button>
          {this.state.success && (
            <Redirect to={`/dashboard/${this.state.user}`} />
          )}
          {this.state.error && <p>{this.state.error}</p>}
          <div className="loginForm__register">
            <p className="loginForm__register__body">Join the Team!</p>
            <Link to="/signup" className="loginForm__register__link">
              Register
            </Link>
          </div>
        </form>
      </section>
    </div>
    );
  }
}
