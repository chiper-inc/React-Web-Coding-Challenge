import { FC } from 'react'

interface HeaderSubtitleProps {
	subtitle: string
	className: string
}

const HeaderSubtitle: FC<HeaderSubtitleProps> = ({ subtitle, className }) => (
	<h3 className={`text-lg md:text-2xl ${className}`}>{subtitle}</h3>
)

export default HeaderSubtitle
