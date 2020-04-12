const initState = {
    faculties:[
        {index:1, nomFaculty:'FST',
        filieres: [
            {idFiliere:1, nomFiliere:'AU', niveauMax:3},
            {idFiliere:2, nomFiliere:'ERGC', niveauMax:3},
            {idFiliere:3, nomFiliere:'GC', niveauMax:3},
            {idFiliere:4, nomFiliere:'GM', niveauMax:3},
            {idFiliere:5, nomFiliere:'IMB', niveauMax:3},
            {idFiliere:6, nomFiliere:'IRT', niveauMax:3},
        ]},
        {index:2, nomFaculty:'FSS',
        filieres: [
            {idFiliere:1, nomFiliere:'MED', niveauMax:7},
            {idFiliere:2, nomFiliere:'PHAR', niveauMax:7},
            {idFiliere:3, nomFiliere:'DENT', niveauMax:7},
            {idFiliere:4, nomFiliere:'BIO', niveauMax:3},
            {idFiliere:5, nomFiliere:'VET', niveauMax:7},
        ]}
    ]
}

const facultyReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_FACULTY':
            return{...state, faculties:[...state.faculties, ...action.payload]}
        default:
            return state
    }
}

export default facultyReducer;
