import { FC } from 'react'

interface HeaderTitleProps {
	title: string
	className: string
}

const HeaderTitle: FC<HeaderTitleProps> = ({ title, className }) => (
	<h1 className={`text-xl md:text-4xl font-bold ${className}`}>{title}</h1>
)

export default HeaderTitle
