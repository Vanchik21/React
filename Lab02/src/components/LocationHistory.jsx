import useHistory from '../hooks/useHistory'

export default function LocationHistory() {
	const { location, push, replace, goBack, goForward } = useHistory()

	return (
		<div className='location-history'>
			<h1>Current Path: {location}</h1>
			<button onClick={() => push('/new-page')}>Go to /new-page</button>
			<button onClick={() => replace('/another-page')}>
				Replace with /another-page
			</button>
			<button onClick={goBack}>Go Back</button>
			<button onClick={goForward}>Go Forward</button>
		</div>
	)
}
