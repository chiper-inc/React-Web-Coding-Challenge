import axios from 'axios'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { CommonRouter } from './router/index.router'
import './styles/base/_base.css'

axios.defaults.baseURL = 'https://bikeindex.org:443/api/v3'
axios.defaults.headers.common['Content-type'] = 'application/json'

ReactDOM.render(
	<StrictMode>
		<CommonRouter />
		<ToastContainer
			draggable={true}
			autoClose={3000}
			closeOnClick={true}
			pauseOnHover={true}
			hideProgressBar={false}
			position={'bottom-right'}
		/>
	</StrictMode>,
	document.getElementById('root')
)
