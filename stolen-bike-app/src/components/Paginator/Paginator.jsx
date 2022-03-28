import { WrapperPaginator, Button } from './Paginator.styles'

export const Paginator = ({setPage}) => {
    const handlePrevPage = () => setPage((prevPage) =>  prevPage > 0 ? prevPage-1 : 0);
    const handleNextPage = () => setPage((prevPage) => prevPage+1);

    return (
        <WrapperPaginator>
            <Button type="button" onClick={handlePrevPage}>
                <i className="fa-solid fa-chevron-left"></i>
            </Button>
            <Button type="button" onClick={handleNextPage}>
                <i className="fa-solid fa-chevron-right"></i>
            </Button>
        </WrapperPaginator>
    )
}
