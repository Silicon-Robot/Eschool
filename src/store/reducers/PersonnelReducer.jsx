const initState = {
    personnels: [
    ]
}

const personnelReducer = (state = initState, action)=>{
    switch(action.type){
        case 'LOAD_PERSONNEL':
            return{...state, personnels:[...state.personnels, ...action.payload]}
        default:
            return state
    }
}

export default personnelReducer;
