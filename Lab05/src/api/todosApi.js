import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
	reducerPath: 'todoApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => 'todos',
		}),
		addTodo: builder.mutation({
			query: (newTodo) => ({
				url: 'todos',
				method: 'POST',
				body: newTodo,
			}),
			invalidatesTags: ['Todo'],
		}),
		updateTodo: builder.mutation({
			query: (updatedTodo) => ({
				url: `todos/${updatedTodo.id}`,
				method: 'PUT',
				body: updatedTodo,
			}),
			invalidatesTags: ['Todo'],
		}),
		deleteTodo: builder.mutation({
			query: (id) => ({
				url: `todos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Todo'],
		}),
	}),
	tagTypes: ['Todo'],
})

export const {
	useGetTodosQuery,
	useAddTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation,
} = todosApi
