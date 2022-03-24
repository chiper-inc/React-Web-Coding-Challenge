import { FC, SetStateAction } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { BtnSolid, FormInput } from '../../atoms/index.atoms'

interface SearchWrapperProps {
	setKeyword: { (value: SetStateAction<string>): void; (arg0: string): void }
}

interface FormProps {
	keyword: string
	from: string
	to: string
}

const SearchWrapper: FC<SearchWrapperProps> = ({ setKeyword }) => {
	const { handleSubmit, register } = useForm<FormProps>()

	const hdlSubmit: SubmitHandler<FormProps> = ({ keyword }) => {
		setKeyword(keyword)
	}

	return (
		<form className={'grid grid-cols-2 md:grid-cols-5 gap-4'} onSubmit={handleSubmit(hdlSubmit)}>
			<FormInput
				type={'text'}
				className={'col-start-1 col-end-3'}
				placeholder={'Search case descriptions'}
				customAttrib={{ ...register('keyword') }}
			/>
			<FormInput
				type={'date'}
				placeholder={'MM/DD/AAAA'}
				customAttrib={{ ...register('from') }}
				className={'col-start-1 col-end-2 md:col-start-3 md:col-end-4 w-full'}
			/>
			<FormInput
				type={'date'}
				placeholder={'MM/DD/AAAA'}
				customAttrib={{ ...register('to') }}
				className={'col-start-2 col-end-3 md:col-start-4 md:col-end-5 w-full'}
			/>
			<BtnSolid
				type={'submit'}
				name={'Find cases'}
				className={'col-start-1 col-end-3 md:col-start-5 md:col-end-6'}
			/>
		</form>
	)
}

export default SearchWrapper
