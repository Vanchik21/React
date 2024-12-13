// src/features/todo/TodoApp.js
import { useState } from 'react'
import {
	useGetTodosQuery,
	useAddTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation,
} from '../api/todosApi'

export default function TodoList() {
	const [title, setTitle] = useState('')
	const { data: todos = [], refetch, isLoading } = useGetTodosQuery()
	const [addTodo, { isLoading: isAdding }] = useAddTodoMutation()
	const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation()
	const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation()

	const handleAddToDo = async () => {
		if (title.length > 2) {
			await addTodo({
				id: '4',
				title: title,
			})
			setTitle('')
			refetch()
		}
	}

	const handleUpdateToDo = async (id) => {
		const newTitle = prompt('Enter new title for the todo:')
		if (newTitle) {
			await updateTodo({ id, title: newTitle })
			refetch()
		}
	}

	const handleDeleteToDo = async (id) => {
		if (window.confirm('Are you sure you want to delete this todo?')) {
			await deleteTodo(id)
			refetch()
		}
	}

	if (isLoading) return <p>Loading...</p>

	return (
		<div>
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Title'
			/>
			<button
				onClick={handleAddToDo}
				disabled={isAdding}
			>
				{isAdding ? 'Adding...' : 'Add Todo'}
			</button>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						{todo.title}
						<button
							onClick={() => handleUpdateToDo(todo.id)}
							disabled={isUpdating}
						>
							{isUpdating ? 'Updating...' : 'Edit'}
						</button>
						<button
							onClick={() => handleDeleteToDo(todo.id)}
							disabled={isDeleting}
						>
							{isDeleting ? 'Deleting...' : 'Delete'}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
