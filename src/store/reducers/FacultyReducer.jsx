const initState = {
    faculties: [{
        _id:'TchakoumiWorld',
        nomFaculty:'FST',
        filieres: [
            {_id:'YongaWorld', nomFiliere:'IRT', maxNiveau:3}
        ],
        startDate:'01/04/2020',
        history: []
    }]    
}

const facultyReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_FACULTY':
            return{...state, faculties:[...state.faculties, ...action.payload]}
        default:
            return state
    }
}

export default facultyReducer;
