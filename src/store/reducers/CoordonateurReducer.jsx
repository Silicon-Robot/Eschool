const initState = {
    coordonateurs:[{
        _id:'KamdaWorld',
        idPersonnel:'KouatchouaWorld',
        classes: ['NtchamiWorld'],
        horaire: {
            début_journée:'8:00:00',
            fin_journée:'17:00:00',
            durée_cours:'04:00:00',
            heures_pauses: [
                { heure:'10:00:00', duree:'00:15:00'},
                { heure:'12:00:00', duree:'01:00:00'},
                { heure:'15:00:00', duree:'00:15:00'},
            ],
            startDate:'01/04/2020',
            history: []
        },
        startDate:'01/04/202',
        history: []
    }]
}

const coordonateurReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_COORDONATEUR':
            return{...state, coordonateurs:[...state.coordonateurs, ...action.payload]}
        default:
            return state
    }
}

export default coordonateurReducer;
