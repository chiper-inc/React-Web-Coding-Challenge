import { FC, useEffect, useState } from 'react'

import {
	CardStolenBike,
	PaginatorWrapper,
	SearchWrapper,
	SkeletonCardItem,
} from '../components/organisms/index.organisms'
import { getStolenBikes, getStolenBikesCount } from '../helpers/index.helpers'
import { usePaginator } from '../hooks/index.hooks'
import { StolenBikeProps } from '../interfaces/index.interfaces'
import { isEmptyArr } from '../utils/index.utils'

const HomePage: FC = () => {
	const [distance] = useState<number>(100)
	const [pageLength] = useState<number>(10)
	const [location] = useState<string>('Berlin')
	const [keyword, setKeyword] = useState<string>('')
	const [totalItems, setTotalItems] = useState<number>(0)
	const [totalPages, setTotalPages] = useState<number>(0)
	const [onLoading, setOnLoading] = useState<boolean>(true)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [bikeList, setBikeList] = useState<Array<StolenBikeProps>>([])
	const { nextPage, prevPage, firstPage, lastPage } = usePaginator(
		currentPage,
		setCurrentPage,
		totalPages
	)

	useEffect(() => {
		setOnLoading(true)

		getStolenBikes(distance, location, pageLength, currentPage, keyword).then(({ bikes }) => {
			setBikeList(bikes)
		})

		getStolenBikesCount(distance, location, keyword).then(({ non, proximity, stolen }) => {
			setTotalItems(non + proximity + stolen)
		})
	}, [currentPage, keyword])

	useEffect(() => {
		setTimeout(() => {
			setOnLoading(false)
		}, 500)
	}, [bikeList])

	useEffect(() => {
		setTotalPages(Math.ceil(totalItems / pageLength))
	}, [totalItems])

	return (
		<>
			<SearchWrapper setKeyword={setKeyword} />
			{onLoading ? (
				<legend className={'w-1/4 h-6 my-4 ml-auto bg-slate-300 rounded-sm animate-pulse'} />
			) : (
				!isEmptyArr(bikeList) && (
					<legend
						className={
							'text-right my-4 ml-auto text-slate-600 dark:text-slate-300 transition-colors ease-in-out duration-500'
						}
					>
						Total cases: {totalItems}
					</legend>
				)
			)}
			<section className={'grid'}>
				{onLoading ? (
					<>
						<SkeletonCardItem />
						<SkeletonCardItem />
						<SkeletonCardItem />
						<SkeletonCardItem />
						<SkeletonCardItem />
						<SkeletonCardItem />
						<SkeletonCardItem />
					</>
				) : isEmptyArr(bikeList) ? (
					<h1
						className={`text-slate-600 dark:text-slate-300 transition-colors ease-in-out duration-500 text-center text-3xl py-40`}
					>
						Your search has no matches
					</h1>
				) : (
					bikeList.map((bike) => <CardStolenBike key={bike.id} {...bike} />)
				)}
			</section>
			{(!isEmptyArr(bikeList) || onLoading) && (
				<PaginatorWrapper
					currentPage={currentPage}
					totalPages={totalPages}
					lastPage={lastPage}
					nextPage={nextPage}
					prevPage={prevPage}
					firstPage={firstPage}
				/>
			)}
		</>
	)
}

export default HomePage
