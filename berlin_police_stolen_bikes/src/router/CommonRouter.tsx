import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { CommonTemplate } from '../components/templates/index.templates'
import { CasePage, HomePage } from '../pages/index.pages'

const CommonRouter = () => (
	<BrowserRouter>
		<CommonTemplate>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path={'case/:caseId'} element={<CasePage />} />
			</Routes>
		</CommonTemplate>
	</BrowserRouter>
)

export default CommonRouter
