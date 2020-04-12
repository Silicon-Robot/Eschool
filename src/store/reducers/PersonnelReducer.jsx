const initState = {
    personnels: [
        {idPersonnel:1, Matricule:'kouatch', nom:'Kouatchoua', prenom:'Mark', mail:'kouatch@gmail.com', tel:'679879615', role:'enseignant'},
        {idPersonnel:2, Matricule:'tchakou', nom:'Kouatchoua Tchakoumi', prenom:'Lorrain', mail:'lorraintchakoumi@gmail.com', tel:'657140183', role:'secretaire'}
]
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
