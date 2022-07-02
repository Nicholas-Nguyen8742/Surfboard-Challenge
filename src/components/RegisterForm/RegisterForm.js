import "./RegisterForm.scss";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import {  
    handleRegister,
    handleChange,} from "../../utils/forms";
import Input from "../FormInput/FormInput.js";

export default class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    position: "",
    password: "",
    confirmPassword: "",
    error: "",
    success: false,
    redirect: false,
  };

  render() {
    /*Redirect After Successful Registration*/
    if (this.state.redirect === true) {
      return (
        <div>
          <Redirect to="/" />
        </div>
      );
    }
    return (
      <div className="signUp">
        <section className="signUp-wrapper">
          <form className="signUp__form" onSubmit={handleRegister}>
            <h1 className="signUp__title">Join the Team</h1>
            <Input
              type="text"
              name="name"
              label="Name"
              value={this.state.firstName}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              label="Email"
              value={this.state.email}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="position"
              label="Position"
              value={this.state.position}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              value={this.state.password}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={this.state.confirmPassword}
              onChange={handleChange}
            />
            <button className="signUp__btn" type="submit">
              Register
            </button>
            {this.state.success && (
              <span className="signUp__message">Signed up!</span>
            )}
            {this.state.error && (
              <span className="signUp__message">{this.state.error}</span>
            )}
            <div className="signUp__login">
              <p className="signUp__login__body">Already have an account?</p>
              <Link to="/" className="signUp__login__link">
                Login
              </Link>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
