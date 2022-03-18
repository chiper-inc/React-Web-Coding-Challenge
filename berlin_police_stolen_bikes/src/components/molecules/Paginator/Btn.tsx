import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface PaginatorBtnProps {
	cta?: () => void
	endIcon?: IconProp
	name: string | number
	startIcon?: IconProp
}

const PaginatorBtn: FC<PaginatorBtnProps> = ({ name, cta, startIcon, endIcon }) => (
	<button
		type={'button'}
		onClick={cta}
		title={`${name}`}
		className={`bg-sky-700 border border-sky-700 hover:bg-sky-900 hover:border-sky-900 dark:hover:bg-sky-500 dark:hover:border-sky-500 text-white py-1 px-3 rounded-sm transition-all duration-500 ease-in-out`}
	>
		{startIcon && <FontAwesomeIcon className={'mr-1.5'} icon={startIcon} />}
		{name}
		{endIcon && <FontAwesomeIcon className={'ml-1.5'} icon={endIcon} />}
	</button>
)

export default PaginatorBtn
