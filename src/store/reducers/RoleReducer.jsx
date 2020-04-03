const initState = {
    roles: [
        {
            _id:'HelloWorld', nomRole:'Enseignant', startDate:'01/04/2020',
            history:[]
        }
    ]
}

const roleReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_ROLE':
            return{...state, roles:[...state.roles, ...action.payload]}
        default:
            return state
    }
}

export default roleReducer;