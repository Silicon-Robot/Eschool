const initState = {
    cours:[
        {idCour:1, classe:['IRT 2','IMB 2'], nomCours:'IDE', codeCours:'PROG0001', nomEnseignant:'Wangun Parfait Pascal'},
        // {idCour:2, nomCours:'Bases de Donnes', codeCours:'PROG0002', nomEnseignant:'Djeukam Arsene Georgy'},
    ]
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
