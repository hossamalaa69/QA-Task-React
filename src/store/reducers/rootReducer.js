import { LOAD_QUESTIONS, DELETE_QUESTION, ADD_QUESTION, EDIT_QUESTION } from "../actions/qaActions";
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
        case ADD_QUESTION:
            return{
                ...state,
                questions: [...state.questions, action.question]
            }    
        case EDIT_QUESTION:{
            const newQuestions = state.questions;
            //console.log(newQuestions);
            const q_id = action.question.id;
            //console.log(q_id);
            const index = newQuestions.findIndex(q => q.id === q_id);
            //console.log(index);
            newQuestions[index] = action.question;
            //console.log(newQuestions);
            return {
                ...state,
                questions: newQuestions
            }
        }     
        default: 
            return state; 
    }
}

export default rootReducer;