export default function ChosenRegion(props) {
	return (
		<div className='chosen-region'>
			{props.chosenRegion ? (
				<h4>You have chosen {props.chosenRegion} region</h4>
			) : (
				<h4>You haven't chosen a region</h4>
			)}
		</div>
	)
}
