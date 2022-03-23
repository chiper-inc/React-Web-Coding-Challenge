import axios from 'axios'
import { toast } from 'react-toastify'

const getStolenBikesCount = async (distance: number, location: string, keyword: string) => {
	try {
		const { data } = await axios(
			`/search/count?serial=${keyword}&location=${location}&distance=${distance}&stolenness=all`
		)

		return data
	} catch ({ message }) {
		toast.error(`${message}`)
	}
}

export default getStolenBikesCount
