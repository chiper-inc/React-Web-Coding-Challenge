import { FC } from 'react'

import isotype from '../../assets/img/isotype.png'

interface LogoProps {
	name: string
}

const Logo: FC<LogoProps> = ({ name }) => (
	<img src={isotype} className={'w-full'} alt={name} title={name} />
)

export default Logo
