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
	totalPages: number
}

const PaginatorWrapper: FC<PaginatorWrapperProps> = ({
	currentPage,
	totalPages,
	nextPage,
	prevPage,
	firstPage,
	lastPage,
}) => {
	return (
		<footer className={'flex justify-center gap-x-3 mt-5'}>
			<PaginatorBtn
				name={'First'}
				classNameText={'hidden md:block'}
				cta={firstPage}
				startIcon={faAngleDoubleLeft}
				isDisabled={currentPage <= 1}
			/>
			<PaginatorBtn
				name={'Prev'}
				classNameText={'hidden md:block'}
				cta={prevPage}
				startIcon={faAngleLeft}
				isDisabled={currentPage <= 1}
			/>
			{currentPage > 1 && <PaginatorBtn name={currentPage - 1} cta={prevPage} />}
			<PaginatorBtn name={currentPage} />
			{currentPage < totalPages && <PaginatorBtn name={currentPage + 1} cta={nextPage} />}
			<PaginatorBtn
				name={'Next'}
				classNameText={'hidden md:block'}
				cta={nextPage}
				endIcon={faAngleRight}
				isDisabled={currentPage === totalPages}
			/>
			<PaginatorBtn
				name={'Last'}
				classNameText={'hidden md:block'}
				cta={lastPage}
				endIcon={faAngleDoubleRight}
				isDisabled={currentPage === totalPages}
			/>
		</footer>
	)
}

export default PaginatorWrapper
