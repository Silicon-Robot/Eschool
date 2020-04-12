import React, { Component } from 'react'
import TimeTableLine from './TimeTableLine'

import './TimeTableFormat.css'

export default class TimeTableFormat extends Component {
    state={
        Table:[
            {fromTime:'', toTime:'', mon:'', tue:'', wed:'', thur:'', fri:'', sat:'', sun:''}
        ],
        Line:{fromTime:'', toTime:'', mon:'', tue:'', wed:'', thur:'', fri:'', sat:'', sun:''},
        keys:0
    }

    showLines=()=>{
        return this.state.Table.map(line=>{
            return <TimeTableLine />
        })
    }

    handleAddNewLine=()=>{
        let Table = this.state.Table
        Table.push(this.state.line)
        this.setState({Table:Table})
    }

    render() {
        return (
            <div>
                <TimeTableLine type='th' />
                {this.showLines()}
                <div onClick={this.handleAddNewLine} className='newTimeTableLine'>
                    <i className='fa fa-plus-circle' />
                </div>
                <div className="timeTableBtns">
                    <input type='button' value='Enregistrer' className='enregistrerBtn' />
                    <input type='button' value='Publier' className='publierBtn' />
                </div>
            </div>
        )
    }
}
