const initState = {
    cours:[
    ]
}

const courReducer = (state = initState, action)=>{
    switch(action.type){
        case 'LOAD_COUR':
            return{...state, cours:[...state.cours, ...action.payload]}       
        case 'UPDATE_COUR':
        	let index;
        	for (var i = 0; i < action.payload.length; i++) {
                let idx = i;
        		index = state.cours.findIndex(cr=>cr.idCour===action.payload[idx].idCour)
        		if(index){
        			state.cours[index] = action.payload[idx]
        		}
        	}
            return{...state, cours:state.cours}
        case 'UPDATE_A_COUR':
            state.cours.forEach(cour=>{
                if(cour.codeCours===action.payload.codeCour){
                    cour.nomEnseignant = action.payload.teacherId;
                    return;
                 }
             })
            return state
        default:
            return state
    }
}

export default courReducer;
