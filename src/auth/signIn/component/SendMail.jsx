import React, { Component } from 'react'
import './SendMail.css'
class SendMailBody extends Component {
    state={
        code:'3438D4',
        mail:''
    }

    handleEmailEntry=(e)=>{
        this.setState({
            mail:e.target.value
        })
    }

    handleCodeEntry=(e)=>{
        // this.state.code === e.target.value?(<Redirect to='/resetpwd' />):(null)
        if(this.state.code === e.target.value){
            console.log('redirect to the /resetpwd page')
        }
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        let recoveryMail = document.getElementById('recoveryMail')
        let fontAwe = document.getElementById('iTag')
        let codeInput =document.getElementById('codeInput')
        recoveryMail.removeAttribute('required')
        recoveryMail.setAttribute('hidden', 'true')
        fontAwe.classList=[]
        fontAwe.setAttribute('hidden', 'true')
        codeInput.removeAttribute('hidden')
        codeInput.setAttribute('required', 'true')
        document.getElementsByClassName('sendMailBtn')[0].setAttribute('hidden','true')
        document.getElementsByClassName('sendMailForm')[0].removeAttribute(onsubmit)
    }

    render() {
        return (
            <div>
                <form className='sendMailForm' onSubmit={this.handleSubmit}>
                    <i className='fa fa-envelope' id='iTag' ><input onChange={this.handleEmailEntry} type='email' id='recoveryMail' className='recoveryMail' placeholder='Recovery email' required/></i>
                    <input hidden onChange={this.handleCodeEntry} id='codeInput' type='text' className='recoveryCode' placeholder='Code' />
                    <input type='submit' className='sendMailBtn' placeholder='Send code' />
                </form>
            </div>
        )
    }
}

export default SendMailBody
