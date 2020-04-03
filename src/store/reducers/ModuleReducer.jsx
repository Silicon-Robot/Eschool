const initState = {
    modules: [{
        _id:'TamenWorld',
        codeModule:'EA139A',
        nomModule:'Mathematique I',
        idClasse:'NtchamiWorld',
        credit: 8,
        cours: [{
            idCour:'TchanaWorld',
            nomCour:'Algorithme et Structure de donnees',
            codeDuCour:'INF220',
            poids:0.6,
            idPersonnel:'KouatchouaWorld'
        }],
        history: []
    }]
}

const moduleReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_MODULE':
            return{...state, modules:[...state.modules, ...action.payload]}
        default:
            return state
    }
}

export default moduleReducer;
