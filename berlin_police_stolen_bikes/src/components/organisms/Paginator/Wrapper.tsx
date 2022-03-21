import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
	faAngleLeft,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'

import { PaginatorBtn } from '../../molecules/index.molecules'

interface PaginatorWrapperProps {
	currentPage: number
	nextPage: () => void
	prevPage: () => void
	firstPage: () => void
	lastPage: () => void
}

const PaginatorWrapper: FC<PaginatorWrapperProps> = ({
	currentPage,
	nextPage,
	prevPage,
	firstPage,
	lastPage,
}) => {
	return (
		<footer className={'flex justify-center gap-x-3'}>
			<PaginatorBtn
				name={'First'}
				startIcon={faAngleDoubleLeft}
				cta={firstPage}
				isDisabled={currentPage === 1}
			/>
			<PaginatorBtn
				name={'Prev'}
				startIcon={faAngleLeft}
				cta={prevPage}
				isDisabled={currentPage === 1}
			/>
			{currentPage > 1 && <PaginatorBtn name={currentPage - 1} cta={prevPage} />}
			<PaginatorBtn name={currentPage} />
			<PaginatorBtn name={currentPage + 1} cta={nextPage} />
			<PaginatorBtn name={'Next'} endIcon={faAngleRight} cta={nextPage} />
			<PaginatorBtn name={'Last'} endIcon={faAngleDoubleRight} cta={lastPage} />
		</footer>
	)
}

export default PaginatorWrapper
