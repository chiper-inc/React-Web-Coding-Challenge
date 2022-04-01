import { Wrapper } from './BikesList.styles';
import { BikeItem } from '../../components/BikeItem/BikeItem';
import { Search } from '../../components/Search/Search';
import { useGetBikes } from '../../hooks/useGetBikes';
import { Loading } from '../../helpers/Loading/Loading';
import { Error } from '../../helpers/Error/Error';
import { EmptyState } from './../../helpers/EmptyState/EmptyState';
import { Paginator } from '../../components/Paginator/Paginator';

export const BikesList = () => {
    const {bikes, loading, error, page, setPage, setQuery} = useGetBikes();
    return (
        <Wrapper>
            <Search setQuery={setQuery}/>
            {loading ? (
                <Loading />
            ) : error ? (
                <Error />
            ) : !bikes ? (
                <EmptyState />
            ) : (
                <>
                    {bikes.map(bike => <div key={bike.id}><BikeItem bike={bike} /></div>)}
                </>
            )}
            <Paginator page={page} setPage={setPage} />
        </Wrapper>
    )
}
