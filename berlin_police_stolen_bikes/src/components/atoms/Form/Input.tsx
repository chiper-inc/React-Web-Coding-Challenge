import { FC } from 'react'

interface FormInputProps {
	type: 'search' | 'text' | 'tel' | 'date' | 'password'
	className?: string
	placeholder?: string
	customAttrib?: unknown
}

const FormInput: FC<FormInputProps> = ({ type, className, placeholder, customAttrib }) => (
	<input
		type={type}
		placeholder={placeholder}
		className={
			'border border-sky-700 focus:border-sky-900 dark:focus:border-sky-500 bg-transparent outline-none p-2 transition-all duration-500 ease-in-out ' +
			className
		}
		{...customAttrib}
	/>
)

export default FormInput
