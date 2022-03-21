interface BikeProps {
	date_stolen: number | null
	description: null | string
	frame_colors: string[]
	frame_model: null | string
	id: number
	is_stock_img: boolean
	large_img: null | string
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

export default BikeProps
