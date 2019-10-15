import React, { Component } from 'react'
import './App.css'
import Login from './containers/Login'
import MainContainer from './containers/MainContainer';

const USER_API = 'http://localhost:4000/users/1'


export default class App extends Component {

  state = {
    user: {},
    signedIn: false
  }

  componentDidMount() {
    this.fetchUser()
  }

  //catching
  //TDD - find use cases/tests
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

  logout = () => {
    this.setState({
      signedIn: false
    })
  }

  render() {
    return (
      <div className="main">
        {this.state.signedIn ?
        <MainContainer logout={this.logout}/>
        :
        <Login userInfo={this.state.user} signedIn={this.signedIn}/>
        }
      </div>
    )
  }
}
