import { SetStateAction } from 'react'

const usePaginator = (
	currentPage: number,
	setCurrentPage: { (value: SetStateAction<number>): void; (arg0: number): void },
	totalPages: number
) => {
	const firstPage = () => setCurrentPage(1)
	const prevPage = () => setCurrentPage(currentPage - 1)
	const nextPage = () => setCurrentPage(currentPage + 1)
	const lastPage = () => setCurrentPage(totalPages)

	return {
		firstPage,
		prevPage,
		nextPage,
		lastPage,
	}
}

export default usePaginator
