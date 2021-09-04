export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'; 
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';
export const EDIT_QUESTION = 'EDIT_QUESTION';

export const loadQuesions = () => {
    return {
        type: LOAD_QUESTIONS
    }
}

export const deleteQuestion = (id) => {
    return {
            type: DELETE_QUESTION,
            id: id
    }
}    

export const addQuestion = (question) => {
    return {
            type: ADD_QUESTION,
            question: question
    }
}    

export const editQuestion = (question) => {
    return {
            type: EDIT_QUESTION,
            question: question
    }
}    