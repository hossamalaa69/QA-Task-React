export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'; 
export const DELETE_QUESTION = 'DELETE_QUESTION'

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