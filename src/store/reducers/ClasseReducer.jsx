const initState = {
    classes: [{
        _id:'NtchamiWorld',
        idFiliere:'YongaWorld',
        niveau:3,
        startDate:'01/04/2020',
        history: []
    }]
}

const classeReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_CLASSE':
            return{...state, classes:[...state.classes, ...action.payload]}
        default:
            return state
    }
}

export default classeReducer;
