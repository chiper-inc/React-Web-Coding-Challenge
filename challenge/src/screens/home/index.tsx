import React, { useEffect } from 'react';
import { getSearchBikes } from '../../redux/search/actions';
import { connect } from 'react-redux';
import { RootType } from '../../redux';
import { BikeInterface } from '../../redux/search/reducer';
import assets from '../../assets/images';

interface HomePropsInterface {
  getSearchBikes: () => void;
  bikes: [] | BikeInterface[];
}

const Home = (props: HomePropsInterface) => {
  useEffect(() => {
    props.getSearchBikes();
  }, []);
  const { bikes } = props;
  return (
    <div>
      <h2>
        SEARCH FOR ALL BIKES
      </h2>
      <div className="list-bikes-container">
        {bikes.length > 0 && bikes.map((bike, index) => (
          <div key={bike.id} className="list-bikes" style={{ backgroundColor: index % 2 ? 'white' : '#eae9e9' }}>
            <div className="image-list-bake">
              <img alt="bike-list-item" src={bike.large_img || assets.defaultPlaceholder} />
            </div>
            <div className="detail-list-bike">
              <span>
                <b>Title: </b>{bike.title}
              </span>
              <span>
                <b>Description: </b>{bike.description}
              </span>
              <span>
                <b>Serial: </b> {bike.serial}
              </span>
            </div>
            <div className="detail-list-bike">
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
    </div>
  );
};

const mapStateToProps = ({ SearchReducer }: RootType) => {
  const { bikes } = SearchReducer;
  return {
    bikes,
  };
};

const mapStateToActions = {
  getSearchBikes,
};

export default connect(mapStateToProps, mapStateToActions)(Home);
