import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload)
		},
		updateTodo: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id)
			if (index !== -1) {
				state[index] = action.payload
			}
		},
		removeTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload)
		},
	},
})

export const { addTodo, updateTodo, removeTodo } = todosSlice.actions
export default todosSlice.reducer