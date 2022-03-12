/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { getSearchBikes, setSearchState } from '../../redux/search/actions';
import { connect } from 'react-redux';
import { RootType } from '../../redux';
import { BikeInterface } from '../../redux/search/reducer';
import assets from '../../assets/images';
import { Spinner, Pagination, Form } from 'react-bootstrap';

interface HomePropsInterface {
  setSearchState: (index: string, value: any) => void;
  getSearchBikes: () => void;
  bikes: [] | BikeInterface[];
  loading: boolean;
  total: number;
  page: number;
  search: string | null;
}

const Home = (props: HomePropsInterface) => {
  const { bikes, loading, total, page, search } = props;
  useEffect(() => {
    props.getSearchBikes();
  }, [page, search]);
  useEffect(() => {
    props.getSearchBikes();
  }, []);
  const pagination = () => {
    if (loading || search) return <></>;
    if (bikes.length === 0) {
      return (
        <img src={assets.notFound} alt="not found" />
      );
    }
    return (
      <div className="pagination-container">
        <Pagination>
          {page > 1 && (
            <Pagination.Item onClick={() => props.setSearchState('page', page - 1)}>
              Prev
            </Pagination.Item>
          )}
          <Pagination.Item key={page} active>
            {page}
          </Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item key={total / 10}>
            {total / 10}
          </Pagination.Item>
          {page < total && (
            <Pagination.Item onClick={() => props.setSearchState('page', page + 1)}>
              Next
            </Pagination.Item>
          )}
        </Pagination>
      </div>
    );
  };

  const loadingRender = () => (
    <div className="spinner-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );

  return (
    <div className="content-dashboard">
      <h2>
        SEARCH FOR ALL BIKES
      </h2>
      <hr/>
      <div>
        Total: {total} | Current page: {page}
      </div>
      <hr/>
      <div>
        <Form.Control
          placeholder="Search"
          onChange={(event) => props.setSearchState('search', event.target.value)}
        />
      </div>
      {loading ? (
        loadingRender()
      ) : (
        <div className="list-bikes-container">
          {bikes.length > 0 && bikes.map((bike, index) => (
            <div key={bike.id} className="list-bikes" style={{ backgroundColor: index % 2 ? 'white' : '#eae9e9' }}>
              <div className="image-list-bake">
                <img alt="bike-list-item" src={bike.large_img || assets.defaultPlaceholder} />
              </div>
              <div className="detail-list-bike">
                <h3>
                  <b>Title: </b>{bike.title}
                </h3>
                {bike.description && (
                  <span>
                  <b>Description: </b>{bike.description}
                </span>
                )}
              </div>
              <div className="detail-list-bike">
              <span>
                <b>Serial: </b> {bike.serial}
              </span>
                <span>
                <b>Color: </b> {bike.frame_colors}
              </span>
                {bike.stolen && (
                  <span>
                  <b>Stolen: </b> {bike.stolen_location}
                </span>
                )}
                {!bike.stolen && (
                  <span>
                  <b>Found: </b> {bike.location_found}
                </span>
                )}
                {bike.date_stolen && (
                  <span>
                  <b>Stolen date: </b> {new Date(bike.date_stolen * 1e3).toLocaleDateString()}
                </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {pagination()}
    </div>
  );
};

const mapStateToProps = ({ SearchReducer }: RootType) => {
  const { bikes, loading, total, page, search } = SearchReducer;
  return {
    bikes,
    loading,
    total,
    page,
    search,
  };
};

const mapStateToActions = {
  getSearchBikes,
  setSearchState,
};

export default connect(mapStateToProps, mapStateToActions)(Home);
