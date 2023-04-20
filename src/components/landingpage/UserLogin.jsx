import React from 'react';
import { auth } from './firebase';

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        // Handle successful login
      })
      .catch((error) => {
        // Handle login error
      });
  }

  render() {
    return (
      <div>
        <h1>Admin Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}