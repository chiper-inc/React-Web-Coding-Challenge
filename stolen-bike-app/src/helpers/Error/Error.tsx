import { WrapperState } from '../Loading/Loading.styles'
import Error500 from './../../assets/img/500.png'

export const Error = () => {
  return (
    <WrapperState>
        <img src={Error500} alt="error 500" />
    </WrapperState>
  )
}
