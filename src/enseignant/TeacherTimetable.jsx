import React, { Component } from 'react';
import { connect } from 'react-redux'

import Hoc from '../shared/utils/hoc.js'
import parseJwt from '../shared/utils/parseJwt.js'

import './TeacherTimetable.css'

class TeacherTimetable extends Component {
    state={
        /*
            Change this data with data from the local storage.
            what i mean by this is when the teacher connects himself, the token that comes with it should have th idPersonnel
            do something like componentDidMount(){this.setState(idConnectedPersonnel:localStorage.getItem(idPersonnel))}
            i don't know but sth like that.
        */
        idConnectedPersonnel:null,
    }

    getConnectedTeacher=()=>this.props.teachers.find(teacher=>teacher.idPersonnel===this.state.idConnectedPersonnel)
    getPersonnelObject=()=>this.props.personnels.find(personnel=>personnel.idPersonnel===this.state.idConnectedPersonnel)

    getToughtClassesTimetables=()=>{
      let tempObj=[] 
        let toughtClasses=this.getConnectedTeacher().toughtClasses
        toughtClasses.forEach(classe=>{
          let tempClasse = this.props.timetable.find(timetable=>timetable.classe.idClasse == classe.idClasse)
          if(tempClasse)tempObj.push(tempClasse)
        })
        return tempObj
    }

    getClassWeekSubjects=()=>{
        let timetables=this.getToughtClassesTimetables()

        let mappedTimetable = timetables.map(timetable=>timetable.table.map(tableLine=>{
            let line=tableLine
            delete line.index
            delete line.debut
            delete line.fin
            return Object.keys(line).map(day=>line[day].cour+'-'+line[day].salle)
        }))

        let line=0;
        let hisTable =[]
        let personnelData=this.props.teachers[0]
        console.log(mappedTimetable,'mappedTimetable')
        mappedTimetable.map(aClassTable=>aClassTable.filter(aclassLine=>{
            let index = 0;
            line++
           aclassLine.map(elmt=>{
                console.log(elmt)
               if(elmt.split('_')[1]===personnelData.idPersonnel){
                   let classIndex=0
                   let theLine=0
                   classIndex=Math.ceil(line/2)
                   theLine = line%2===0?2:1
                   let toughtClasses = this.getConnectedTeacher().toughtClasses
                   let subject = elmt.split('_')[0]
                   let salle = elmt.split('-')[1]
                   ++index
                   let day=0
                   switch(index){
                       case 1:
                           day='mon'
                           break
                       case 2:
                           day='tue'
                           break
                       case 3:
                           day='wed'
                           break
                       case 4:
                           day='thur'
                           break
                       case 5:
                           day='fri'
                           break
                       case 6:
                           day='sat'
                           break
                       case 7:
                           day='sun'
                           break
                        default:
                            break
                   }
                   hisTable.push(toughtClasses[classIndex-1].nomClasse+'_'+theLine+'_'+day+'_'+subject+'_'+salle)
               }else ++index
               return null
            })
            return null
        }))
        console.log(hisTable,"hisTable")
        return hisTable
        /*
            output: ["IRT 3_1_mon_IDE_B03", "IRT 3_1_tue_IDE_", "IRT 3_2_mon_IDE_", "IRT 2_2_thur_IDE_"]

            meaning: className_lineNumber_day_subject_salle
        */
    }

    generateTeacherTimetable=()=>{
        let representativeTable= this.getClassWeekSubjects()
        let table=[
            {index:1, debut:'08:00', fin:'12:00', mon:{classe:'', cour:'', salle:''}, tue:{classe:'', cour:'', salle:''}, wed:{classe:'', cour:'', salle:''}, thur:{classe:'', cour:'', salle:''}, fri:{classe:'', cour:'', salle:''}, sat:{classe:'', cour:'', salle:''}, sun:{classe:'', cour:'', salle:''}},
            {index:2, debut:'13:00', fin:'17:00', mon:{classe:'', cour:'', salle:''}, tue:{classe:'', cour:'', salle:''}, wed:{classe:'', cour:'', salle:''}, thur:{classe:'', cour:'', salle:''}, fri:{classe:'', cour:'', salle:''}, sat:{classe:'', cour:'', salle:''}, sun:{classe:'', cour:'', salle:''}}
        ]

        representativeTable.map(weekSubject=>{
            let lineIndex = Number(weekSubject.split('_')[1])-1
            let day = weekSubject.split('_')[2]
            table[lineIndex][day].classe=weekSubject.split('_')[0]
            table[lineIndex][day].cour=weekSubject.split('_')[3]
            table[lineIndex][day].salle=weekSubject.split('_')[4]
            return null
        })
        return table
    }

    getMonday=()=>{
        let today=new Date();
        if(today.getDay()!==1){
            today.setHours(-24*(today.getDay()-1))
            return today.toDateString()
        }else return today.toDateString()
    }

    getSunday=()=>{
        let monday=new Date(this.getMonday())
        monday.setDate(monday.getDate()+6)
        return new Date(monday).toDateString()
    }

    showTeacherTable=()=>{
        let teacherTable = this.generateTeacherTimetable()
        let days=['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
        return teacherTable.map(line=>(
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
                    <span id='mon_cours' >{line[day].classe}</span>
                    <span id='mon_cours' >{line[day].cour}</span>
                    <span id='mon_cours' >{line[day].salle}</span>
                </div>
            )}
        </div>
        ))
    }
 componentDidMount(){
  console.log('passing here')
        fetch('https://dp-db.herokuapp.comteacher/timetable', {
            method: 'get',
            headers: {'Content-Type': 'application/json','x-access-token':window.localStorage.getItem("token")}
          })
          .then(response=>response.json())
          .then(data=>{
            if(data.message){
              console.log(data.message)
                const teacher = data.message.teacher.map(teacher=>{return{
                    idPersonnel:teacher._id,
                    matriculePersonnel: teacher.matricule,
                    nom: teacher.nom,
                    prenom: teacher.prenom,
                    mail: teacher.email,
                    tel: teacher.tel,
                    role: teacher.role,
                    toughtClasses: teacher.taughtClasses
                }})
                const timetables = data.message.timetables.map(timetable=>{return{
                    idTimetable: timetable._id,
                    classe: timetable.classe,
                    tableHeader: timetable.tableHeader,
                    table: timetable.table,
                }})
      
                this.props.dispatch({type: "CREATE_TEACHER", payload: teacher})
                this.props.dispatch({type: "CREATE_TIMETABLE", payload: timetables})
                this.setState({idConnectedPersonnel:parseJwt(window.localStorage.getItem('token')).user._id})
            }
            else{
              console.log(data)
            }
          })
          .catch(error=>console.log(error))      
    }
    render() {
       console.log(this.props,this.state)
        return (
            <div>
            {(!this.state.idConnectedPersonnel)?
                <div id="loading-on">Loading</div>
            :
            <Hoc>
              <div className='weekDate'>
                    <span>Semaine allant de: {this.getMonday()} - {this.getSunday()}</span>
                </div>
                {this.showTeacherTable()}
            </Hoc>
            }
            </div>
        )
  }
}

const mapStateToProps=(state)=>{
    return{
        teachers: state.Teacher.teachers,
        personnels: state.Personnel.personnels,
        timetable: state.Timetable.timetables
    }
}

export default connect(mapStateToProps)(TeacherTimetable)