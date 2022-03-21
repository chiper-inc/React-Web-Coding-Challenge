import { FC } from 'react'
import { HeaderSubtitle, HeaderTitle } from '../../atoms/index.atoms'

import { HeaderLogo } from '../../molecules/index.molecules'

const Header: FC = () => (
	<header
		className={`w-full py-4 md:py-8 grid grid-flow-col grid-rows-2 gap-x-4 md:gap-x-8 justify-start bg-slate-50 dark:bg-slate-900 md:sticky md:top-0 z-50`}
	>
		<HeaderLogo className={'row-start-1 row-end-3'} />
		<HeaderTitle
			title={'Police Department of Berlin'}
			className={'row-start-1 row-end-2 self-end'}
		/>
		<HeaderSubtitle subtitle={'Stolen bikes'} className={'row-start-2 row-end-3 self-start'} />
	</header>
)

export default Header
