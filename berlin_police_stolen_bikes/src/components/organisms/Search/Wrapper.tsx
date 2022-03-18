import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { BtnSolid, FormInput } from '../../atoms/index.atoms'

// interface SearchWrapperProps {}

// const SearchWrapper: FC<SearchWrapperProps> = () => {
const SearchWrapper: FC = () => {
	const { handleSubmit, register, watch } = useForm()

	const hdlSubmit = (data: {}) => {
		console.log(data)
	}

	// const hdlSearch = () => {}

	// {
	// 	/* <form onSubmit={handleSubmit(hdlSearch)}> */
	// }

	console.log(watch('keyword'))

	return (
		<form className={'grid grid-cols-5 gap-x-4'} onSubmit={handleSubmit(hdlSubmit)}>
			<FormInput
				type={'search'}
				className={'col-start-1 col-end-3'}
				placeholder={'Search case descriptions'}
				customAttrib={{ ...register('keyword') }}
			/>
			<FormInput type={'date'} {...register('from')} placeholder={'from'} />
			<FormInput type={'date'} {...register('to')} placeholder={'to'} />
			<BtnSolid name={'Find cases'} type={'submit'} cta={() => console.log('asadsd')} />
		</form>
	)
}

export default SearchWrapper
