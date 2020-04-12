import React from 'react'

import './TimeTableLine.css'

export default function TimeTableLine(props) {
    return (
        props.type!=='th'?(
            <div className='LineHolder'>

            <div className="columnTime">
                <span className='hmm'>
                    <h3>Debut: </h3><input type='text' id='fromTime' value='18:00' />
                </span>
                <span>
                    <h3>Fin: </h3><input type="text" id='toTime' value='20:00' />
                </span>
            </div>
            <div className="columnDay">
                <select id='selectCours'>
                    <option>Quel Cours</option>
                    </select>
                <select id='selectSalle'>
                    <option>Salle</option>
                </select>
            </div>
            <div className="columnDay">
                <select id='selectCours'>
                    <option>Quel Cours</option>
                    </select>
                <select id='selectSalle'>
                    <option>Salle</option>
                </select>
            </div>
            <div className="columnDay">
                <select id='selectCours'>
                    <option>Quelle Cours</option>
                    </select>
                <select id='selectSalle'>
                    <option>Salle</option>
                </select>
            </div>
            <div className="columnDay">
                <select id='selectCours'>
                    <option>Quelle Cours</option>
                    </select>
                <select id='selectSalle'>
                    <option>Salle</option>
                </select>
            </div>
            <div className="columnDay">
                <select id='selectCours'>
                    <option>Quelle Cours</option>
                    </select>
                <select id='selectSalle'>
                    <option>Salle</option>
                </select>
            </div>
            <div className="columnDay">
                <select id='selectCours'>
                    <option>Quelle Cours</option>
                    </select>
                <select id='selectSalle'>
                    <option>Salle</option>
                </select>
            </div>
            <div className="columnDay">
                <select id='selectCours'>
                    <option>Quelle Cours</option>
                    </select>
                <select id='selectSalle'>
                    <option>Salle</option>
                </select>
            </div>
        </div>
            ):(
            <div className='LineHolder'>

            <div className="columnTime th">
            </div>
            <div className="columnDay th">
                Lundi
            </div>
            <div className="columnDay th">
                Mardi
            </div>
            <div className="columnDay th">
                Mercredi
            </div>
            <div className="columnDay th">
                Jeudi
                </div>
            <div className="columnDay th">
                Vendredi
            </div>
            <div className="columnDay th">
                Samedi
            </div>
            <div className="columnDay th">
                Dimanche
            </div>
        </div>
            )
    )
}
