import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './SignIn.css'

export default class SignInBody extends Component {
    state={
        username:'',
        password:''
    }

    handleChange=(e)=>{
        e.preventDefault()
        this.setState({
            [e.target.id]:e.target.value
        },()=>console.log(this.state))
    }

    render() {
        return (
            <form className='signInForm' onSubmit={this.handleSubmit}>
                <i className='fa fa-user'><input type='text' onChange={this.handleChange} placeholder='Username' id='username' className='signInInput' /></i>
                <i className='fa fa-key'><input type='password' onChange={this.handleChange} placeholder='Password' id='password' className='signInInput' /></i>
                <span className='signInFgtPwd'><Link to='/'>Forgot password?</Link></span>
                <input type='submit' value='Connexion' onSubmit={this.handleSubmit} className='signInConfirm'/>
                <span className='toSignUp'><Link to='/'> Sign up</Link></span>
            </form>
        )
    }
}
