import { useBikeIndex } from "../../network/api/hooks/useBikeIndex";
import { Button } from "../StyledComponents/Button";
import { IPagination } from "./interface";
import './styles.scss';

const Pagination = ({ currentPage, pages, onSubmit }: IPagination) => {
  return (
    <section className="Pagination">
    <Button onClick={()=> onSubmit(1)}>{`<< First`}</Button>
    <Button onClick={()=> onSubmit(currentPage > 1 ? currentPage - 1 : currentPage)}>{`< Prev`}</Button>
    <span> {currentPage} / {pages}</span>
    <Button onClick={()=> onSubmit(currentPage < pages ? currentPage + 1 : currentPage)}>{`> Next`}</Button>
    <Button onClick={()=> onSubmit(pages)}>{`>> Last`}</Button>
    </section>
  )
}

export default Pagination;
