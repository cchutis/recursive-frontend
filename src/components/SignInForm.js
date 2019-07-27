import React, { Component } from 'react'

export default class SignInForm extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // debugger
        if(e.target.email.value !== this.props.userInfo.email || e.target.password.value !== this.props.userInfo.password) {
            alert("Incorrect Email and/or password")
        } else {
            this.props.signedIn(true)
        }
    }

    render() {
        return (
            <form className="sign-in-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="email address" name="email" value={this.state.email} onChange={this.handleChange}/>
                <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" className="sign-in-button" value="log in"/>
            </form>
        )
    }
}
