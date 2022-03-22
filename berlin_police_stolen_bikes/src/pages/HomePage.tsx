import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import {
	CardItem,
	PaginatorWrapper,
	SearchWrapper,
	SkeletonCardItem,
 from '."../components/organisms/index.organisms";mport { getStolenBikeCount } from '."../helpers/index.helpers";mport { usePaginator } from '."../hooks/index.hooks";mport { BikeProps } from '../interfaces/index.interfaces'
import { isEmptyArr } from '../utils/index.utils'

const HomePage: FC = () => {
	const [ distance ]                    = useState<number> ( 100 );
	const [ location ]                    = useState<string> ( "Berlin" );
	const [ totalItems, setTotalItems ]   = useState<number> ( 0 );
	const [ totalPages, setTotalPages ]   = useState<number> ( 0 );
	const [ onSearch, setOnSearch ]       = useState<boolean> ( false );
	const [ pageLength, setPageLength ]   = useState<number> ( 10 );
	const [ onLoading, setOnLoading ]     = useState<boolean> ( true );
	const [ currentPage, setCurrentPage ] = useState<number> ( 1 );
	const [ bikeList, setBikeList ]       = useState<Array<BikeProps>> ( [] );

	const {
					nextPage,
					prevPage,
					firstPage,
					lastPage
				} = usePaginator (
		currentPage,
		setCurrentPage,
		totalPages
	);

	const getStolenBikes = async () => {
		setOnLoading ( true );

		try {
			const { data } = await axios (
				`/search?page=${ currentPage }&per_page=${ pageLength }&location=${ location }&distance=${ distance }&stolenness=proximity`
			);

			return data;
		} catch ( { message } ) {
			toast.error ( `${ message }` );
		} finally {
			setTimeout( () => {
				setOnLoading( false)
			}, 500)
		}
	}

	useEffect ( () => {
		getStolenBikes ()
			.then ( ( { bikes } ) => setBikeList ( bikes ) );

		getStolenBikeCount ( distance, location )
			.then ( ( { proximity } ) => setTotalItems ( proximity ) );

		setTotalPages ( Math.ceil ( totalItems / pageLength ) );
	}, [ currentPage ] );

	useEffect ( () => {
		return () => {
			setBikeList ( [] );
			setTotalItems ( 0 );
			setTotalPages ( 0 );
			setPageLength ( 0 );
		};
	}, [] );

	return (
		<>
			<SearchWrapper setOnSearch={ setOnSearch } />
			<legend
				className={
					"text-right py-4 text-slate-500 dark:text-slate-300 transition-colors ease-in-out duration-500"
				}
			>
				Total cases: { totalItems }
			</legend>
			<section className={ "grid" }>
				{ onLoading
					? (
						<>
							<SkeletonCardItem />
							<SkeletonCardItem />
							<SkeletonCardItem />
							<SkeletonCardItem />
							<SkeletonCardItem />
							<SkeletonCardItem />
							<SkeletonCardItem />
						</>
					) : isEmptyArr( bikeList) ? (
						<h1
							className={
								"text-slate-500 dark:text-slate-300 transition-colors ease-in-out duration-500"
							}
						>
							Your search has no matches
						</h1>
					) : (
								bikeList.map((bike) => <CardItem key={bike.id} {...bike} />)
							)}
			</section>
			{ ( !isEmptyArr ( bikeList ) || onSearch ) && (
				<PaginatorWrapper
					currentPage={ currentPage }
					totalPages={ totalPages }
					lastPage={ lastPage }
					nextPage={ nextPage }
					prevPage={ prevPage }
					firstPage={ firstPage }
				/>
			) }
		</>
	)
}

export default HomePage
