const initState = {
    timeTables: [{
        _id:'DjakouWorld',
        idCoordo:'KamdaWorld',
        idClasse:'NtchamiWorld',
        date_debut_semaine:'30/03/2020',
        cours: [
            {
                tablePosition:1,
                idCours:'TchanaWorld',
                idSalle:'TchuenkamWorld',
                NatureCours:'CM',
                canceled:false
            }
        ],
        history: []
    }]
}

const timeTableReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_TIMETABLE':
            return{...state, timeTables:[...state.timeTables, ...action.payload]}
        default:
            return state
    }
}

export default timeTableReducer;
