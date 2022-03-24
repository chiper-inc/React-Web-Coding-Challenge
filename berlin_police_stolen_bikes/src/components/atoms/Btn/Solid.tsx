import { FC } from 'react'

interface BtnSolidProps {
	name: string
	cta?: () => void
	className?: string
	type?: 'button' | 'submit' | 'reset'
}

const BtnSolid: FC<BtnSolidProps> = ({ name, className, cta, type = 'button' }) => {
	return (
		<button
			type={type}
			onClick={cta}
			className={`bg-sky-700 border border-sky-700 hover:bg-sky-900 hover:border-sky-900 dark:hover:bg-sky-500 dark:hover:border-sky-500 text-white py-2 px-4 rounded-sm transition-all duration-500 ease-in-out ${className}`}
		>
			{name}
		</button>
	)
}

export default BtnSolid
