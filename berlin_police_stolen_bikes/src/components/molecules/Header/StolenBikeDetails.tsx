import moment from 'moment-timezone'
import { FC } from 'react'

interface HeaderStolenBikeDetailsProps {
	status: string
	title: string
	dateStolen: number
	frameColors: string[]
	stolenLocation: string
	onLoading: boolean
}

const HeaderStolenBikeDetails: FC<HeaderStolenBikeDetailsProps> = ({
	status,
	title,
	onLoading,
	frameColors,
	dateStolen,
	stolenLocation,
}) => {
	return (
		<header className={'mb-4'}>
			{onLoading ? (
				<h1 className={'w-1/4 h-8 bg-slate-300 rounded-sm animate-pulse'} />
			) : (
				<h1 className={'text-3xl capitalize'}>{`${status} ${title} (${frameColors?.join(', ')})
			`}</h1>
			)}
			{onLoading ? (
				<h4 className={'w-1/4 h-4 bg-slate-300 rounded-sm animate-pulse mt-2'} />
			) : (
				<h4 className={'capitalize'}>
					{dateStolen && <strong>{status} </strong>}
					{dateStolen && moment.tz(dateStolen, 'Europe/Berlin').format('MMM Do,' + ' hA z')}
					{!dateStolen && stolenLocation && <strong className={'lowercase'}> at </strong>}
					{stolenLocation}
				</h4>
			)}
		</header>
	)
}

export default HeaderStolenBikeDetails
