import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { MapNoData, SkeletonMap } from '../components/atoms/index.atoms'
import { HeaderStolenBikeDetails } from '../components/molecules/index.molecules'
import { MapWrapper } from '../components/organisms/index.organisms'
import { StolenBikeDetailsProps } from '../interfaces/index.interfaces'

import { isEmptyArr } from '../utils/index.utils'

const CasePage: FC = () => {
	const { caseId } = useParams()

	const [onLoading, setOnLoading] = useState<boolean>(true)
	const [stolenBikeDetails, setStolenBikeDetails] = useState<StolenBikeDetailsProps>({
		id: 0,
		date_stolen: 0,
		description: '',
		frame_colors: [],
		frame_model: '',
		manufacturer_name: '',
		status: '',
		stolen_coordinates: [],
		stolen_location: '',
		title: '',
		year: null,
	})

	const getCaseData = async (id: string | undefined) => {
		try {
			const { data } = await axios(`/bikes/${id}`)

			return data
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		getCaseData(caseId).then(({ bike }) => {
			setStolenBikeDetails(bike)
			setTimeout(() => {
				setOnLoading(false)
			}, 500)
		})
	}, [caseId])

	return (
		<section
			className={'text-slate-600 dark:text-slate-300 transition-colors ease-in-out duration-500'}
		>
			<HeaderStolenBikeDetails
				onLoading={onLoading}
				dateStolen={stolenBikeDetails.date_stolen}
				stolenLocation={stolenBikeDetails.stolen_location}
				title={stolenBikeDetails.title}
				status={stolenBikeDetails.status}
				frameColors={stolenBikeDetails.frame_colors}
			/>
			{onLoading ? (
				<SkeletonMap />
			) : isEmptyArr(stolenBikeDetails.stolen_coordinates) ? (
				<MapNoData />
			) : (
				<MapWrapper
					onLoading={onLoading}
					lng={stolenBikeDetails.stolen_coordinates[1]}
					lat={stolenBikeDetails.stolen_coordinates[0]}
				/>
			)}
			{onLoading ? (
				<h1 className={'w-1/4 h-6 my-4 bg-slate-300 rounded-sm animate-pulse'} />
			) : (
				<h1 className={'text-2xl uppercase my-4'}>description of incident</h1>
			)}

			{onLoading ? (
				<p className={'w-1/4 h-3 bg-slate-300 rounded-sm animate-pulse'} />
			) : (
				<p>{stolenBikeDetails.description ? stolenBikeDetails.description : 'N/A'}</p>
			)}
		</section>
	)
}

export default CasePage
