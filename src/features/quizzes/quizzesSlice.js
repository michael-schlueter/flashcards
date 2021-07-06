import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
})

// Action creator for creating a new quiz and then associating that created quiz to a topic
export const addQuizToTopicId = (quiz) => {
    const { topicId, id } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizIdToTopic({ topicId: topicId, quizId: id}))
    }
}

export const { addQuiz } = quizzesSlice.actions; 
export default quizzesSlice.reducer;
export const selectQuizzes = (state) => state.quizzes.quizzes;