import axios from 'axios'
import { toast } from 'react-toastify'

const getStolenBikeCount = async (distance: number, location: string, keyword = '') => {
	try {
		const { data } = await axios(
			`/search/count?serial=${keyword}&location=${location}&distance=${distance}&stolenness=proximity`
		)

		return data
	} catch ({ message }) {
		toast.error(`${message}`)
	}
}

export default getStolenBikeCount
