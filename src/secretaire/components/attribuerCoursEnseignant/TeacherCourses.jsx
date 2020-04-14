import React, { Component } from 'react'

import './TeacherCourses.css'
import { connect } from 'react-redux'

class TeacherCourses extends Component {
    state={
        actualClasse:'',
        actualFiliere:'',
        actualSubject:'',
        actualTeacher:'',
        theFiliere:'',
        theClasse:'',
        theModule:'',
    }

    getTeachers=()=>{
        let teachers=this.props.personnels.filter(personnel=>personnel.role==='enseignant' || personnel.role==='coordonateur')
        return teachers.map(teacher=><option key={teacher.matricule}>{teacher.nom+' '+teacher.prenom}</option>)
    }

    handleChange=(e)=>{
        switch(e.target.id){
            case 'actualFiliere':
                this.setState({actualClasse:'', actualSubject:''})
                break
            case 'actualClasse':
                this.setState({actualSubject:''})
                break
            default:
                break
        }
        this.setState({[e.target.id]:e.target.value})
    }

    handleClick=()=>{
        if(this.state.actualSubject!=='' && this.state.actualTeacher!==''){
            /*
                this is where you take care of the update...
                you are to update classe with the cours with codeCours: this.state.actualSubject
                The new teacher to be assigned to this cours is : this.state.actualTeacher
            */

            alert("You've changed the teacher of the subject with subject code: "+this.state.actualSubject+' to: '+this.state.actualTeacher)
            this.setState({actualSubject:''})
        }else alert('Choose a classe, then subject then assign a teacher to that subject')
    }

    displayMiddlePart=()=>{
        return (
            <div className='attribuerCours'>
                <select className='attribuerCoursFaculty' id='actualFiliere' onChange={this.handleChange}>
                    <option hidden>Choisissez la filiere</option>
                    {this.getFilieres()}
                </select>
                <select className="attribuerCoursSelect" id='actualClasse' onChange={this.handleChange}>
                    <option hidden>Choisissez la classe</option>
                    {this.getFiliereClasses(this.state.actualFiliere).map(classe=><option key={classe.filiere.nomFiliere+classe.niveau}>{classe.filiere.nomFiliere+' '+classe.niveau}</option>)}
                </select>
                <select className='attribuerCoursSelect' id='actualSubject' onChange={this.handleChange}>
                    <option hidden>Choisissez le cours</option>
                    {this.getClasseCourses(this.state.actualClasse).map(course=><option key={course.codeCours}>{course.codeCours+' '+course.nomCours}</option>)}
                </select>
                <select className='attribuerCoursSelect' id='actualTeacher' onChange={this.handleChange}>
                    <option hidden>Choisissez l'enseignant</option>
                    {this.getTeachers()}
                </select>
                <input type='button' value='Ajouter' onClick={this.handleClick} />
            </div>
        )
    }

    handleSelectChange=(e)=>{
        switch(e.target.id){
            case 'theFiliere':
                this.setState({theClasse:'', theModule:''})
                break
            case 'theClasse':
                this.setState({theModule:''})
                break
            default:
                break
        }
        this.setState({[e.target.id]:e.target.value})
    }

    displayBottomHeader=()=>{
        return(
            <div className='teacherCourseBottomSelects'>
                <select className="TeacherCourseBottomSelect" id='theFiliere' onChange={this.handleSelectChange}>
                    <option hidden>Choisissez la filiere</option>
                    {this.getFilieres()}
                </select>
                <select name="teacherCourseBottomSelect" id="theClasse" onChange={this.handleSelectChange}>
                    <option hidden>Choisissez la classe</option>
                    {this.getFiliereClasses(this.state.theFiliere).map(classe=><option key={classe.filiere.nomFiliere+' '+classe.niveau}>{classe.filiere.nomFiliere+' '+classe.niveau}</option>)}
                </select>
                <select className="teacherCourseBottomSelect" id="theModule" onChange={this.handleSelectChange}>
                    <option hidden>Choisissez un module</option>
                    {this.getClasseModules(this.state.theClasse).map(module=><option key={module.codeModule}>{module.codeModule+' '+module.nomModule}</option>)}
                </select>
            </div>
        )
    }

    getFiliereClasses=(nomFiliere)=>{
        let filiereClasses =this.props.classes.filter(classe=>classe.filiere.nomFiliere===nomFiliere)
        return filiereClasses.sort((a,b)=>(a.niveau>b.niveau)?1:-1)
    }

    getClasseModules=(nomClasse)=>{
        let classModules=this.props.modules.filter(module=>module.nomClasse===nomClasse)
        return classModules.sort((a,b)=>(a.nomModule>b.nomModule)?1:-1)
    }

    getModuleCourses=(codeModule)=>{
        let theModule=this.props.modules.find(module=>module.codeModule===codeModule)
        if(theModule!==undefined){
            let moduleSubjects = theModule.matieres.map(matiere=>{
                let coursData = this.props.cours.find(cour=>cour.codeCours===matiere.codeCours)
                let poids = matiere.poids
                return {...coursData, poids}
            })
    
            return moduleSubjects.sort((a,b)=>(a.poids<b.poids)?1:-1)
        }return []
    }

    getClasseCourses=(nomClasse)=>{
        let classeCourses = this.props.cours.filter(cour=>cour.classe.includes(nomClasse))
        return classeCourses.sort((a,b)=>(a.nomCours>b.nomCours)?1:-1)
    }

    getFilieres=()=>{
       let faculties= this.props.faculties.sort((a,b)=>(a.nomFaculty>b.nomFaculty)?1:-1)
       return faculties.map(faculty=>{
            let filieres = faculty.filieres.sort((a,b)=>(a.nomFiliere>b.nomFiliere)?1:-1)
           return (
            <optgroup label={faculty.nomFaculty} key={faculty.nomFaculty}>
                {filieres.map(filiere=><option key={filiere.nomFiliere}>{filiere.nomFiliere}</option>)}
            </optgroup>
           )
       })
    }

    displayBottomPart=()=>{
        let key=0
        return <div className='teacherCourseBottomDisplay'>
            {this.displayBottomHeader()}
            <div className='teacherCourseModuleData'>
                <div className='teacherCourseModuleName'>{this.state.theModule}</div>
                <div className="teacherCourseModuleCourseHeader">
                    <span className='moduleCourseHeaderData'>No</span>
                    <span className='moduleCourseHeaderData'>Code matiere</span>
                    <span className='moduleCourseHeaderData'>Intitule du Cours</span>
                    <span className='moduleCourseHeaderData'>Poids du cours</span>
                    <span className='moduleCourseHeaderData'>Classe commune</span>
                    <span className='moduleCourseHeaderData'>Enseignant</span>
                </div>
                {
                    this.getModuleCourses(this.state.theModule.split(' ')[0]).map(course=>(
                        <div className="teacherCourseModuleCourse" key={++key}>
                            <span className="teacherModuleCourseData">{key+'\n'}</span>
                            <span className='teacherModuleCourseData'>{course.codeCours}</span>
                            <span className='teacherModuleCourseData'>{course.nomCours}</span>
                            <span className='teacherModuleCourseData'>{course.poids}</span>
                            {/* <div className='teacherModuleCourseData otherClasses'>
                                {
                                    course.classe.filter(classe=>classe!==this.state.theClasse).map(otherClasse=><span key={otherClasse} className='otherClasseData'>{otherClasse}</span>)
                                }
                            </div> */}
                            <span className='teacherModuleCourseData'>{course.nomEnseignant}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    }

    render() {
        return (
            <div>
                {this.displayMiddlePart()}
                {this.displayBottomPart()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        personnels: state.Personnel.personnels,
        faculties: state.Faculty.faculties,
        roles: state.Role.roles,
        classes: state.Classe.classes,
        cours: state.Cour.cours,
        modules: state.Module.modules
    }
}

export default connect(mapStateToProps)(TeacherCourses)