import axios from 'axios'
import { FC, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { BtnSolid, FormInput } from '../../atoms/index.atoms'

interface SearchWrapperProps {
	setOnSearch: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
}

// const SearchWrapper: FC = ({ setOnSearch }) => {
const SearchWrapper: FC<SearchWrapperProps> = ({ setOnSearch }) => {
	const { handleSubmit, register, watch } = useForm()

	const hdlSubmit = (data: {}) => {
		setOnSearch(true)
		console.log(data)
	}

	const hdlSearch = async (data: unknown) => {
		console.log(data)

		try {
			const resp = await axios(`/search?Giant`)
			console.log(resp)
		} catch ({ message }) {
			toast.error(`${message}`)
			// } finally {
		}
	}

	// const hdlSearch = () => {}

	// {
	// 	/* <form onSubmit={handleSubmit(hdlSearch)}> */
	// }

	console.log(watch('keyword'))

	return (
		<form className={'grid grid-cols-2 md:grid-cols-5 gap-4'} onSubmit={handleSubmit(hdlSubmit)}>
			<FormInput
				type={'search'}
				className={'col-start-1 col-end-3'}
				placeholder={'Search case descriptions'}
				customAttrib={{ ...register('keyword') }}
			/>
			<FormInput
				type={'date'}
				placeholder={'from'}
				customAttrib={{ ...register('from') }}
				className={'col-start-1 col-end-2 md:col-start-3 md:col-end-4 w-full'}
			/>
			<FormInput
				type={'date'}
				placeholder={'to'}
				customAttrib={{ ...register('to') }}
				className={'col-start-2 col-end-3 md:col-start-4 md:col-end-5 w-full'}
			/>
			<BtnSolid
				type={'submit'}
				name={'Find cases'}
				cta={() => console.log('')}
				className={'col-start-1 col-end-3 md:col-start-5 md:col-end-6'}
			/>
		</form>
	)
}

export default SearchWrapper
