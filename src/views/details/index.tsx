/* eslint-disable no-extend-native */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ErrorData, Loading, Map } from '../../components';
import useDateFull from '../../hooks/useDateFull';
import useOnlyDate from '../../hooks/useOnlyDate';
import { DetailsType } from '../../types/types';
import BikesServices from '../../utils/services/BikesServices';
import './styles.scss';

interface DetailsProps {
  id: DetailsType['id'];
  info: any;
  dateTransform: string;
}
const Details = () => {
  const { id }: DetailsProps = useParams();
  const [info, setInfo]: DetailsProps['info'] = useState({});
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const dateTransform = useDateFull(info);
  const stolen_at = useOnlyDate(info);

  const searchID = async () => {
    try {
      const infoResponse = await BikesServices.searchID(id);
      console.log(infoResponse.bike);
      setInfo(infoResponse.bike);

      setLoading(false);
    } catch (err) {
      console.error('Ocurrio un error en search ID', err);
      setLoading(false);
      setShowError(true);
    }
  };

  useEffect(() => {
    searchID();
  }, []);

  useEffect(() => {
    // setDateTransform(date);
  }, [info]);

  return (
    <div className="details">
      {loading ? (
        <Loading />
      ) : showError ? (
        <ErrorData />
      ) : (
        <div className="detail-bike">
          <section className="header-detail flex flex-col">
            <p className="stolen">stolen</p>
            <h1 className="title">
              {' '}
              {info?.year} <span>{info?.manufacturer_name}</span>{' '}
              {info?.frame_model}
            </h1>
            <p className="date">
              <span>Stolen </span>
              {dateTransform}
              <span> from </span>
              {info?.stolen_location}
            </p>
          </section>

          <section className="details">
            <div className="content-img w-full md:w-2/4">
              <img
                src={info?.large_img}
                alt={info?.title}
                className="img-bike"
              />
            </div>

            <div className="info-details w-full md:w-2/4">
              <div className="col-1">
                <p>
                  <span>Serial:</span>{' '}
                  {!!info?.serial ? info?.serial : 'No information'}
                </p>
                <p>
                  <span>Model:</span>{' '}
                  {!!info?.frame_model ? info?.frame_model : 'No information'}
                </p>
                <p>
                  <span>Primary colors:</span>{' '}
                  {!!info?.frame_colors
                    ? info?.frame_colors.map((color) => `${color} `)
                    : 'No information'}
                </p>
                <p>
                  <span>Type:</span>{' '}
                  {!!info?.type_of_cycle
                    ? info?.type_of_cycle
                    : 'No information'}
                </p>
              </div>
              <div className="col-2">
                <p>
                  <span>Manufacturer:</span>{' '}
                  {!!info?.manufacturer_name
                    ? info?.manufacturer_name
                    : 'No information'}
                </p>
                <p>
                  <span>Year:</span>{' '}
                  {!!info?.year ? info?.year : 'No information'}
                </p>
                <p>
                  <span>Frame size:</span>{' '}
                  {!!info?.frame_size ? info?.frame_size : 'No information'}
                </p>
                <p>
                  <span>Frame Material:</span>{' '}
                  {!!info?.frame_material_slug
                    ? info?.frame_material_slug
                    : 'No information'}
                </p>
              </div>
            </div>
          </section>

          <section className="distinguishing-features mt-4 w-full md:w-2/4">
            <h3 className="title-detail">distinguishing features</h3>
            <p>{!!info?.description ? info?.description : 'No description.'}</p>
          </section>

          <section className="theft-details mt-4 w-full md:w-2/4">
            <h3 className="title-detail">theft details</h3>

            <div className="content">
              <div className="content-map w-full md:w-3/5 md:pr-4">
                <Map
                  latitude={info?.stolen_record?.latitude}
                  longitude={info?.stolen_record?.longitude}
                  zoom={11}
                />
              </div>
              <div className="content-info w-full md:w-2/5">
                <span>Location</span>
                <p>
                  {!!info?.stolen_record?.location
                    ? info?.stolen_record?.location
                    : 'n/a'}
                </p>
                <span>locking description</span>
                <p>
                  {!!info?.stolen_record?.locking_description
                    ? info?.stolen_record?.locking_description
                    : 'n/a'}
                </p>
                <span>locking circumvented</span>
                <p>
                  {!!info?.stolen_record?.lock_defeat_description
                    ? info?.stolen_record?.lock_defeat_description
                    : 'n/a'}
                </p>
                <span>stolen at</span>
                <p>{!!stolen_at ? stolen_at : 'n/a'}</p>
              </div>
            </div>
          </section>
          <section className="description-of-incident mt-4 w-full md:w-2/4">
            <h3 className="title-detail">description of incident</h3>
            <p>
              {!!info?.stolen_record?.theft_description
                ? info?.stolen_record?.theft_description
                : 'No description.'}
            </p>
          </section>
          <section className="additional-parts mt-4 w-full md:w-2/4">
            <h3 className="title-detail">additional parts</h3>
            {!!info.components
              ? info.components.map(({ component_type, description }) => {
                  return (
                    <p>
                      <span>{!!component_type ? component_type : 'n/a'}</span>
                      {!!description ? description : 'n/a'}
                    </p>
                  );
                })
              : 'No components'}
          </section>
        </div>
      )}
    </div>
  );
};

export default Details;
