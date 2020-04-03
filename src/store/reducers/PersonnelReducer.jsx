const initState = {
    personnels: [{
        _id:'KouatchouaWorld',
        Matricule:'17C12NBW700',
        nom:'Kouatchoua',
        prenom:'Mark',
        mail:'kouatch@gmail.com',
        tel:'679879615',
        role:'Enseignant',
        startDate:'01/04/2020',
        history: []
    }]
}

const personnelReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_PERSONNEL':
            return{...state, personnels:[...state.personnels, ...action.payload]}
        default:
            return state
    }
}

export default personnelReducer;
