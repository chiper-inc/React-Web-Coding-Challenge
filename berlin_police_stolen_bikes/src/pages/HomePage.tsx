import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

import {
	CardItem,
	PaginatorWrapper,
	SearchWrapper,
	SkeletonCardItem,
} from '../components/organisms/index.organisms'
import { isEmptyArr } from '../utils/index.utils'
import { usePaginator } from '../hooks/index.hooks'
import { BikeProps } from '../interfaces/index.interfaces'

const HomePage: FC = () => {
	const [pageLength] = useState<number>(10)
	const [onLoading, setOnLoading] = useState<boolean>(true)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [bikeList, setBikeList] = useState<Array<BikeProps>>([])

	const { nextPage, prevPage, firstPage, lastPage } = usePaginator(currentPage, setCurrentPage)

	const getCases = async () => {
		setOnLoading(true)

		try {
			const { data } = await axios(
				`/search?page=${currentPage}&per_page=${pageLength}&location=Berlin&distance=100&stolenness=proximity`
			)

			return data
		} catch ({ message }) {
			toast.error(`${message}`)
		} finally {
			setTimeout(() => {
				setOnLoading(false)
			}, 500)
		}
	}

	useEffect(() => {
		getCases().then(({ bikes }) => setBikeList(bikes))

		// return () => {}
	}, [currentPage])

	return (
		<>
			<SearchWrapper />
			{isEmptyArr(bikeList) ? (
				<legend className={'h-10'} />
			) : (
				<legend className={'text-right py-4 '}>Total cases: 85</legend>
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
					<>D</>
				) : (
					bikeList.map((bike) => <CardItem key={bike.id} {...bike} />)
				)}
			</section>
			{!isEmptyArr(bikeList) && (
				<PaginatorWrapper
					currentPage={currentPage}
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
