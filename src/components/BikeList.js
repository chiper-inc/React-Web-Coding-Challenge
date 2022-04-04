import React, { useContext, useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import BikeConsumer from "../api/BikeConsumer";
import { Bike } from "../context/bike";



const BikeList = () => {
  const { state, dispatch } = useContext(Bike);
  const [isResult, setIsResult] = useState(null);


  function handlePageChange(pageNumber) {
    dispatch({ key: ['pagination', 'page'], payload: pageNumber });
    dispatch({
      key: ['pagination', 'bikes'], payload: state.getIn(['bikes', 'filter'])
        .slice(pageNumber * 10 - 10, pageNumber * 10 - 1)
    });
  }


  useEffect(() => {
    BikeConsumer.getAll((status) => {
      setIsResult(status.isResult);
      if (status.isResult === 'success') {
       
        dispatch({ key: ['bikes', 'all'], payload: status.data.bikes });
        dispatch({ key: ['bikes', 'filter'], payload: status.data.bikes });
        dispatch({ key: ["pagination", 'bikes'], payload: status.data.bikes.slice(0, 9) });
      }
    })
  }, [state.bikes]);

  useEffect(() => {
    dispatch({
      key: ['pagination', 'bikes'], payload: state.getIn(['bikes', 'filter'])
        .slice(0, 9)
    });
  }, [state.getIn(['search'])]);

  return <>{
    {
      success: <List state={state} handlePageChange={handlePageChange} />,
      error: <div className="alert alert-dark">Error in the request</div>,
      null: <div>Loading</div>
    }[isResult]
  }</>;
}


const List = ({ state, handlePageChange }) => <div className="row">
  <div className="col-md-12">
    <div className="row">
      <div className="col-md-12">
        <br />
        <span className="float-right">{`Total ${state.getIn(['bikes', 'filter']).length}`}</span>
      </div>
    </div>
    <div className="row">
     
      <div className="col-md-12">
        <ul className="list-unstyled" data-testid="all-list">
          {
            state.getIn(['pagination', 'bikes'])
              .map(t => (
                <li key={t.id} className="list-group-item media" >
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img className="card-img" src={t.thumb} alt=""></img>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <a href={t.url}>
                            <h5 className="card-title">{t.title}</h5>
                          </a>
                          <p className="card-text">{t.description}</p>
                          <p className="card-text">{`${new Date(t.date_stolen).toUTCString()}, ${t.stolen_location}`}</p>
                          <p className="card-text"><small className="text-muted">Reported {t.year}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </div>
    <br />
    <div className="row justify-content-center">
      <Pagination
        itemClass="page-item"
        linkClass="page-link"
        activePage={state.getIn(['pagination', 'page'])}
        itemsCountPerPage={10}
        totalItemsCount={state.getIn(['bikes', 'filter']).length || 0}
        pageRangeDisplayed={5}
        onChange={(page) => handlePageChange(page)}
      />
    </div>
  </div>
</div>;

export default BikeList;
