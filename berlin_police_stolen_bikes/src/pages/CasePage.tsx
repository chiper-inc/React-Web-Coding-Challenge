import { FC } from 'react'
import { useParams } from 'react-router-dom'

const CasePage: FC = () => {
	const { caseId } = useParams()

	return <h1>Case Page {caseId}</h1>
}

export default CasePage
