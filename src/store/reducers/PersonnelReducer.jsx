const initState = {
    personnels: [
        {idPersonnel:2, matricule:'tchakou', nom:'Kouatchoua Tchakoumi', prenom:'Lorrain', mail:'lorraintchakoumi@gmail.com', tel:'657140183', role:'secretaire'},
        {idPersonnel:1, matricule:'kouatch', nom:'Kouatchoua', prenom:'Mark', mail:'kouatch@gmail.com', tel:'679879615', role:'enseignant'},
        {idPersonnel:1, matricule:'abatas', nom:'Abatas', prenom:'Mark', mail:'kouatch@gmail.com', tel:'679879615', role:'enseignant'},
        {idPersonnel:1, matricule:'ark', nom:'Kouatchoua', prenom:'Ark', mail:'kouatch@gmail.com', tel:'679879615', role:'enseignant'},
        {idPersonnel:1, matricule:'lark', nom:'Kouatchoua', prenom:'Lark', mail:'kouatch@gmail.com', tel:'679879615', role:'enseignant'},
        {idPersonnel:1, matricule:'babatas', nom:'Babatas', prenom:'Mark', mail:'kouatch@gmail.com', tel:'679879615', role:'enseignant'},
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
