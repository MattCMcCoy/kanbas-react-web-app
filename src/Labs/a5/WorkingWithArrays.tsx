import axios from 'axios';
import { useEffect, useState } from 'react';

function WorkingWithArrays() {
	const [errorMessage, setErrorMessage] = useState(null);
	const API = 'http://localhost:4000/a5/todos';
	const [todo, setTodo] = useState({
		id: 1,
		title: 'NodeJS Assignment',
		description: 'Create a NodeJS server with ExpressJS',
		due: '2021-10-10',
		completed: false
	});
	const [todos, setTodos] = useState([]);
	const fetchTodos = async () => {
		const response = await axios.get(API);
		setTodos(response.data);
	};
	const deleteTodo = async (todo) => {
		try {
			await axios.delete(`${API}/${todo.id}`);
			setTodos(todos.filter((t) => t.id !== todo.id));
		} catch (error) {
			console.log(error);
			setErrorMessage(error.response.data.message);
		}
	};

	const updateTodo = async () => {
		try {
			await axios.put(`${API}/${todo.id}`, todo);
			setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
		} catch (error) {
			console.log(error);
			setErrorMessage(error.response.data.message);
		}
	};

	const fetchTodoById = async (id) => {
		const response = await axios.get(`${API}/${id}`);
		setTodo(response.data);
	};

	const postTodo = async () => {
		const response = await axios.post(API, todo);
		setTodos([...todos, response.data]);
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<div>
			<h2>Working with Arrays</h2>
			{errorMessage && <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>}
			<input value={todo.id} readOnly />
			<input
				onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
				value={todo.title}
				type="text"
			/>
			<input
				value={todo.description}
				type="text"
				onChange={(e) => setTodo({ ...todo, description: e.target.value })}
			/>
			<input
				value={todo.due}
				type="date"
				onChange={(e) =>
					setTodo({
						...todo,
						due: e.target.value
					})
				}
			/>
			<label>
				<input
					value={todo.completed ? 'true' : 'false'}
					checked={todo.completed}
					type="checkbox"
					onChange={(e) =>
						setTodo({
							...todo,
							completed: e.target.checked
						})
					}
				/>
				Completed
			</label>
			<button onClick={postTodo}> Post Todo </button>
			<button onClick={updateTodo}>Update Todo</button>
			<ul className="list-group">
				{todos.map((todo) => (
					<li key={todo.id} className="list-group-item">
						<input checked={todo.completed} type="checkbox" readOnly />
						{todo.title}
						<p>{todo.description}</p>
						<p>{todo.due}</p>
						<button onClick={() => fetchTodoById(todo.id)}>Edit</button>
						<button onClick={() => deleteTodo(todo)} className="btn btn-danger float-end ms-2">
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
export default WorkingWithArrays;
