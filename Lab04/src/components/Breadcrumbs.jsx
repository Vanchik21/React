export default function Breadcrumbs({ segments }) {
	let path = ''

	return (
		<nav>
			{segments.map((segment, index) => {
				path += `/${segment.path}`
				return (
					<>
						<Link to={path}>{segment.name}</Link>
						{index < segments.length - 1 && ' / '}
					</>
				)
			})}
		</nav>
	)
}
