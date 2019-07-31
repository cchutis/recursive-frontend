import React, { Component } from 'react'
import GlitchEffect from 'react-glitch-effect'
import SignInForm from '../components/SignInForm'

export default class Login extends Component {
   
    state = {
        menuToggle: false
    }

    openMenu = () => {
        this.setState({
            menuToggle: true
        })
    }

    render() {
        let toggle = this.state.menuToggle ? "logo-container-open" : "logo-container-closed"
        return (
            <div className={toggle}>
                <video autoPlay muted loop id="bkg-video">
                    <source type="video/mp4" src="/video/synthwave.mp4" />
                </video>
                <GlitchEffect>
                    {this.state.menuToggle ? 
                        <div className="definition-wrapper">
                        <h1 className="logo-destruct">re-cur-sive</h1>
                        <h2 className="pronounce">/rəˈkərsiv/</h2> 
                            <p style={{fontSize: "2em"}}><em>adjective</em></p>
                        <p className="define">characterized by recurrence or repetition. involving the repeated application of a procedure to successive results.</p>
                        </div>
                        : 
                        <h1 className="logo">recursive.</h1>}
                </GlitchEffect>
                {this.state.menuToggle ? <SignInForm userInfo={this.props.userInfo} signedIn={this.props.signedIn}/> : null}
                <p className="start" onClick={this.openMenu}>{this.state.menuToggle ? "or create an account" : "click here to start"}</p>
                
            </div>
        )
    }
}
