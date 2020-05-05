import React, { Component } from 'react'

import Hoc from '../shared/utils/hoc.js'
import parseJwt from '../shared/utils/parseJwt.js'

import './StudentTimetable.css'

import { connect } from 'react-redux'

class StudentTimetable extends Component {
    state={
        idEtudiant:null
    }

    getStudentTimetable=()=>{
        let student = this.props.etudiants.find(etudiant=>etudiant.idEtudiant===this.state.idEtudiant)
        return this.props.timetables.find(timetable=>timetable.classe.idClasse === student.idClasse)
    }

    showTimetableHeader=()=>{
        let studentHeader=this.getStudentTimetable().tableHeader
        let weekStart=new Date(studentHeader.weekStart).toDateString()

        return (
            <div className='studentTimeTableHeader'>
                {weekStart} - {studentHeader.weekEnd}
            </div>
        )

    }

    showStudentTable=()=>{
        let studentTable = this.getStudentTimetable().table
        let days=['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
        return studentTable.map(line=>(
        <div className='LineHolder' key={line.index}>
            <div className="columnTime">
                <span className='hmm'>
                    <h3>Debut: </h3><span id='fromTime'>{line.debut}</span>
                </span>
                <span>
                    <h3>Fin: </h3><span id='toTime'>{line.fin}</span>
                </span>
            </div>
            {days.map(day=> <div className="columnDay" key={line.index+day}>
                    <span id='mon_cours' >{line[day].cour.split('_')[0]}</span>
                    <span id='mon_cours' >{line[day].cour.split('_')[2]}</span>
                    <span id='mon_cours' >{line[day].salle}</span>
                </div>
            )}
        </div>
        ))
    }
    componentDidMount(){
  console.log('passing here')
        fetch('https://dp-db.herokuapp.comstudent/timetable', {
            method: 'get',
            headers: {'Content-Type': 'application/json','x-access-token':window.localStorage.getItem("token")}
          })
          .then(response=>response.json())
          .then(data=>{
            if(data.message){
              console.log(data.message)
                const student = data.message.student.map(student=>{return{
                    idEtudiant:student._id,
                    matriculePersonnel: student.matricule,
                    nom: student.nom,
                    prenom: student.prenom,
                    mail: student.email,
                    tel: student.tel,
                    role: student.role,
                    idClasse: student.idClasse
                }})
                const timetables = data.message.timetables.map(timetable=>{return{
                    idTimetable: timetable._id,
                    classe: timetable.classe,
                    tableHeader: timetable.tableHeader,
                    table: timetable.table,
                }})
      
                this.props.dispatch({type: "CREATE_ETUDIANT", payload: student})
                this.props.dispatch({type: "CREATE_TIMETABLE", payload: timetables})
                this.setState({idEtudiant:parseJwt(window.localStorage.getItem('token')).user._id})
            }
            else{
              console.log(data)
            }
          })
          .catch(error=>console.log(error))      
    }
    render() {
        console.log(this.state)
        return (
            <div>
            {(!this.state.idEtudiant)?
                <div id="loading-on">Loading</div>
            :
            <Hoc>
                {this.showTimetableHeader()}
                {this.showStudentTable()}
            </Hoc>
            }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        timetables: state.Timetable.timetables,
        etudiants: state.Etudiant.etudiants,
        personnels: state.Personnel.personnels,
    }
}

export default connect(mapStateToProps)(StudentTimetable)