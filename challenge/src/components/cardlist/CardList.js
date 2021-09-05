import React from "react";
import PropTypes from "prop-types";
import Card from "../card/Card";
import Loader from "../loader/Loader";

const CardList = ({ loading, cases, currentBikes }) => {
  return (
    <div>
      <h4 style={{ paddingLeft: "7%", color: "#006dae" }}>
        Total Cases Found: {cases}
      </h4>
      {loading ? (
        <Loader />
      ) : (
        currentBikes?.map((b) => <Card key={b.id} {...b} />)
      )}
    </div>
  );
};

CardList.propTypes = {
  loading: PropTypes.bool,
  cases: PropTypes.number,
  currentBikes: PropTypes.array,
};

export default CardList;
