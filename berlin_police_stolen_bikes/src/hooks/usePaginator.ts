import { SetStateAction } from 'react'

const usePaginator = (
	currentPage: number,
	setCurrentPage: { (value: SetStateAction<number>): void; (arg0: number): void }
) => {
	const firstPage = () => setCurrentPage(1)
	const prevPage = () => setCurrentPage(currentPage - 1)
	const nextPage = () => setCurrentPage(currentPage + 1)
	const lastPage = () => console.log(currentPage)

	return {
		firstPage,
		prevPage,
		nextPage,
		lastPage,
	}
}

export default usePaginator
