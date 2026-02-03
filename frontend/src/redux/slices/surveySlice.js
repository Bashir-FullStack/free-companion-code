import { createSlice } from '@reduxjs/toolkit' 
 
const surveySlice = createSlice({ 
  name: 'survey', 
  initialState: { 
    questions: [], 
    currentQuestion: 0, 
    answers: {}, 
    completed: false, 
    loading: false, 
    error: null, 
  }, 
  reducers: { 
    setQuestions: (state, action) =
      state.questions = action.payload 
    }, 
    nextQuestion: (state) =
      if (state.currentQuestion < state.questions.length - 1) { 
        state.currentQuestion++ 
      } 
    }, 
    prevQuestion: (state) =
      if (state.currentQuestion > 0) { 
        state.currentQuestion-- 
      } 
    }, 
    setAnswer: (state, action) =
      const { questionId, answer } = action.payload 
      state.answers[questionId] = answer 
    }, 
    completeSurvey: (state) =
      state.completed = true 
    }, 
    resetSurvey: (state) =
      state.currentQuestion = 0 
      state.answers = {} 
      state.completed = false 
    }, 
  }, 
}) 
 
export const { setQuestions, nextQuestion, prevQuestion, setAnswer, completeSurvey, resetSurvey } = surveySlice.actions 
export default surveySlice.reducer 
