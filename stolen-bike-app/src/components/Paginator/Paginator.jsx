import { WrapperPaginator, Button } from './Paginator.styles'

export const Paginator = ({page, setPage}) => {
    const handlePrevPage = () => setPage(page > 0 ? page-1 : 0);
    const handleNextPage = () => setPage(page+1);

    return (
        <WrapperPaginator>
            { page>0 && 
                <Button type="button" onClick={handlePrevPage}>
                    <i className="fa-solid fa-chevron-left"></i>
                </Button>
            }
            <Button type="button" onClick={handleNextPage}>
                <i className="fa-solid fa-chevron-right"></i>
            </Button>
        </WrapperPaginator>
    )
}
