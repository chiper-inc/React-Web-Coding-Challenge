import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StolenBikesContainer } from "../../components/StolenBikesContainer";
import { requestStolenBikes, requestPage } from "../../store/actionCreators";
import { PAGE_LEN_API, PAGE_LEN_UI } from "./configPagination";

const getTotal = (bikes) =>  bikes.length >= PAGE_LEN_API ? `+${PAGE_LEN_API}`: bikes.length;

const StolenBikesContainerC = ({
  loading,
  error,
  stolenBikes,
  page,
  actions,
}) => {
  useEffect(() => {
    actions.requestStolenBikes(1,PAGE_LEN_API);
  }, [actions]);

  const handleChangePage = (page) => {
    console.log(page)
    actions.requestPage(page);
  }
  return (
    <StolenBikesContainer
      bikes={stolenBikes}
      page={page}
      lengthPage={PAGE_LEN_UI}
      total={getTotal(stolenBikes)}
      onChangePage={handleChangePage}
      loading={loading}
      error={error}
    />
  );
};

const mapStateToProps = (state) => {
  const { loading, error, stolenBikes, page, lengthPage } = state;

  return {
    loading,
    error,
    page,
    lengthPage,
    stolenBikes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ requestStolenBikes, requestPage }, dispatch),
});

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(StolenBikesContainerC);
