import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import styles from "../../sass/home/home.module.scss";
import { Zoom } from "react-awesome-reveal";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";
import { CalendarDateFill } from "@styled-icons/bootstrap/CalendarDateFill";
import { Map } from "@styled-icons/boxicons-solid/Map";
import { LocalPolice } from "@styled-icons/material-outlined/LocalPolice";
import Sorry from "../images/sorry.gif";
const Home = () => {
  const [loading, seTLoading] = useState(true);

  const [paginate, setPaginate] = useState({
    base: 0,
    top: 4,
  });

  const [dateSearchBase, setDateSearchBase] = useState(new Date(1995, 1, 1));

  const [dateSearchTop, setDateSearchTop] = useState(new Date());

  const [searchDescription, setSearchDescription] = useState("");

  const [autoDescription, setAutoDescription] = useState([]);

  const [smallLoading, setSmallLoading] = useState(false);

  const [bikes, setBikes] = useState("");
  let listPerPage = 5;

  let pages = [];

  useEffect(() => {
    const fetchBikes = async () => {
      await axios
        .get(
          "https://bikeindex.org:443/api/v3/search?page=1&per_page=25&query=berlin&location=IP&distance=10&stolenness=stolen"
        )
        .then((response) => {
          setBikes(response.data.bikes);
        });
      seTLoading(false);
    };
    fetchBikes();
  }, []);

  for (let i = 0; i < Math.ceil(bikes?.length / listPerPage); i++) {
    pages.push(i + 1);
  }

  const handleInputChange = (event) => {
    setSearchDescription(event.target.value);
    let auxFilter = bikes.map((item) => item.description);
    auxFilter = auxFilter.filter((item) => item !== null);
    setAutoDescription(
      auxFilter.filter((item) =>
        item.toLowerCase().includes(searchDescription.toLowerCase())
      )
    );
    if (event.target.value.length < 1) {
      setAutoDescription([]);
    }
  };

  const handlePaginate = (page) => {
    switch (page) {
      case 1:
        setPaginate({ base: 0, top: 4 });
        break;
      case 2:
        setPaginate({ base: 4, top: 8 });
        break;
    }
  };

  const handleAutocomplete = (description) => {
    setSearchDescription(description);
  };

  const handleDateBase = (event) => {
    setDateSearchBase(new Date(event.target.value).getTime() / 1000);
  };

  const handleDateTop = (event) => {
    setDateSearchTop(new Date(event.target.value).getTime() / 1000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSmallLoading(true);
    let auxFilter = [];
    await axios
      .get(
        "https://bikeindex.org:443/api/v3/search?page=1&per_page=25&query=berlin&location=IP&distance=10&stolenness=stolen"
      )
      .then(async (response) => {
        auxFilter = response.data.bikes;
      });
    if (searchDescription) {
      auxFilter = auxFilter.filter((item) => item.description !== null);
      auxFilter = auxFilter.filter((item) =>
        item.description.toLowerCase().includes(searchDescription.toLowerCase())
      );
      auxFilter = auxFilter.filter((item) => item.date_stolen);
    }
    auxFilter = auxFilter.filter(
      (item) =>
        item.date_stolen > dateSearchBase && item.date_stolen < dateSearchTop
    );
    await setBikes(auxFilter);
    setSmallLoading(false);
  };

  return (
    <div className={styles.containerHome}>
      <div className={styles.sortHome}>
        <Zoom className={styles.zoom}>
          <div className={styles.sortTitle}>
            <p className={styles.title}>Welcome to stolen Berlin bicycles</p>
            <LocalPolice className={styles.police} />
          </div>
        </Zoom>
        {loading ? (
          <div className={styles.sortLoader}>
            <div className={styles.loader} />
          </div>
        ) : (
          <Fragment>
            <Zoom className={styles.zoom}>
              <div className={styles.sortForm}>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <input
                    onChange={handleInputChange}
                    placeholder="Search case descriptions"
                    type="text"
                    value={searchDescription}
                    className={styles.input}
                  />
                  <Fragment>
                    {autoDescription.length === 0 ? null : (
                      <Fragment>
                        <Zoom className={styles.zoom}>
                          <div className={styles.sortTitleAuto}>
                            <p className={styles.titleAuto}>
                              Similar Cases, you can select one of these cases
                            </p>
                          </div>
                          <div className={styles.flexAuto}>
                            {autoDescription.map((item, index) => (
                              <textarea
                                key={index}
                                onClick={() => handleAutocomplete(item)}
                                className={styles.inputAuto}
                                defaultValue={item}
                                type="text"
                                readOnly
                              />
                            ))}
                          </div>
                        </Zoom>
                      </Fragment>
                    )}
                  </Fragment>
                  <div className={styles.eachInput}>
                    <label className={styles.label}>
                      {" "}
                      <CalendarDateFill className={styles.iconsBikes} /> From
                    </label>
                    <input
                      onChange={handleDateBase}
                      required={true}
                      type="date"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.eachInput}>
                    <label className={styles.label}>
                      {" "}
                      <CalendarDateFill className={styles.iconsBikes} /> To
                    </label>
                    <input
                      onChange={handleDateTop}
                      required={true}
                      type="date"
                      className={styles.input}
                    />
                  </div>
                  <button
                    data-testid="button"
                    type="submit"
                    className={styles.buttonSearch}
                  >
                    <SearchAlt className={styles.iconsBikes} />
                    Search
                  </button>
                </form>
              </div>
            </Zoom>
            <div className={styles.sortBicycles}>
              {smallLoading ? (
                <div className={styles.smallSortLoader}>
                  <div className={styles.loader} />
                </div>
              ) : (
                <Fragment>
                  {bikes.length === 0 ? (
                    <Fragment>
                      <Zoom className={styles.zoom}>
                        <div className={styles.sortSorry}>
                          <p className={styles.sorry}>
                            Sorry, we could not find your bike
                          </p>
                          <div className={styles.sortImageSorry}>
                            <img
                              className={styles.imageSorry}
                              src={Sorry}
                              alt=""
                            />
                          </div>
                        </div>
                      </Zoom>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Zoom className={styles.zoom}>
                        <div className={styles.sortPaginate}>
                          <div className={styles.sortTitlePaginate}>
                            <p className={styles.titlePaginate}>
                              Select a page
                            </p>
                          </div>
                          <div className={styles.sortButtonsPaginate}>
                            {pages &&
                              pages.map((item, index) => (
                                <button
                                  onClick={() => handlePaginate(item)}
                                  key={index}
                                  className={styles.button}
                                >
                                  {item}
                                </button>
                              ))}
                          </div>
                        </div>
                        <div className={styles.sortTotal}>
                          <p className={styles.total}>
                            Total of bycicles reported: {bikes.length}
                          </p>
                        </div>
                      </Zoom>
                      {bikes &&
                        bikes
                          .slice(paginate.base, paginate.top)
                          .map((item, index) => (
                            <Zoom className={styles.zoomBicycles} key={index}>
                              <div className={styles.eachBycicle}>
                                <div className={styles.sortTitleBycicle}>
                                  <p className={styles.titleBycicle}>
                                    {item.title}
                                  </p>
                                </div>
                                <div className={styles.upBycicle}>
                                  <p className={styles.descriptionByCicle}>
                                    <CalendarDateFill
                                      className={styles.iconsBikes}
                                    />{" "}
                                    Date:{" "}
                                    {new Date(
                                      item.date_stolen * 1000
                                    ).toDateString()}
                                  </p>
                                  <p className={styles.descriptionByCicle}>
                                    <Map className={styles.iconsBikes} />
                                    Location: {item.stolen_location}
                                  </p>
                                </div>
                                <div className={styles.downBycicle}>
                                  {item.description ? (
                                    <textarea
                                      readOnly
                                      className={styles.textDescription}
                                      defaultValue={item.description}
                                    />
                                  ) : null}
                                  <div className={styles.sortImageBycicle}>
                                    {item.thumb ? (
                                      <img
                                        className={styles.imageBycile}
                                        alt=""
                                        src={item.thumb}
                                      />
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            </Zoom>
                          ))}
                    </Fragment>
                  )}
                </Fragment>
              )}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Home;
