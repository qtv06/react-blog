import React from 'react';
import { validateAll } from 'indicative/validator';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
    }

    this.handleChanged = this.handleChanged.bind(this)
  }

  handleChanged(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const rules = {
      name: 'required|string',
      email: 'required|email',
      password: 'required|min:6|confirmed',
    };

    const messages = {
      required: (field) => `${field} is required`
    }

    const data = this.state;

    validateAll(data, rules, messages)
      .then(() => {
        console.log("SUCCESS")
      })
      .catch(errors => {
        const formatedErrors = {};

        errors.forEach(error => formatedErrors[error.field] = error.message)

        this.setState({
          errors: formatedErrors,
        })
      })
  }

  render() {
    return(
      <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: 'url(assets/img/bg-girl.jpg)'}}>
        <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
          <h5 className="text-uppercase text-center">Register</h5>
          <br />
          <br />
          <form className="form-type-material" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" onChange={this.handleChanged} className="form-control" placeholder="Username" />
              {
                this.state.errors['name'] &&
                <small className="text-danger">{this.state.errors['name']}</small>
              }
            </div>
            <div className="form-group">
              <input type="text" name="email" onChange={this.handleChanged} className="form-control" placeholder="Email address" />
              {
                this.state.errors['email'] &&
                <small className="text-danger">{this.state.errors['email']}</small>
              }
            </div>
            <div className="form-group">
              <input type="password" name="password" onChange={this.handleChanged} className="form-control" placeholder="Password" />
              {
                this.state.errors['password'] &&
                <small className="text-danger">{this.state.errors['password']}</small>
              }
            </div>
            <div className="form-group">
              <input type="password" name="password_confirmation" onChange={this.handleChanged} className="form-control" placeholder="Password (confirm)" />
              {
                this.state.errors['password_confirmation'] &&
                <small className="text-danger">{this.state.errors['password_confirmation']}</small>
              }
            </div>
            <br />
            <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
          </form>
          <hr className="w-30" />
          <p className="text-center text-muted fs-13 mt-20">Already have an account?
            <a href="login.html">Sign in</a>
          </p>
        </div>
      </div>
    )
  }
}


export default Register