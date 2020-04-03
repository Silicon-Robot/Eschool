import React, { Component } from 'react'
import './DisplayTable.css'

export default class DisplayTable extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type='text' placeholder='Entrez nom de filiere' className='newFiliere' />
                    <input type='text' placeholder='Niveau max' className='filiereNiveauMax' />
                    <input type='submit' value='Ajouter' className='newFiliereSubmit' />
                </form>
            </div>
        )
    }
}
