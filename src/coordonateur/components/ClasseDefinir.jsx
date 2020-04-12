import React, { Component } from 'react'

import './ClasseDefinir.css'

export default class ClasseDefinir extends Component {
    state={
        fromDate:'',
        toDate:'',
    }

    handleDateFocus=(e)=>{
        let element=e.target.id
        document.getElementById(element).type='date'
    }

    handleDateBlur=(e)=>{
        let element = e.target.id
        document.getElementById(element).type='text'
    }

    handleInputChange=(e)=>{
        this.setState({[e.target.id]:e.target.value},()=>this.fillToDate())
    }

    handlePlusClick=(e)=>{
        let Date={fromDate:this.state.fromDate, toDate:this.state.toDate}
        let Time={fromTime:this.state.fromTime, toTime:this.state.toTime}
        let data={date:Date, time:Time}
        //upload data with the function you'll receive from props
        // this.props.uploadData(data)
    }

    fillToDate=()=>{
        let tempDate = new Date(this.state.fromDate)
        tempDate.setDate(tempDate.getDate()+6)
        tempDate = tempDate.toDateString();
        this.setState({toDate:tempDate},()=>console.log(this.state))
    }

    render() {
        return (
            <div className='ClasseDefinir'>
                <span className='className'>IRT 2</span>
                <div className='ClasseDefinirDateHolder'>
                    <span className='ClasseDefinirLabelD'>De:</span>
                    <input type='Text' onFocus={this.handleDateFocus} onBlur={this.handleDateBlur} placeholder='YYYY-MM-DD' onChange={this.handleInputChange} className='classeDefinirInput' id='fromDate' />

                    <span className='ClasseDefinirLabelA'>A</span>
                    <input type='Text' placeholder='YYYY-MM-DD' disabled value={this.state.toDate} className='classeDefinirInput' id='toDate' />
                </div>
            </div>
        )
    }
}
