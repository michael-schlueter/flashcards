import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            // create a new topics object based on the properties of the action.payload and add an quizIds property for all related quizzes to the topic
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addQuizIdToTopic: (state, action) => {
            // add related quizids to the topic
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
})

export const { addTopic, addQuizIdToTopic } = topicsSlice.actions; 
export default topicsSlice.reducer;
export const selectTopics = (state) => state.topics.topics;