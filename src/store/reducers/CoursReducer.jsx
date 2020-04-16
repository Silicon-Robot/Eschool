const initState = {
    cours:[
    ]
}

const courReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_COUR':
            return{...state, cours:[...state.cours, ...action.payload]}       
        case 'UPDATE_COUR':
        	let index;
        	for (var i = 0; i < action.payload.length; i++) {
        		index = state.cours.findIndex(cr=>cr.idCour===action.payload[i].idCour)
        		if(index){
        			state.cours[index] = action.payload[i]
        		}
        	}
            return{...state, cours:state.cours}
        default:
            return state
    }
}

export default courReducer;
