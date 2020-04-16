import React, { Component } from 'react'
import { connect } from 'react-redux';

import parseJwt from '../../../shared/utils/parseJwt.js';
import {setUser} from '../../../store/actions/user.actions';

import './SignUpBody.css'

class SignUpBody extends Component {
    state={
        matricule:'',
        nom:'',
        prenom:'',
        email:'',
        tel:'',
        password:'',
        timeStamp:'',
        role:'etudiant',
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
        fetch('https://dp-db.herokuapp.com/signup', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              email: this.state.email,
              matricule: this.state.matricule,
              tel: this.state.tel,
              nom: this.state.nom,
              prenom: this.state.prenom,
              startDate:Date.now(),
              password: this.state.password,
              nomRole:this.state.role
            })
            })
          .then(response=>response.json())
          .then(data=>{
            if(data.message){
              const { token, auth } = data.message
              window.localStorage.setItem('token',token)
              window.localStorage.setItem('auth',auth)
              const user = {...(parseJwt(token).user), history:null, hash:null, role:{...(parseJwt(token))}.user.role.nomRole }
              this.props.setUser(user)
              if(user.role==="secretaire"){
              this.props.history.push("/manage-personnels")
              } else if(user.role==="coordo"){
                this.props.history.push("/coordo")
              }
              else{
                this.props.history.push("/underdevelopment")
              }
            }
            else{
                console.log(data)
            }
            })
          .catch(error=>console.log(error))
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
                    <input required onChange={this.handleTextInput} id='email' type='email' placeholder="Entrez votre mail" className='signUpInput' />
                    <input required onChange={this.handleTextInput} id='password' type='password' placeholder="Entrez votre mot de passe" className='signUpInput' />
                    <input required id='cPassword' onChange={this.verifyPasswords} type='password' placeholder="Confirmer le mot de passe" className='signUpInput' />
                    <input onClick={this.handleSubmit} disabled id='signUpBtn' type='submit' value='Sign up' />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setUser: (user)=>dispatch(setUser(user)),
})

export default connect(null,mapDispatchToProps)(SignUpBody);