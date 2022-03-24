import { FC } from 'react'

import { HeaderWrapper } from '../organisms/index.organisms'

interface CommonTemplateProps {
	children: JSX.Element
}

const CommonTemplate: FC<CommonTemplateProps> = ({ children }) => (
	<main className={'px-4 md:px-32 2xl:px-96 pb-5'}>
		<HeaderWrapper />
		{children}
	</main>
)

export default CommonTemplate
