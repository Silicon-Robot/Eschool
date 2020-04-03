import React, { Component } from 'react';

import './ForgotPassword.css'

class ForgotPassword extends Component {
    state={
        password:'',
        error:false
    }

    handlePasswordChange = (e)=>{
        this.setState({
            password: e.target.value
        },()=> console.log(this.state.password))
    }

    verifyPasswords = (e) =>{
        let btn = document.getElementById('fgtSubmit')
        if(e.target.value !== this.state.password){
            this.setState({error:true})
            btn.disabled=true
            btn.style.backgroundColor='grey'
        }else{
            btn.disabled=false
            btn.style.backgroundColor = '#28A08B'
            this.setState({error:false})
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        // push to the signed in page(depending on the user that is signed in)
    }

    render() {
        return (
            <div className="forgotMiddle">
                <form className="fgtPwdForm" onSubmit={this.handleSubmit} >
                    {this.state.error?(<div className='pwdMismatchError'>Passwords don't match!!!</div>):(null)}
                    <input type="text" onChange={this.handlePasswordChange}className = 'fgtInput' placeholder='New password' />
                    <input type="text" onChange={this.verifyPasswords} className = 'fgtInput' placeholder='Confirm password' />
                    <input disabled onClick={this.handleSubmit} type='submit' className = 'forgetSubmit' id = 'fgtSubmit' value='Change password' />
                </form>
            </div>
        )
    }
}

export default ForgotPassword;