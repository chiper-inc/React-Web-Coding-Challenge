import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
	faAngleLeft,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FC, SetStateAction } from 'react'

import { PaginatorBtn } from '../../molecules/index.molecules'

interface PaginatorWrapperProps {
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}

const PaginatorWrapper: FC<PaginatorWrapperProps> = ({ currentPage, setCurrentPage }) => {
	const hdlNextPage = () => {
		setCurrentPage((prevState) => prevState + 1)
	}

	return (
		<footer className={'flex justify-center gap-x-3'}>
			<PaginatorBtn name={'First'} startIcon={faAngleDoubleLeft} />
			<PaginatorBtn name={'Prev'} startIcon={faAngleLeft} />
			<PaginatorBtn name={1} />
			<PaginatorBtn name={currentPage} />
			<PaginatorBtn name={3} />
			<PaginatorBtn name={'Next'} endIcon={faAngleRight} cta={hdlNextPage} />
			<PaginatorBtn name={'Last'} endIcon={faAngleDoubleRight} />
		</footer>
	)
}

export default PaginatorWrapper
