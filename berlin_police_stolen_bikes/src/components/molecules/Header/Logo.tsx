import { FC } from 'react'

import { Logo } from '../../atoms/index.atoms'

interface HeaderLogoProps {
	className: string
}

const HeaderLogo: FC<HeaderLogoProps> = ({ className }) => (
	<figure className={`w-16 md:w-24 ${className}`}>
		<Logo name={'Berlin Police Isotype'} />
	</figure>
)

export default HeaderLogo
