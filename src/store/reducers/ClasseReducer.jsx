const initState = {
    classes:[
        {idClasse:1, idFaculte:1, filiere:{idFiliere:1, nomFiliere:'AU', niveauMax:3}, niveau:1},
        {idClasse:2, idFaculte:1, filiere:{idFiliere:1, nomFiliere:'AU', niveauMax:3}, niveau:2},
        {idClasse:3, idFaculte:1, filiere:{idFiliere:1, nomFiliere:'AU', niveauMax:3}, niveau:3},
        {idClasse:4, idFaculte:1, filiere:{idFiliere:2, nomFiliere:'ERGC', niveauMax:3}, niveau:1},
        {idClasse:5, idFaculte:1, filiere:{idFiliere:2, nomFiliere:'ERGC', niveauMax:3}, niveau:2},
        {idClasse:6, idFaculte:1, filiere:{idFiliere:2, nomFiliere:'ERGC', niveauMax:3}, niveau:3},
        {idClasse:7, idFaculte:1, filiere:{idFiliere:3, nomFiliere:'GC', niveauMax:3}, niveau:1},
        {idClasse:8, idFaculte:1, filiere:{idFiliere:3, nomFiliere:'GC', niveauMax:3}, niveau:2},
        {idClasse:9, idFaculte:1, filiere:{idFiliere:3, nomFiliere:'GC', niveauMax:3}, niveau:3},
        {idClasse:10, idFaculte:1, filiere:{idFiliere:4, nomFiliere:'GM', niveauMax:3}, niveau:1},
        {idClasse:11, idFaculte:1, filiere:{idFiliere:4, nomFiliere:'GM', niveauMax:3}, niveau:2},
        {idClasse:12, idFaculte:1, filiere:{idFiliere:4, nomFiliere:'GM', niveauMax:3}, niveau:3},
        {idClasse:13, idFaculte:1, filiere:{idFiliere:5, nomFiliere:'IMB', niveauMax:3}, niveau:1},
        {idClasse:14, idFaculte:1, filiere:{idFiliere:5, nomFiliere:'IMB', niveauMax:3}, niveau:2},
        {idClasse:15, idFaculte:1, filiere:{idFiliere:5, nomFiliere:'IMB', niveauMax:3}, niveau:3},
        {idClasse:16, idFaculte:1, filiere:{idFiliere:6, nomFiliere:'IRT', niveauMax:3}, niveau:1},
        {idClasse:17, idFaculte:1, filiere:{idFiliere:6, nomFiliere:'IRT', niveauMax:3}, niveau:2},
        {idClasse:18, idFaculte:1, filiere:{idFiliere:6, nomFiliere:'IRT', niveauMax:3}, niveau:3},
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
