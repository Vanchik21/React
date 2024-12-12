import { Outlet, Link } from 'react-router-dom'

export default function Main() {
	return (
		<div>
			<h1>Main page</h1>
			<ul>
				<li>
					<Link to='/category1'>Category 1</Link>
				</li>
				<li>
					<Link to='/category2'>Category 2</Link>
				</li>
			</ul>
			<Outlet />
		</div>
	)
}
