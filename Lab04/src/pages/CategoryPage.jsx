import { useParams, Outlet, Link } from 'react-router-dom'

export default function CategoryPage() {
	const { category } = useParams()

	return (
		<div>
			<h1>Category: {category}</h1>
			<ul>
				<li>
					<Link to={`/${category}/product1`}>Product 1</Link>
				</li>
				<li>
					<Link to={`/${category}/product2`}>Product 2</Link>
				</li>
			</ul>
			<Outlet />
		</div>
	)
}
