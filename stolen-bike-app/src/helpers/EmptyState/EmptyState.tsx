import { WrapperEmpty } from "../EmptyState/EmptyState.styles";
import Empty from './../../assets/img/404.png';

export const EmptyState = () => {
  return (
    <WrapperEmpty>
        <img src={Empty} alt="" />
        <br />
        <b>No Bikes :(</b>
    </WrapperEmpty>
  )
}
