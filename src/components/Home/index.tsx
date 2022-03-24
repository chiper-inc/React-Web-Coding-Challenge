import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { MainHome, BodyByke } from './styles';
import { Filters } from '../Filters';
import { BykeList } from '../BykeList';
import { ItemByke } from '../ItemByke';
import { PaginationList } from "../PaginationList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { fetchBykes } from "../../redux/actions";
import useFetch from "../../hooks/useFetch";
import { SkeletoList } from "../SkeletonList";

export interface FormFilter {
    query?: string;
    readonly per_page?: number;
    page?: any,
    colors?: string,
    readonly stolenness?: string
}

const initialValueFilter: FormFilter = {
  per_page: 10,
  query: '',
  page: 1,
  colors: ''
};

function Home () {
  const dispatch = useDispatch();
  const [initialValue, setInitialValue] = useState<FormFilter>(initialValueFilter);
  // get list colors
  // @ts-ignore
  const { data: { colors } } = useFetch(`${process.env.REACT_APP_API_URL}selections/colors`);
  const { data, total, pageMax, loading, error } = useSelector((state: RootState) => state.bykes);

  useEffect(() => {
    dispatch(fetchBykes(initialValue));
  }, [initialValue]);
  /**
     * @description this function is execute when submit from Form
     */
  const onFindBykes = (values: FormFilter) => {
    setInitialValue(
      {
        ...values,
        page: 1
      }
    );
  };
    /**
     * @description this function is execute when change pagination
     * @param page
     */
  const onChangePage = (page: number) => {
    setInitialValue(
      {
        ...initialValue,
        page
      }
    );
  };

  return (
        <MainHome>
            <Header/>
            <BodyByke>
                <Filters onFindBykes={onFindBykes} colors={colors} initialValue={initialValueFilter}/>
                <p>Total Bykes: {total}</p>

                {error &&
                    <p>An error has occurred</p>
                }
                {loading &&
                    <SkeletoList/>
                }

                {!loading && !error && <>
                    <BykeList
                        bykes={data}
                        render={(item, index) => <ItemByke key={`item-id${index}`} {...item} />}
                    />
                    <PaginationList page={initialValue.page} onChangePage={onChangePage} count={pageMax || 0}/>
                </>
                }

            </BodyByke>
        </MainHome>
  );
}

export { Home };
