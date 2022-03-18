import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { FaBicycle } from 'react-icons/fa'

import { PaginatorWrapper, SearchWrapper } from '../components/organisms/index.organisms'

interface StolenBike {
	date_stolen: number | null
	description: null | string
	frame_colors: string[]
	frame_model: null | string
	id: number
	is_stock_img: boolean
	large_img?: string
	location_found: null | string
	manufacturer_name: string
	external_id: null
	registry_name: null
	registry_url: null
	serial: string
	status: string
	stolen: boolean
	stolen_coordinates: number[] | null
	stolen_location: null | string
	thumb: null | string
	title: string
	url: string
	year: number | null
}

const HomePage: FC = () => {
	const [onLoading, setOnLoading] = useState<boolean>(true)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [stolenBikesList, setStolenBikesList] = useState<Array<StolenBike>>([])

	const getCases = async () => {
		try {
			const { data } = await axios(
				`/search?page=${currentPage}&per_page=10&location=Berlin&distance=100&stolenness=proximity`
			)
			return data
		} catch (err) {
			console.log(err)
		} finally {
			setOnLoading(false)
		}
	}

	useEffect(() => {
		getCases().then(({ bikes }) => setStolenBikesList(bikes))

		return () => {
			setStolenBikesList([])
		}
	}, [])

	return (
		<>
			<SearchWrapper />
			<section className={'flex flex-col mt-8'}>
				{onLoading ? (
					<div />
				) : (
					stolenBikesList.map(({ id, title, status, description, large_img, frame_colors }) => (
						<article key={id} className={'grid grid-cols-5 gap-x-8 odd:bg-gray-100'}>
							<figure className={'w-full grid justify-items-center items-center'}>
								{large_img ? (
									<img className={'w-full h-40 object-cover'} src={large_img} alt={title} />
								) : (
									<FaBicycle className={'w-3/4 h-3/4'} />
								)}
							</figure>
							<aside className={'py-5 col-start-2 col-end-6'}>
								<h1 className={'text-blue-700 font-semibold text-xl'}>
									{status} {title} {frame_colors.toString()}
								</h1>
								<p>{description}</p>
							</aside>
						</article>
					))
				)}
			</section>
			<PaginatorWrapper currentPage={currentPage} setCurrentPage={setCurrentPage} />
		</>
	)
}

export default HomePage
