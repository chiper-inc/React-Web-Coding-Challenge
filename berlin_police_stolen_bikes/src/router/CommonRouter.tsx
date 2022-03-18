import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from '../pages/index.pages'

const CommonRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default CommonRouter
