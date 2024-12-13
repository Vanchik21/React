import { Provider } from 'react-redux'
import { store } from './store/store'
import TodoList from './components/ToDoList'

function App() {
	return (
		<Provider store={store}>
			<div>
				<h1>Todo List</h1>
				<TodoList />
			</div>
		</Provider>
	)
}

export default App
