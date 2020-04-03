import React, { Component } from 'react'

import './SignUpBody.css'

class SignUpBody extends Component {
    state={
        matricule:'',
        nom:'',
        prenom:'',
        mail:'',
        tel:'',
        password:'',
        timeStamp:'',
        role:'secretiare',
        error:false
    }

    handleTextInput=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    verifyPasswords = (e) =>{
        let btn = document.getElementById('signUpBtn')
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

    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({
            timeStamp:Date.now()
        }, ()=> console.log(this.state))
        console.log('redirect to corresponding page')
    }

    render() {
        return (
            <div>
                <form className='signUpForm' onSubmit={this.handleSubmit}>
                    {this.state.error?(<div className='pwdMismatchError'>Passwords don't match!!!</div>):(null)}
                    <input required onChange={this.handleTextInput} id='matricule' type='matricule' placeholder="Entrez votre Matricule" className='signUpInput' />
                    <input required onChange={this.handleTextInput} id='nom' type='text' placeholder="Entrez votre nom" className='signUpInput' />
                    <input required onChange={this.handleTextInput} id='prenom' type='text' placeholder="Entrez votre prenom" className='signUpInput' />
                    <input required onChange={this.handleTextInput} id='tel' type='text' placeholder="Entrez votre telephone" className='signUpInput' />
                    <input required onChange={this.handleTextInput} id='mail' type='email' placeholder="Entrez votre mail" className='signUpInput' />
                    <input required onChange={this.handleTextInput} id='password' type='password' placeholder="Entrez votre mot de passe" className='signUpInput' />
                    <input required id='cPassword' onChange={this.verifyPasswords} type='password' placeholder="Confirmer le mot de passe" className='signUpInput' />
                    <input onClick={this.handleSubmit} disabled id='signUpBtn' type='submit' value='Sign up' />
                </form>
            </div>
        )
    }
}

export default  SignUpBody