import moment from 'moment'
import { FC } from 'react'
import { FaBicycle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BikeProps } from '../../../interfaces/index.interfaces'

const ProductItem: FC<BikeProps> = ({
	id,
	large_img,
	title,
	description,
	date_stolen,
	stolen_location,
}) => (
	<BikeItemStyled
		key={id}
		to={`/case/${id}`}
		className={`flex flex-col md:grid gap-x-4 p-3 odd:bg-gray-100 dark:odd:bg-slate-800 md:h-48`}
	>
		<figure
			className={`w-full md:w-48 h-64 md:h-full text-center overflow-hidden ${
				!large_img && 'flex'
			}`}
		>
			{large_img ? (
				<img className={'w-full h-full object-cover'} src={large_img} alt={title} />
			) : (
				<FaBicycle className={'w-3/4 h-3/4 m-auto'} />
			)}
		</figure>
		<aside className={'flex flex-col'}>
			<h1 className={'capitalize text-blue-700 font-semibold text-xl line-clamp-1 my-2 md:my-0'}>
				{title}
			</h1>
			<article className={'flex-grow-2 inline-flex flex-col md:flex-row gap-y-3 md:gap-x-4'}>
				<p className={'md:w-3/5 line-clamp-6 text-justify'}>{description}</p>
				<aside className={'grid content-start'}>
					<strong className={'uppercase text-sm'}>
						stolen date:{' '}
						<span className={'capitalize font-normal ml-0.5'}>
							{moment(date_stolen).format('MMMM Do YYYY, hh:mm A')}
						</span>
					</strong>
					<strong className={'uppercase text-sm'}>
						stolen location: <span className={'capitalize font-normal'}>{stolen_location}</span>
					</strong>
				</aside>
			</article>
		</aside>
	</BikeItemStyled>
)

const BikeItemStyled = styled(Link)`
	grid-template-columns: 12rem 1fr;
`
export default ProductItem
