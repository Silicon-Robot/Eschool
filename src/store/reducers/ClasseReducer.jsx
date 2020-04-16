const initState = {
    classes:[
    ]
}

const classeReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_CLASSE':
            return{...state, classes:[...state.classes, ...action.payload]}
        default:
            return state
    }
}

export default classeReducer;
