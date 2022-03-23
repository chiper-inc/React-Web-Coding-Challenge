import { Map } from 'mapbox-gl'
import { FC, useLayoutEffect, useRef } from 'react'
import { MapItem } from '../../atoms/index.atoms'

interface MapWrapperProps {
	lat: number
	lng: number
	onLoading: boolean
}

const MapWrapper: FC<MapWrapperProps> = ({ lat, lng, onLoading }) => {
	const mapRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		const map = new Map({
			container: mapRef.current!,
			zoom: 14,
			pitch: 40,
			dragPan: false,
			scrollZoom: false,
			center: [lng, lat],
			doubleClickZoom: false,
			style: 'mapbox://styles/mapbox/streets-v11',
		})
	}, [onLoading])

	console.log({ lat, lng })
	return (
		<section>
			<MapItem mapRef={mapRef} />
		</section>
	)
}

export default MapWrapper
