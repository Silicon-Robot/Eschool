import React, { Component } from 'react'

import './CoordoTimeTable.css';
import ClasseDefinir from '../components/ClasseDefinir';
import TimeTableFormat from '../components/TimeTableFormat';
import ClasseCoordo from '../components/ClasseCoordo';

export default class CoordoTimeTable extends Component {
    render() {
        return (
            <div>
                <ClasseCoordo />
                <ClasseDefinir />
                <TimeTableFormat />
            </div>
        )
    }
}
