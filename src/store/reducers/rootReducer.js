import { LOAD_QUESTIONS, DELETE_QUESTION } from "../actions/qaActions";
import { initState } from "../initState";

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case LOAD_QUESTIONS:
            return state;
        case DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(question => question.id !== action.id)
            }         
        default: 
            return state; 
    }
}

export default rootReducer;