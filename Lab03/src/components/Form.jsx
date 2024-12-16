import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
	category: z.string().min(1, 'Select an option for category'),
	subcategory: z.string().min(1, 'Select an option for subcategory'),
	additionalCategory: z
		.string()
		.min(1, 'Select an option for additionalCategory'),
	additionalSubcategory: z
		.string()
		.min(1, 'Select an option for additionalSubcategory'),
	country: z.string().min(1, 'Select an option for country'),
})

export default function Form() {
	const [step, setStep] = useState(1)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(schema),
	})

	const onSubmit = (data) => {
		console.log(data)
		setStep(1)
		reset()
	}

	return (
		<form
			className='form'
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={step === 1 ? 'show' : 'hidden'}>
				<h2>Step 1</h2>
				<label>Category</label>
				<select {...register('category')}>
					<option value=''>Select an option</option>
					<option value='option1'>Option 1</option>
					<option value='option2'>Option 2</option>
				</select>
				<label>Subcategory</label>
				<select {...register('subcategory')}>
					<option value=''>Select an option</option>
					<option value='option1'>Option 1</option>
					<option value='option2'>Option 2</option>
				</select>
				{errors['category'] && <p>{errors['category']?.message}</p>}
				{errors['subcategory'] && <p>{errors['subcategory']?.message}</p>}
			</div>
			<div className={step === 2 ? 'show' : 'hidden'}>
				<h2>Step 2</h2>
				<label>Additional category</label>
				<select {...register('additionalCategory')}>
					<option value=''>Select an option</option>
					<option value='option1'>Option 1</option>
					<option value='option2'>Option 2</option>
				</select>
				<label>Additional subcategory</label>
				<select {...register('additionalSubcategory')}>
					<option value=''>Select an option</option>
					<option value='option1'>Option 1</option>
					<option value='option2'>Option 2</option>
				</select>
				{errors['additionalCategory'] && (
					<p>{errors['additionalCategory']?.message}</p>
				)}
				{errors['additionalSubcategory'] && (
					<p>{errors['additionalSubcategory']?.message}</p>
				)}
			</div>
			<div className={step === 3 ? 'show' : 'hidden'}>
				<h2>Step 3</h2>
				<label>Location</label>
				<select {...register('country')}>
					<option value=''>Select an option</option>
					<option value='option1'>Option 1</option>
					<option value='option2'>Option 2</option>
				</select>
				{errors['country'] && <p>{errors['country']?.message}</p>}
			</div>

			<div>
				<button
					type='button'
					onClick={() => setStep((prev) => prev - 1)}
					disabled={step === 1}
				>
					Back
				</button>
				<button
					type='button'
					onClick={() => setStep((prev) => prev + 1)}
					disabled={step === 3}
				>
					Next
				</button>
				<button
					type='submit'
					disabled={step < 3}
				>
					Submit
				</button>
			</div>
		</form>
	)
}
