import { FC, LegacyRef } from 'react'

interface MapItemProps {
	mapRef: LegacyRef<HTMLDivElement> | undefined
}

const MapItem: FC<MapItemProps> = ({ mapRef }) => {
	return <div ref={mapRef} className={'w-full h-mid-screen'} />
}

export default MapItem
