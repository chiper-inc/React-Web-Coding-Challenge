import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../redux/actions';
import { State } from '../redux/reducer';

export const useHandlePagination = () => {

  const index = useSelector((state:State) => state.actualPage);
  const total = useSelector((state:State) => state.stolenBikes.length);
  const dispatch = useDispatch();

  const top = Math.ceil(total / 10);

  const nextPage = () => {
    if (index < top) { dispatch(changePage(index + 1)); }
  };

  const prevPage = () => {
    if (index > 1) { dispatch(changePage(index - 1)); }
  };

  const goFirst = () => {
    dispatch(changePage(1));
  };

  const goLast = () => {
    dispatch(changePage(top));
  };
  
  return {
    index,
    nextPage,
    prevPage,
    goFirst,
    goLast,
  };
};

export default useHandlePagination;
