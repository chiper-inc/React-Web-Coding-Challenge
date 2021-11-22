import { useState, ChangeEvent, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchSearchCount, fetchSearch } from "../../services/api";
import { BikeItem } from "../../components/BikeItem";
import { Button } from "../../components/Button";
import { Wrapper, SearchWrapper, Total, WrapperList, WrapperPaginator, Text } from "./styles";
import { Loading } from "../../components/Loading";

interface IData {
  description: string,
  date_stolen: number
}

export const CasesList = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [showPaginator, setShowPaginator] = useState(true);

  const { isLoading: loadingCount, error: errorCount, data: dataCount } = useQuery("search-count", () =>
    fetchSearchCount()
  );

  const { isLoading: loadingData, error } = useQuery(["search", page], () =>
    fetchSearch(page, 10),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setData(data.bikes);
        setRows(data.bikes);
      },
    },
  );

  useEffect(() => {
    if (!searchKey && !dateFrom && !dateTo) {
      setRows(data);
      setShowPaginator(true);
    } else {
      let from: number;
      let to: number;
      let filteredData = data;

      if (!!dateFrom) {
        let fromTmp = dateFrom.replaceAll('-', '.');
        from = new Date(fromTmp).getTime() / 1000;
        filteredData = filteredData.filter((row: IData) => row.date_stolen >= from)
      };

      if (!!dateTo) {
        const toTmp = dateTo.replaceAll('-', '.');
        to = new Date(toTmp).getTime() / 1000;
        filteredData = filteredData.filter((row: IData) => row.date_stolen <= to)
      };
      
      if (!!searchKey) {
        filteredData = data.filter((row: IData) => {
          const data =
            row.description?.toLowerCase().includes(searchKey.toLowerCase())
          return data;
        });
      }
      setShowPaginator(false);
      setRows(filteredData);
    }
  }, [data, searchKey, dateFrom, dateTo]);

  if (loadingCount || loadingData) return <Loading />;

  if (errorCount || error) return <div>An error has occurred</div>;

  const totalPageCount = Math.ceil(dataCount.stolen / 10);

  const currentDate = new Date().toISOString().slice(0, 10);

  const cleanSearch = () => {
    setSearchKey('');
    setDateFrom('');
    setDateTo('');
  }

  return (
    <Wrapper>
      <SearchWrapper>
        <input
          className="search-input"
          type="search"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchKey(e.target.value)}
          placeholder="Search by description"
        />
        <input
          type="date"
          min="2018-01-01"
          max={currentDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDateFrom(e.target.value)}
        />
        <input
          type="date"
          min="2018-01-01"
          max={currentDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDateTo(e.target.value)}
        />
        <Button
          onClick={() => cleanSearch()}
          size="small"
        >
          Clean
        </Button>
      </SearchWrapper>
      <Total>
        <b>Total:</b>
        {` ${new Intl.NumberFormat().format(dataCount.stolen)}`}
      </Total>
      <WrapperList>
        {rows.length === 0 ? (
          <Text>No data.</Text>
        ) : (
            rows.map((item: any) => (
            <BikeItem key={`bike-${item.id}`} {...item} />
          ))
        )}
      </WrapperList>
      {
        showPaginator && (
        <WrapperPaginator>
          <Button
            onClick={() => setPage(1)}
            disabled={page === 1}
            size="small"
          >
            First Page
          </Button>
          <Button
            onClick={() => setPage(page => page - 1)}
            disabled={page === 1}
            size="small"
          >
            Prev Page
          </Button>
          <Text>Page {page} of {totalPageCount}</Text>
          <Button
            onClick={() => setPage(page => page + 1)}
            disabled={page === totalPageCount}
            size="small"
          >
            Next Page
          </Button>
          <Button
            onClick={() => setPage(totalPageCount)}
            disabled={page === totalPageCount}
            size="small"
          >
            Last Page
          </Button>
        </WrapperPaginator>
        )
      }
    </Wrapper>
  );
};
