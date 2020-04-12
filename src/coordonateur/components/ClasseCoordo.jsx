import React, { Component } from 'react'

import './ClasseCoordo.css'

export default class ClasseCoordo extends Component {

    state={
        coordo:{
            _id:'KamdaWorld',
            idPersonnel:'KouatchouaWorld',
            classes:[{
                _id:'NtchamiWorld',
                nomFiliere:'IRT',
                niveau:3,
                startDate:'01/04/2020',
                history: []
            }],
            startDate:'01/04/202',
            history: []
        },
        open:false,
    }

    handleDefinirClick=(e)=>{
    }

    handleTimeFocus=()=>{
        document.getElementById('thatTime').type='time'
    }

    styleClasses =()=>{
        return this.state.coordo.classes.map(classe=>(
            <div className='coordoTimetableClasse' key={classe.nomFiliere}>
                <span>{classe.nomFiliere+classe.niveau}</span>
                <div className="coordoClassBtns">
                    <input type='submit' value='Definir' className='classeOptions' />
                    <input type='submit' value='Modifier' className='classeOptions' />
                </div>
            </div>
        ))
    }

    render() {
        return (
                this.styleClasses()
        )
    }
}
