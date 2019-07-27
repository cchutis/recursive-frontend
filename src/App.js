import React, { Component } from 'react'
import './App.css'
import Login from './containers/Login'
import MainContainer from './containers/MainContainer';

const USER_API = 'http://localhost:4000/users/1'


export default class App extends Component {

  state = {
    user: {},
    signedIn: true
  }

  componentDidMount() {
    this.fetchUser()
  }

  fetchUser = () => {
    fetch(USER_API)
    .then(r => r.json())
    .then(data => {
      this.setState({
        user: data
      })
    })
  }

  signedIn = (status) => {
    this.setState({
      signedIn: status
    })
  }

  render() {
    return (
      <div className="main">
        {this.state.signedIn ?
        <MainContainer />
        :
        <Login userInfo={this.state.user} signedIn={this.signedIn}/>
        }
      </div>
    )
  }
}
