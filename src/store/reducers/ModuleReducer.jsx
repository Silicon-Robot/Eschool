const initState = {
    modules:[
        { 
            index:1, codeModule:'UE0325',
            nomModule:'Programmation',
            nomClasse:'IRT 2',
            creditModule:6,
            matieres: [
                {codeCours:'PROG0001', poids:0.6},
                {codeCours:'PROG0002', poids:0.2},
            ]
        },
    ]
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
