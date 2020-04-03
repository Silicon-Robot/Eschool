const initState = {
    batiments:[{
        _id:'TchamiWorld',
        nomBatiment:'FST',
        idFaculty:'TchakoumiWorld',
        salles_de_cours: [{_idSalle:'TchuenkamWorld', nomSalle:'B03', capacite:30}],
        startDate:'01/04/2020',
        history: []
    }]
}

const batimentReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_BATIMENT':
            return{...state, batiments:[...state.batiments, ...action.payload]}
        default:
            return state
    }
}

export default batimentReducer;
