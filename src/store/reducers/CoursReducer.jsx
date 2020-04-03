const initState = {
    cours: [{
        _id:'TchanaWorld',
        startDate:'01/04/2020',
        codeDuCour:'INF220',
        nomCour:'Algorithme et structure de donnees',
        natureCour:[{ _id:'KomguemWorld', nomNature:'CM'}],
        history: []
    }]
}

const courReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_COUR':
            return{...state, cours:[...state.cours, ...action.payload]}
        default:
            return state
    }
}

export default courReducer;
