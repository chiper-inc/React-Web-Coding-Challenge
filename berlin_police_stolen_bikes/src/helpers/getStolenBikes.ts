import axios from 'axios'
import { toast } from 'react-toastify'

const getStolenBikes = async (
	distance: number,
	location: string,
	pageLength: number,
	currentPage: number,
	keyword: string
) => {
	try {
		const { data } = await axios(
			`/search?page=${currentPage}&per_page=${pageLength}&serial=${keyword}&location=${location}&distance=${distance}&stolenness=all`
		)

		return data
	} catch ({ message }) {
		toast.error(`${message}`)
	}
}

export default getStolenBikes
