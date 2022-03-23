import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface PaginatorBtnProps {
	cta?: () => void
	endIcon?: IconProp
	startIcon?: IconProp
	isDisabled?: boolean
	name: string | number
	classNameText?: string
}

const PaginatorBtn: FC<PaginatorBtnProps> = ({
	cta,
	endIcon,
	isDisabled,
	name,
	startIcon,
	classNameText,
}) => (
	<button
		onClick={cta}
		type={'button'}
		title={`${name}`}
		disabled={isDisabled}
		className={`flex items-center border text-white py-1 px-3 rounded-sm bg-sky-700 border-sky-700 hover:bg-sky-900 hover:border-sky-900 dark:hover:bg-sky-500 dark:hover:border-sky-500 disabled:bg-slate-400 disabled:border-slate-400 disabled:cursor-not-allowed transition-all duration-500 ease-in-out`}
	>
		{startIcon && <FontAwesomeIcon className={'md:mr-1.5'} icon={startIcon} />}
		<span className={classNameText}>{name}</span>
		{endIcon && <FontAwesomeIcon className={'md:ml-1.5'} icon={endIcon} />}
	</button>
)

export default PaginatorBtn
