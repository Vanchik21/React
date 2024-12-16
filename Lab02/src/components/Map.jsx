import Region from './Region'
import ChosenRegion from './ChosenRegion'
import { useState } from 'react'

const regions = [
	{ name: 'Region 1', info: 'Info about region 1' },
	{ name: 'Region 2', info: 'Info about region 2' },
	{ name: 'Region 3', info: 'Info about region 3' },
	{ name: 'Region 4', info: 'Info about region 4' },
	{ name: 'Region 5', info: 'Info about region 5' },
	{ name: 'Region 6', info: 'Info about region 6' },
	{ name: 'Region 7', info: 'Info about region 7' },
	{ name: 'Region 8', info: 'Info about region 8' },
]

export default function Map() {
	const [chosenRegion, setChosenRegion] = useState(null)

	return (
		<>
			<h1>Regions</h1>
			<div className='regions-container'>
				{regions.map((region, index) => (
					<Region
						key={index}
						name={region.name}
						info={region.info}
						setChosenRegion={setChosenRegion}
					/>
				))}
			</div>
			<ChosenRegion chosenRegion={chosenRegion} />
		</>
	)
}
