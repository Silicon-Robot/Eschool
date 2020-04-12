import React, {Component} from "react"

import "./newfaculte.css"
import NewMatiere from "./NewMatiere";
import ComponentDeroulement from './ComponentDeroulement'


class NewFaculte extends Component
{
	state = {
		/*
			Data needed is as shown here
				1. list of all faculties
		*/
		facultes:[],
		nomFaculte: "",
		filieres:[],
		createdDate:'',
		edit:'',
		filiereEdit:'',
		showTop:false
	}

	addNewFiliere=(filiereObject)=>{
		this.setState({
			filieres:filiereObject
		})
	}

	handleDelete=(e)=>{
        let element = e.target.id
        let newList = this.state.filieres.filter(filiere=>Number(element) !== filiere.index)
        newList = this.adjustIndex(newList)
        this.setState({filieres:newList})
    }

    adjustIndex = (listArray) => {
        let index = 0;
        let tempQuestions = []
        listArray.map(filiere => {
            index = index + 1
            filiere.index = index
            tempQuestions.push(filiere)
            return null;
        })

        return tempQuestions;
	}
	
	handleDeleteFaculty=(facultyIndex)=>{
		let newList = this.state.facultes.filter(faculte=>Number(facultyIndex) !== faculte.index)
		newList = this.adjustIndex(newList)
		this.setState({facultes:newList})
		//facultyIndex is the index of the faculty to be deleted.
		//this function is meant for deleting that faculty from the database. so delete this faculty
	}

	handleEditBtn =(e)=>{
		console.log(e+"this is good life")
        let element = this.state.filieres.find(filiere=>filiere.index === Number(e.target.id))
        let icon = document.getElementById('fa-icon')
            icon.classList.remove('fa-minus-circle')
            icon.classList.add('fa-plus-circle')
        this.setState({
            filiereEdit:element,
            edit:e.target.id,
            open:false
        })
	}
	
	handleEditChange=(e)=>{
        let editFiliere = {nomFiliere:e.target.value, niveauMax:this.state.filiereEdit.niveauMax, index:this.state.filiereEdit.index}
        this.setState({filiereEdit:editFiliere})
    }

	handleEditSave =()=>{
        let newFilieres = []
        this.state.filieres.filter(filiere=>{
            if(filiere.index === this.state.filiereEdit.index) newFilieres.push(this.state.filiereEdit)
            else newFilieres.push(filiere)
            return null
        })
        this.setState({filieres:newFilieres, edit:''})

	}
	
	handleCreateClick=()=>{
		if(this.state.nomFaculte !== '' && this.state.filieres.length!==0)
		{
			document.getElementById('nomFaculte').value=""
			//this is the data to be uploaded
			// uploadData is the faculty to be created... verify that the data in it coincides with the data to be uploaded then upload. without which please try to complete it as it should be.
			let uploadData={nomFaculte:this.state.nomFaculte, filieres:this.state.filieres, index:this.state.facultes.length+1}

			this.setState({
				facultes:[...this.state.facultes, uploadData],
				showTop:true,
				filieres:[],
				nomFaculte:''
			}, ()=>console.log(this.state.facultes))
		}else{alert('Empty faculty name or no filieres')}
	}







	handleChange = (event) =>{
		this.setState({nomFaculte: event.currentTarget.value});
	}

	displayAndHiddenContent = (e) =>{
		let firstChild = e.currentTarget.firstElementChild.firstElementChild;

	    if(firstChild.classList.contains("fa-plus-circle"))
	    {
	    	/* Afficher le contenu*/
	        firstChild.classList.remove('fa-plus-circle');
			firstChild.classList.add('fa-minus-circle');
			this.setState({open:true})
	    }
	    else
	    {
	    	/* Cacher le contenu*/
	        firstChild.classList.remove('fa-minus-circle');
	        firstChild.classList.add('fa-plus-circle');
	        /* Vider l'ensemble des champs */
	        //Le nomFaculte de la faculte
	        this.setState({nomFaculte:''});

	        //L'ensemble des filiere de la faculte
			//Supprimer la liste ici
			
			this.setState({open:false})
	    }
	}
	render()
	{
		return(
			<section className = "container">
				<span className='blockTitle'>ADMINISTRATION DES FACULTES</span>
				<div>
					{this.state.facultes.length!==0?<ComponentDeroulement facultes={this.state.facultes} handleDeleteFaculty={this.handleDeleteFaculty} />:null}
					<div className = "header" onClick = {this.displayAndHiddenContent}>
						<span className = "icon"><i className ="fa fa-plus-circle fa-2x"></i></span>
						<span className = "title"> Nouvelle faculte </span>
					</div>
				</div>
				{
					(this.state.open)?<div className = "newFaculteMain">
						<div>
							<header className = "main-header">
								<input type = "text" className = "input-field" id='nomFaculte' placeholder = "Nom de la faculte" value = {this.state.nomFaculte} onChange = {this.handleChange} />
							</header>
							
							
							<main className = "main-main">
								<section className = "filiere">
									<NewMatiere filieres={this.state.filieres} 
										edit={this.state.edit}
										handleEditChange={this.handleEditChange}
										handleEditSave={this.handleEditSave}
										handleDelete={this.handleDelete}
										filiereEdit={this.state.filiereEdit}
										handleEditBtn={this.handleEditBtn}
										addNewFiliere={this.addNewFiliere}
									/>
								</section>
							</main>
						</div>

						<footer className = "main-footer">
							<input type = "submit" value = "Create" onClick={this.handleCreateClick} className = "main-button" />
						</footer>
					</div>:null
				}
			</section>
		)
		
	}
}


export default NewFaculte