import { useState } from 'react'

export default function Region(props) {
	const [openInfo, setOpenInfo] = useState(false)

	const handleClick = () => {
		setOpenInfo((prev) => !prev)
	}

	return (
		<>
			<div className='region'>
				<p>{props.name}</p>
				<button onClick={() => props.setChosenRegion(props.name)}>
					Choose region
				</button>
				<button onClick={handleClick}>Open info</button>
				{openInfo && <p>{props.info}</p>}
			</div>
		</>
	)
}
