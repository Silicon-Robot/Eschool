import { combineReducers } from 'redux'

import BatimentReducer from './BatimentReducer';
import ClasseReducer from './ClasseReducer';
import CoordonateurReducer from './CoordonateurReducer';
import CoursReducer from './CoursReducer';
import FacultyReducer from './FacultyReducer';
import ModuleReducer from './ModuleReducer';
import PersonnelReducer from './PersonnelReducer';
import RoleReducer from './RoleReducer';
import TimeTableReducer from './TimeTableReducer';
import TroncCommunReducer from './TroncCommunReducer';

const rootReducer = combineReducers({
    Batiment:BatimentReducer,
    Classe: ClasseReducer,
    Coordonateur: CoordonateurReducer,
    Cour: CoursReducer,
    Faculty: FacultyReducer,
    Module: ModuleReducer,
    Personnel: PersonnelReducer,
    Role: RoleReducer,
    TimeTable: TimeTableReducer,
    TroncCommun: TroncCommunReducer
})

export default rootReducer