import { useParams } from 'react-router-dom'

export default function ProductPage() {
	const { category, product } = useParams()

	return (
		<div>
			<h2>Category: {category}</h2>
			<p>Product: {product}</p>
		</div>
	)
}
